import { useEffect, useState } from "react";
import { ListaEventosEstilo } from "./ListaEventosStyled";

export function ListaEventos() {
  const [dias, setDias] = useState(0);
  const [horas, setHoras] = useState(0);
  const [min, setMin] = useState(0);
  const [seg, setSeg] = useState(0);
  const [nextEvents, setNextEvents] = useState([]);
  const [event, setEvent] = useState("carros");

  const datasEventos = ["23-08-2025", "04-10-2025"];

  function formatarDataIsoParaBR(dataIso) {
    const data = new Date(dataIso);
    const dia = String(data.getDate()).padStart(2, "0");
    const mes = String(data.getMonth() + 1).padStart(2, "0");
    const ano = data.getFullYear();

    return `${dia}/${mes}/${ano}`;
  }

  useEffect(() => {
    function handleDate() {
      const agora = new Date();

      const proximasDatas = datasEventos
        .map((str) => {
          const [dia, mes, ano] = str.split("-");
          return new Date(`${ano}-${mes}-${dia}T09:00:00`);
        })
        .filter((data) => data > agora)
        .sort((a, b) => a - b);

      setNextEvents(proximasDatas);

      const proxima = proximasDatas[0];
      if (!proxima) return;

      const intervalo = setInterval(() => {
        const agora = new Date();
        const diff = proxima - agora;

        if (diff <= 0) {
          clearInterval(intervalo);
          setDias(0);
          setHoras(0);
          setMin(0);
          setSeg(0);
          return;
        }

        const totalSegundos = Math.floor(diff / 1000);
        const dias = Math.floor(totalSegundos / (3600 * 24));
        const horas = Math.floor((totalSegundos % (3600 * 24)) / 3600);
        const minutos = Math.floor((totalSegundos % 3600) / 60);
        const segundos = totalSegundos % 60;

        setDias(dias);
        setHoras(horas);
        setMin(minutos);
        setSeg(segundos);
      }, 1000);

      return () => clearInterval(intervalo);
    }

    handleDate();
  }, []); // executa uma vez

  return (
    <ListaEventosEstilo>
      <div className="eventos-title">
        <h2>Próximos Eventos</h2>
        <div className="eventSelector">
          <button
            className={event === "carros" ? "active" : ""}
            onClick={() => setEvent("carros")}
          >
            CARROS
          </button>
          <button
            className={event === "motos" ? "active" : ""}
            onClick={() => setEvent("motos")}
          >
            MOTOS
          </button>
        </div>
      </div>

      {event === "carros" ? (
        <>
          <div className="eventoContent">
            <img src="/evento-carro.webp" alt="Eventos de carro" />
            <div className="relogio">
              <div className="relogio-text">
                <h3>FALTAM</h3>
              </div>
              <div className="relogio-times">
                <div>
                  <h3 className="dias">
                    {String(dias).padStart(2, "0")} <span>DIAS</span>
                  </h3>
                </div>
                <div>
                  <div>
                    <h3>{String(horas).padStart(2, "0")}h</h3>
                  </div>
                  <div>
                    <h3>{String(min).padStart(2, "0")}m</h3>
                  </div>
                  <div>
                    <h3>{String(seg).padStart(2, "0")}s</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="eventoInfo">
            <h3>Agenda Carros 2025</h3>
            <p>
              Prepare-se para um calendário épico de arrancadas que promete
              emoção e adrenalina!
            </p>
            {nextEvents.length > 0 && (
              <ul>
                {nextEvents.map((event) => (
                  <li key={event.toISOString()}>
                    {formatarDataIsoParaBR(event)}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </>
      ) : (
        <>
          <div className="eventoContent">
            <img src="/evento-carro.webp" alt="Eventos de moto" />
            <div className="relogio">
              <div className="relogio-text">
                <h3>FALTAM</h3>
              </div>
              <div className="relogio-times">
                <div>
                  <h3 className="dias">
                    {String(dias).padStart(2, "0")} <span>DIAS</span>
                  </h3>
                </div>
                <div>
                  <div>
                    <h3>{String(horas).padStart(2, "0")}h</h3>
                  </div>
                  <div>
                    <h3>{String(min).padStart(2, "0")}m</h3>
                  </div>
                  <div>
                    <h3>{String(seg).padStart(2, "0")}s</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="eventoInfo">
            <h3>Agenda Motos 2025</h3>
            <p>
              Prepare-se para um calendário épico de arrancadas que promete
              emoção e adrenalina!
            </p>
            {nextEvents.length > 0 && (
              <ul>
                {nextEvents.map((event) => (
                  <li key={event.toISOString()}>
                    {formatarDataIsoParaBR(event)}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </>
      )}
      <span></span>
      <p>*Datas sujeitas à alteração sem prévio aviso.</p>
      <a href="" className="btn">
        LOJA
      </a>
    </ListaEventosEstilo>
  );
}
