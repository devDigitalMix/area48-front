import { FooterSection } from "./FooterStyled";

export function Footer() {
  return (
    <FooterSection>
      <button>
        <img src="/logo-footer.png" alt="Área 48" />
      </button>
      <div className="redes">
        <a href="">
          <img src="/face.svg" alt="facebook" />
        </a>
        <a href="">
          <img src="/insta.svg" alt="instagram" />
        </a>
        <a href="">
          <img src="/loja-redes.svg" alt="loja" />
        </a>
      </div>
      <div className="footerMenu">
        <button>INGRESSOS</button>
        <button>INSCRIÇÕES</button>
        <button>CATEGORIAS</button>
        <button>CONTATOS</button>
      </div>
      <button className="btn">ENTRAR</button>
    </FooterSection>
  );
}
