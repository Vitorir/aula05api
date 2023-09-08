import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Curso from "../../Components/Curso";

function Eventos() {
  const [events, setEvents] = useState([]);
  const navigate = useNavigate()

  let url = "http://localhost:3001"

  const getEvents = async () => {
    try {
      const response = await fetch(url)
      if (!response.ok) {
        throw new Error(response.message)
      }

      const data = await response.json()
      setEvents(data)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getEvents()
  }, [])

  function mover_curso(e) {
    navigate(`/Eventos/${e.target.innerHTML}`)
  }


  return (
    <>
      <h1>Eventos</h1>
      {events.map((curso) => {
        return(
          <Curso
          key={curso.id}
          id={curso.id}
          fotos={curso.fotos[0].src}
          />
        )
      })}
      <button onClick={mover_curso}>programacao</button>
      <button onClick={mover_curso}>data</button>
    </>
  );
}

export default Eventos;
