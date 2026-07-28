// src/App.tsx

import WelcomeBanner       from './components/WelcomeBanner'

import UserGreeting        from './components/UserGreeting'

import CurrentDateDisplay  from './components/CurrentDateDisplay'

import ColoredBox          from './components/ColoredBox'

import ConditionalGreeting from './components/ConditionalGreeting'

import FruitList           from './components/FruitList'

import PriceTag            from './components/PriceTag'

import StatusBadge         from './components/StatusBadge'

import MiniProfileCard     from './components/MiniProfileCard'

import SimpleInfoTable     from './components/SimpleInfoTable'

/*
import ProductCard         from './components/ProductCard'
import ProductCatalogList  from './components/ProductCatalogList'
import UserProfileCard     from './components/UserProfileCard'
*/
// ┌──────────────────────────────────────────────────────────────────────────┐
// │  Cambia PASO y guarda (Ctrl+S) para navegar entre componentes.          │
// │   1  WelcomeBanner       — banner estático sin props                    │
// │   2  UserGreeting        — props string + cálculo de iniciales          │
// │   3  CurrentDateDisplay  — fecha calculada al renderizar                │

// │   4  ColoredBox          — estilos dinámicos con props numéricas        │
// │   5  ConditionalGreeting — renderizado condicional + tipo unión         │
// │   6  FruitList           — lista tipada con .map()                      │
// │   7  PriceTag            — cálculos con props numéricas                 │
// │   8  StatusBadge         — Record para mapear tipos a estilos           │
// │   9  MiniProfileCard     — composición de componentes                   │
// │  10  SimpleInfoTable     — tabla con rows tipadas                       │
// │  11  ProductCard         — interfaz de props con opcionales y booleanas │
// │  12  ProductCatalogList  — lista con renderizado condicional de items   │
// │  13  UserProfileCard     — ejercicio: props complejas + rol             │
// └──────────────────────────────────────────────────────────────────────────┘
const PASO = 11


const repuestos = [
  { name: 'Filtro de aceite', emoji: '🔧', precio: 15.99 },
  { name: 'Pastillas de freno',  emoji: '🔧', precio: 45.99 },
  { name: 'Bujías', emoji: '🔧', precio: 12.99 },
  { name: 'Correa', emoji: '🔧', precio: 25.99 },
  { name: 'Amortiguador', emoji: '🔧', precio: 89.99 },
  { name: 'Filtro de aire', emoji: '🔧', precio: 18.99 },
]

const catalog = [
  { id: 1, name: 'Filtro de aceite',  price: 15.99 },
  { id: 2, name: 'Pastillas de freno', price: 45.99 },
  { id: 3, name: 'Bujías', price: 12.99, outOfStock: true },
  { id: 4, name: 'Correa de distribución',         price: 89.99 },
]

export default function App() {
  const content =
    PASO ===  1 ? <WelcomeBanner subtitle='Programadores Estrellas'/> :
    
    PASO ===  2 ? <UserGreeting name="Ana García" occupation="Desarrolladora Frontend" /> :

   
    PASO ===  3 ? <CurrentDateDisplay /> :
     
    PASO ===  4 ? (
      <div style={{ display: 'flex', gap: 12 }}>
        <ColoredBox color="#f59e0b" label="Primary" width={120} height={40} />
        <ColoredBox color="#8b5cf6" label="Success" />
        <ColoredBox color="#ec4899"  borderRadius={50}/>
        
      </div>
    ) :
   
    PASO ===  5 ? <ConditionalGreeting isLoggedIn={false} userName="Carlos" timeOfDay="morning" /> :
 
    PASO ===  6 ? <FruitList fruits={repuestos} title="Repuestos del Taller" /> :

    PASO ===  7 ? (
      <div style={{ display: 'flex', gap: 24, alignItems: 'flex-end' }}>
        <PriceTag amount={99.99} currency="USD" />
        <PriceTag amount={99.99} currency="USD" discountPercent={20} />
      </div>
    ) :
           
    PASO ===  8 ? (
      <div style={{ display: 'flex', gap: 8 }}>
        <StatusBadge status="active" />
        <StatusBadge status="pending" />
        <StatusBadge status="error" />
        <StatusBadge status="inactive" />
      </div>
    ) :
    
    PASO ===  9 ? (
      <MiniProfileCard
        fullName="Ana García"
        role="Senior Developer"
        department="Ingeniería"
        status="active"
        joinedYear={2019}
      />
    ) :
    
    PASO === 10 ? (
      <SimpleInfoTable
        title="Resumen del pedido"
        rows={[
          { label: 'Subtotal',  value: '$89.99' },
          { label: 'Envío',     value: '$5.00' },
          { label: 'Total',     value: '$94.99', highlight: true },
        ]}
      />
    ) :
   
    PASO === 11 ? <VehiculosTable title="Vehículo en Taller" description="Cambio de aceite y revisión general" highlighted /> :

    
    <p style={{ color: '#e00' }}>Paso {PASO}: crea el componente primero</p>

  return (
    <main style={{ maxWidth: 540, margin: '40px auto', fontFamily: 'sans-serif', padding: '0 16px' }}>
      {content}
    </main>
  )
}