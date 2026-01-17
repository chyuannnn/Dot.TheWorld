"use client"; // Required because Mapbox uses browser APIs

import { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import travelLog from '../data/data';

interface MapboxProps {
    selectedMarker: (id: any) => void;
}

export default function Map({ selectedMarker }: MapboxProps) {
    const mapContainerRef = useRef<HTMLDivElement>(null);
    const mapRef = useRef<mapboxgl.Map | null>(null);

    useEffect(() => {
        if (mapRef.current) return; // Prevent map from initializing more than once

        mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN || '';

        const map = new mapboxgl.Map({
            container: mapContainerRef.current!,
            style: 'mapbox://styles/mapbox/streets-v12',
            center: [101.9758, 4.2105],
            zoom: 4,
        });

        mapRef.current = map;

        // Wait for the map to load before adding markers
        map.on('load', () => {
            travelLog.forEach((trip) => {

                const popupContent = `
                    <div style="
                        font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
                        font-size: 14px;
                        font-weight: 600;
                        color: black;
                        letter-spacing: 0.025em;
                        padding: 4px 8px;
                        text-align: center;
                    ">
                        ${trip.name}
                    </div>
                `;

                const popup = new mapboxgl.Popup({
                    offset: 25,
                    maxWidth: '300px',
                    closeButton: false,
                }).setHTML(popupContent);

                const marker = new mapboxgl.Marker({
                    color: '#FF0000',
                    scale: 0.7
                })
                    .setLngLat([trip.locations.lng, trip.locations.lat])
                    .setPopup(popup)
                    .addTo(map);

                marker.getElement().addEventListener('click', () => {
                    mapRef.current?.flyTo({
                        center: [trip.locations.lng, trip.locations.lat],
                        zoom: 9,
                        speed: 1.15,
                        duration: 2000,
                        curve: 1.2,
                        easing: (t) => t * (2 - t),
                    });
                    selectedMarker(trip.id);
                });


            });
        });

        map.on('click', (e) => {
            const isMarkerClick = (e.originalEvent.target as HTMLElement).closest('.mapboxgl-marker');
            
            if (!isMarkerClick) {
                selectedMarker(null);
            }
        });

        return () => map.remove();
    }, []);

    return (
        <div className='relative w-full h-screen'>
            <div
                ref={mapContainerRef}
                style={{ width: '100%', height: '100%' }}
            />
        </div>
    );
}