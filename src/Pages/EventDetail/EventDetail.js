import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

function EventDetail() {
    const [curso, setCurso] = useState({
        nome: "",
        fotos: [],
        duracao: "",
        descricao: ""
    })
    let { idCurso } = useParams()

    let url = "http://localhost:3001"

    const getEvent = async () => {
        try {
            const response = await fetch(`${url}/${idCurso}`)
            if (!response.ok) {
                throw new Error("Não foi possível obter dados do curso")
            }
            const data = await response.json()

            setCurso(data)
        } catch (error) {
            console.error(error)
        }
    }


    useEffect(() => {
        getEvent()
    }, [url]);

    return (
        <>
            <h1>Detalhe do Evento</h1>
            <h2>{curso.nome}</h2>
            <img src={curso.fotos.length > 0 ? curso.fotos[0].src : ""} />
            <p>{curso.duracao}</p>
            <p>{curso.descricao}</p>
        </>
    )
}

export default EventDetail