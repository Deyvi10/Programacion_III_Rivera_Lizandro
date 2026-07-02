import { useAuth } from './contexts/AuthContext'
import AppHeader from './components/AppHeader'
import LoginForm from './components/LoginForm'
import ThemeToggle from './components/ThemeToggle'
import UserBadge from './components/UserBadge'

// 💡 Cambia este número del 1 al 4 para probar cada componente de la guía en tu navegador:
const PASO = 1

export default function App() {
  const { state } = useAuth()

  const content =
    PASO === 1 ? <ThemeToggle /> :
    PASO === 2 ? <UserBadge /> :
    PASO === 3 ? <LoginForm /> :
    PASO === 4 ? <AppHeader /> :
    <p style={{ color: '#e00' }}>Paso {PASO}: Crea el componente primero</p>

  return (
    <main style={{ maxWidth: 600, margin: '40px auto', fontFamily: 'sans-serif', padding: '0 16px' }}>
      {PASO === 1 ? content : (
        <>
          {state.user && (
            <p style={{ marginBottom: 16, fontSize: 14, color: '#6b7280' }}>
              Sesión activa: <strong>{state.user.name}</strong>
            </p>
          )}
          {content}
        </>
      )}
    </main>
  )
}