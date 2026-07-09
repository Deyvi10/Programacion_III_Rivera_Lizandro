
import './App.css'

import LabRbButtons from "./Lab/LabRbButtons"

const PASO = 1
export default function App() {
  const content = 
    PASO === 1 ? <LabRbButtons /> : /*
      PASO === 2 ? <InlineStyleDemo /> :
        PASO === 3 ? <CssModuleDemo /> :
          PASO === 4 ? <StyledComponentsDemo /> :
            PASO === 5 ? <LiveStyleEditor /> :
              PASO === 6 ? <HoverDemo /> :
                PASO === 7 ? <ThemePanel /> :*/
                  <p style={{ color: '#e00' }}>Paso {PASO}: crea el componente primero</p>

  return (
    <main style={{ maxWidth: 640, margin: '0 auto', padding: '32px 16px' }}>
      {content}
    </main>
  )
}