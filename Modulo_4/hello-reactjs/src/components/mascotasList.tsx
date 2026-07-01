// src/components/mascotaCatalogList.tsx

interface mascota {
    id: number
    nombre: string
    precio: number
    edad: number
    tipo: string[]
}

interface MascotaCatalogListProps {
    mascotas: mascota[]
    title?: string
}

export default function mascotaCatalogList({
    mascotas,
    title = 'Catálogo',
}: MascotaCatalogListProps) {
    return (
        <section>
            <h2 style={{ marginBottom: 16 }}>{title}</h2>

            {mascotas.length === 0 && (
                <p style={{ color: '#999' }}>No hay mascotaos disponibles.</p>
            )}

            <ul style={{ listStyle: 'none', padding: 0 }}>
                {mascotas.map((mascota) => (
                    <li
                        key={mascota.id}
                        style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            padding: '10px 0',
                            borderBottom: '1px solid #eee',
                            
                        }}
                    >
                        <span>
                            {mascota.nombre} &nbsp;
                            {mascota.edad} &nbsp;
                            {mascota.tipo} &nbsp;
                        </span>
                        <strong>${mascota.precio.toFixed(2)}</strong>
                    </li>
                ))}
            </ul>
        </section>
    )
}