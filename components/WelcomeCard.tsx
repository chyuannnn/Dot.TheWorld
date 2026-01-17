// src/components/WelcomeCard.tsx

interface WelcomeProps {
  title: string;
  description: string;
}

export default function WelcomeCard({ title, description }: WelcomeProps) {
  return (
    <div style={{ 
      border: '1px solid #ccc', 
      padding: '20px', 
      borderRadius: '8px',
      margin: '10px 0' 
    }}>
      <h2 style={{ color: '#0070f3' }}>{title}</h2>
      <p>{description}</p>
    </div>
  );
}
