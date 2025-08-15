import { useEffect, useState } from "react";
import { NavContainer, NavMenu, Hamburger } from "./NavbarStyled";
import { Outlet, useNavigate } from "react-router-dom";

export function Navbar() {
  const [dias, setDias] = useState(0);
  const [horas, setHoras] = useState(0);
  const [min, setMin] = useState(0);
  const [seg, setSeg] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const datasEventos = ["23-08-2025", "04-10-2025"];

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
        setDias(Math.floor(totalSegundos / (3600 * 24)));
        setHoras(Math.floor((totalSegundos % (3600 * 24)) / 3600));
        setMin(Math.floor((totalSegundos % 3600) / 60));
        setSeg(totalSegundos % 60);
      }, 1000);

      return () => clearInterval(intervalo);
    }

    handleDate();
  }, [datasEventos]);

  return (
    <>
      <NavContainer>
        <button onClick={() => navigate("/")}>
          <img src="/logo.png" alt="Área 48" />
        </button>

        <div className="relogio">
          <div className="relogio-text">
            <h3>FALTAM</h3>
            <p>Para nosso próximo evento</p>
          </div>
          <div className="relogio-times">
            <div>
              <h3>{String(dias).padStart(2, "0")}</h3>
              <p>Dias</p>
            </div>
            <div>
              <h3>{String(horas).padStart(2, "0")}</h3>
              <p>Horas</p>
            </div>
            <div>
              <h3>{String(min).padStart(2, "0")}</h3>
              <p>Min</p>
            </div>
            <div>
              <h3>{String(seg).padStart(2, "0")}</h3>
              <p>Seg</p>
            </div>
          </div>
        </div>
      </NavContainer>
      <Hamburger onClick={() => setMenuOpen(!menuOpen)} open={menuOpen}>
        <span />
        <span />
        <span />
      </Hamburger>

      <NavMenu open={menuOpen}>
        <div className="container">
          <div className="navmenu">
            <button onClick={() => navigate("/sobre")}>Sobre</button>
            <button onClick={() => navigate("/ingressos")}>Ingressos</button>
            <button onClick={() => navigate("/inscricoes")}>Inscrições</button>
            <button onClick={() => navigate("/categorias")}>Categorias</button>
            <button onClick={() => navigate("/contatos")}>Contatos</button>
            <button onClick={() => navigate("/novidades")}>Novidades</button>
            <button>
              <img src="/loja.svg" alt="" /> Loja
            </button>
          </div>
        </div>
      </NavMenu>

      <Outlet />
    </>
  );
}
