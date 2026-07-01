// src/App.tsx


import MascotaCatalogList from './components/mascotasList'

interface mascota {
    id: number
    nombre: string
    precio: number
    edad: number
    tipo: string[]
}

const catalog: mascota[] = [
  { id: 1, nombre: 'Michi',  precio: 89.99, tipo:"Felino", edad:8},
  { id: 2, nombre: 'Noa"', precio: 349.99, tipo:"Felino" , edad:10},
  { id: 3, nombre: 'Lukas', precio: 29.99, tipo:"Canino" , edad:11},
  { id: 4, nombre: 'Manchas', precio: 59.99, tipo:"Canino" , edad:12},
  { id: 5, nombre: 'Goldy', precio: 5.99 , tipo:"Pez", edad:1},
]

export default function App() {
  return (
    <main style={{ maxWidth: 540, margin: '40px auto', fontFamily: 'sans-serif' }}>

      
      <MascotaCatalogList mascotas={catalog} title="Lista de mascotas" />

    </main>
  )
}