import { useNavigate } from "react-router-dom";
import { FooterSection } from "./FooterStyled";

export function Footer() {
  const navigate = useNavigate();
  return (
    <FooterSection>
      <button onClick={() => navigate("/#top")}>
        <img src="/logo-footer.png" alt="Área 48" />
      </button>
      <div className="redes">
        <a target="_blank" href="https://www.facebook.com/ListaArea48">
          <img src="/face.svg" alt="facebook" />
        </a>
        <a target="_blank" href="https://www.instagram.com/alistaarea48/">
          <img src="/insta.svg" alt="instagram" />
        </a>
        <a target="_blank" href="">
          <img src="/loja-redes.svg" alt="loja" />
        </a>
      </div>
      <div className="footerMenu">
        <button onClick={() => navigate("/ingressos#top")}>INGRESSOS</button>
        <button onClick={() => navigate("/inscricoes#top")}>INSCRIÇÕES</button>
        <button onClick={() => navigate("/categorias#top")}>CATEGORIAS</button>
        <button onClick={() => navigate("/contatos#top")}>CONTATOS</button>
      </div>
      <button className="btn">ENTRAR</button>
    </FooterSection>
  );
}
