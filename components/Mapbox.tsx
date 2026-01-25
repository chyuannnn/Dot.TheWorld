"use client";

import { useRef, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

interface MapboxProps {
    onMarkerClick: (id: null | number) => void;
    travelData: any[];
}

export default function Map({ onMarkerClick, travelData }: MapboxProps) {
    const mapContainerRef = useRef<HTMLDivElement>(null);
    const mapRef = useRef<mapboxgl.Map | null>(null);

    useEffect(() => {
        if (mapRef.current) return;

        mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN || '';

        const map = new mapboxgl.Map({
            container: mapContainerRef.current!,
            style: 'mapbox://styles/mapbox/streets-v12',
            center: [101, 4],
            zoom: 4,
        });

        mapRef.current = map;

        map.on('load', () => {
            // 1. Convert travelData to GeoJSON
            const geojson: GeoJSON.FeatureCollection = {
                type: 'FeatureCollection',
                features: travelData.map(trip => ({
                    type: 'Feature',
                    properties: { id: trip.id, name: trip.name },
                    geometry: {
                        type: 'Point',
                        coordinates: [trip.coordinates.lng, trip.coordinates.lat]
                    }
                }))
            };

            // 2. Add Source with clustering enabled
            map.addSource('trips', {
                type: 'geojson',
                data: geojson,
                cluster: true,
                clusterMaxZoom: 14, // Max zoom to cluster points on
                clusterRadius: 50 // Radius of each cluster when clustering points (defaults to 50)
            });

            // 3. Add Cluster Layer (the circles)
            map.addLayer({
                id: 'clusters',
                type: 'circle',
                source: 'trips',
                filter: ['has', 'point_count'],
                paint: {
                    'circle-color': [
                        'step',
                        ['get', 'point_count'],
                        '#51bbd6', 10,  // Blue if < 10 points
                        '#f1f075', 30,  // Yellow if < 30 points
                        '#f28cb1'       // Pink if > 30 points
                    ],
                    'circle-radius': [
                        'step',
                        ['get', 'point_count'],
                        20, 10, // 20px radius if < 10 points
                        30, 30, // 30px radius if < 30 points
                        40      // 40px radius if > 30 points
                    ]
                }
            });

            // 4. Add Cluster Count Layer (the text)
            map.addLayer({
                id: 'cluster-count',
                type: 'symbol',
                source: 'trips',
                filter: ['has', 'point_count'],
                layout: {
                    'text-field': '{point_count_abbreviated}',
                    'text-font': ['DIN Offc Pro Medium', 'Arial Unicode MS Bold'],
                    'text-size': 12
                }
            });

            // 5. Add Unclustered Layer (individual pins)
            map.addLayer({
                id: 'unclustered-point',
                type: 'circle',
                source: 'trips',
                filter: ['!', ['has', 'point_count']],
                paint: {
                'circle-color': '#4264fb',
                'circle-radius': 5,
                'circle-stroke-width': 2,
                'circle-stroke-color': '#ffffff'
                }
            });

            // --- INTERACTION HANDLERS ---

            // Click on cluster to zoom in
            map.on('click', 'clusters', (e) => {
                const features = map.queryRenderedFeatures(e.point, { layers: ['clusters'] });
                const clusterId = features[0].properties?.cluster_id;
                const source = map.getSource('trips') as mapboxgl.GeoJSONSource;
                
                source.getClusterExpansionZoom(clusterId, (err) => {
                    if (err) return;
                    map.easeTo({
                        center: (features[0].geometry as any).coordinates,
                        zoom: 7
                    });
                });
            });

            // Click on individual point
            map.on('click', 'unclustered-point', (e) => {
                const coordinates = (e.features![0].geometry as any).coordinates.slice();
                const { id, name } = e.features![0].properties!;

                onMarkerClick(id);

                map.flyTo({
                    center: coordinates,
                    zoom: 9
                });

                new mapboxgl.Popup()
                    .setLngLat(coordinates)
                    .setHTML(`<div style="color:black; padding:5px;">${name}</div>`)
                    .addTo(map);
            });

            // 2. Click on the map background
            map.on('click', (e) => {
                // queryRenderedFeatures checks if we clicked on our layers
                const features = map.queryRenderedFeatures(e.point, { 
                    layers: ['unclustered-point', 'clusters'] 
                });

                // ONLY clear the ID if we didn't click on a point or a cluster
                if (features.length === 0) {
                    console.log("Map background clicked: Clearing ID");
                    onMarkerClick(null);
                }
            });

            // Change cursor on hover
            map.on('mouseenter', 'clusters', () => { map.getCanvas().style.cursor = 'pointer'; });
            map.on('mouseleave', 'clusters', () => { map.getCanvas().style.cursor = ''; });
        });

        return () => map.remove();
    }, [travelData]); // Added travelData as dependency

    return (
        <div className='relative w-full h-screen'>
            <div ref={mapContainerRef} style={{ width: '100%', height: '100%' }} />
        </div>
    );
}