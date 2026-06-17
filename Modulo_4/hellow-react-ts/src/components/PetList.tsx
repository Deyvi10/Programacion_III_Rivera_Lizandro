export interface Animal {
  id: number
  name: string
  type: 'Perro' | 'Gato' | 'Ave' | 'Reptil' | 'Otro'
  age: number
  price: number
  isAdopted?: boolean
}

interface PetListProps {
  pets: Animal[]
  storeName?: string
}

export default function PetList({
  pets,
  storeName = 'Nuestro Catálogo de Mascotas',
}: PetListProps) {
  return (
    <section>
      <h2 style={{ marginBottom: 16, color: '#222' }}>{storeName}</h2>

      {pets.length === 0 && (
        <p style={{ color: '#d9534f', fontWeight: 'bold' }}>
          Actualmente no hay mascotas disponibles en la tienda.
        </p>
      )}

      <ul style={{ listStyle: 'none', padding: 0 }}>
        {pets.map((pet) => (
          <li
            key={pet.id}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '12px 16px',
              borderBottom: '1px solid #eee',
              backgroundColor: pet.isAdopted ? '#fafafa' : '#fff',
              textDecoration: pet.isAdopted ? 'line-through' : 'none',
              color: pet.isAdopted ? '#999' : '#000',
            }}
          >
            <div>
              <strong style={{ fontSize: 16 }}>{pet.name}</strong>
              <span style={{ marginLeft: 8, fontSize: 13, color: '#666' }}>
                ({pet.type}, {pet.age} años)
              </span>
            </div>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              
              {pet.isAdopted && (
                <em style={{ fontSize: 12, color: '#f39c12' }}>Ya tiene hogar</em>
              )}
              <strong>${pet.price.toFixed(2)}</strong>
            </div>
          </li>
        ))}
      </ul>
      
      {pets.length > 0 && (
        <footer style={{ marginTop: 16, fontSize: 12, color: '#888' }}>
          Total de animales que se registraron: {pets.length}
        </footer>
      )}
    </section>
  )
}