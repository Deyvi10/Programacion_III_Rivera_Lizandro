// src/App.tsx

import VehiculoCard       from './components/VehiculoCard'

interface Vehiculo {
  id: number
  name: string
  price: number
  outOfStock?: boolean
}

const catalog: Vehiculo[] = [
  { id: 1, name: 'Filtro de aceite',  price: 15.99 },
  { id: 2, name: 'Pastillas de freno',       price: 45.99 },
  { id: 3, name: 'Bujías', price: 12.99, outOfStock: true },
  { id: 4, name: 'Correa de distribución',         price: 89.99 },
]

export default function App() {
  return (
    <main style={{ maxWidth: 540, margin: '40px auto', fontFamily: 'sans-serif' }}>

      <VehiculoCard
        title="Bienvenido al Taller Mecánico"
        description="Encuentra los mejores repuestos para tu vehículo"
        price={100}
      />

      <VehiculoCard title="Oferta del día" description="Pastillas de freno con 20% de descuento" />
      <VehiculoCard title="Novedades de la semana"/>

    </main>
  )
}
