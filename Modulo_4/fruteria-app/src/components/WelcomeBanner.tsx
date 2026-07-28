// src/components/WelcomeBanner.tsx
interface WelcomeProps {
    subtitle?: string
}

export default function WelcomeBanner({ subtitle }: WelcomeProps) {
  return (
    <div style={{ background: '#16c016', color: '#fff',opacity:0.5, padding: '16px 24px', borderRadius: 0 }}>
      <h1 style={{ margin: 0, fontSize: 32 }}>Bienvenido al curso de React</h1>
      <p style={{ margin: '6px 0 0', opacity: 0.85 }}>Aprende React 19 con TypeScript</p>
      <p style={{ margin: '6px 0 0', opacity: 0.85 }}>{subtitle?? 'Programacion III'}</p>
    </div>
  )
}