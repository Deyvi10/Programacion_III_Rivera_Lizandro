// src/components/VehiculoCard.tsx

interface VehiculoCardProps {
  title: string
  description?: string
  highlighted?: boolean
  price?: number
}

export default function VehiculoCard({
  title,
  description = '',
  highlighted = false,
  price = 0,
  
}: VehiculoCardProps) {
  return (
    <div
      style={{
        border: highlighted ? '2px solid gold' : '1px solid #ccc',
        borderRadius: 8,
        padding: 16,
        marginBottom: 12,
        backgroundColor: highlighted ? '#fffbea' : '#fff',
      }}
    >
      <h3 style={{ margin: '0 0 8px' }}>{title}</h3>
      <p style={{ margin: 0, color: '#555' }}>{description || 'Sin descripción'}</p>
      <p style={{ margin: 0, color: '#555' }}>Costo: ${price.toFixed(2)}</p>
    </div>
  )
}
