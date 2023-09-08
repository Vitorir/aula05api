import { useNavigate } from "react-router-dom"

function Curso({id, fotos, nome}) {
    const navigate = useNavigate()
    
    return(
        <div className="curso-card">
            <img src={fotos[0].src} />
            <h1>{nome}</h1>
            <button onClick={() => {
                navigate(`${id}`)
            }}>Ver Mais</button>
        </div>
    )
}

export default Curso