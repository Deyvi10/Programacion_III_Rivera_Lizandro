export interface PetCardProps {
  name: string
  type: 'Perro' | 'Gato' | 'Ave' | 'Reptil' | 'Otro'
  age: number
  price: number
  isAdopted?: boolean
  description?: string
}

export default function PetCard({
  name,
  type,
  age,
  price,
  isAdopted = false,
  description = 'Sin descripción adicional.',
}: PetCardProps) {
  return (
    <div
      style={{
        border: isAdopted ? '1px solid #ccc' : '2px solid #4CAF50',
        borderRadius: 12,
        padding: 20,
        marginBottom: 16,
        maxWidth: 350,
        backgroundColor: isAdopted ? '#f9f9f9' : '#f0fff0',
        opacity: isAdopted ? 0.6 : 1,
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2 style={{ margin: 0, color: '#333' }}>{name}</h2>
        <span
          style={{
            backgroundColor: isAdopted ? '#e0e0e0' : '#4CAF50',
            color: isAdopted ? '#666' : 'white',
            padding: '4px 12px',
            borderRadius: 16,
            fontSize: 12,
            fontWeight: 'bold',
          }}
        >
          {isAdopted ? 'Adoptado' : 'Disponible'}
        </span>
      </div>

      <p style={{ margin: '8px 0', fontSize: 14, color: '#555' }}>
        <strong>Tipo:</strong> {type} | <strong>Edad:</strong> {age} año(s)
      </p>
      
      <p style={{ margin: '0 0 12px', fontStyle: 'italic', color: '#666', fontSize: 13 }}>
        {description}
      </p>

      <div style={{ marginTop: 12, borderTop: '1px solid #ddd', paddingTop: 8 }}>
        <strong style={{ fontSize: 18, color: '#2c3e50' }}>${price.toFixed(2)}</strong>
      </div>
    </div>
  )
}