import { useState } from 'react'
import { Container, Alert, Button } from 'react-bootstrap'

export default function LabRbAlert() {
  // Un estado para cada alerta
  const [showSuccess, setShowSuccess] = useState(true)
  const [showError, setShowError] = useState(true)

  return (
    <Container className="py-4">
      <h2 className="h4 fw-bold mb-1">LAB: Alert</h2>
      <p className="text-secondary mb-3">Con dismissible y control de visibilidad.</p>

      {showSuccess ? (
        <Alert variant="success" onClose={() => setShowSuccess(false)} dismissible>
          <Alert.Heading>Operación exitosa</Alert.Heading>
          <p className="mb-0">El formulario se envió correctamente (demo).</p>
        </Alert>
      ) : (
        <Button className="me-2" onClick={() => setShowSuccess(true)}>
          Mostrar éxito
        </Button>
      )}

      {showError ? (
        <Alert variant="danger" onClose={() => setShowError(false)} dismissible>
          <Alert.Heading>Error en Calculo</Alert.Heading>
          <p className="mb-0">Error</p>
        </Alert>
      ) : (
        <Button onClick={() => setShowError(true)}>
          Mostrar error
        </Button>
      )}
    </Container>
  )
}