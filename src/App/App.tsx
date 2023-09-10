import * as Styled from "./style";
import imgCart from "../../public/images/icon-cart.svg";
import Reveal from "../components/Reveal";

function App() {
  return (
    <Reveal>
      <Styled.Container>
        <Styled.photoProduct />
        <Styled.Content>
          <span>P E R F U M E</span>
          <h1>Gabrielle Essence Eau de Parfum</h1>
          <p>
            Uma interpretação floral, solar e voluptuosa composta por Olivier
            Polge, Perfumista-Criador da Casa CHANEL.
          </p>

          <div>
            <strong>R$159,99</strong>
            <span>R$169,99</span>
          </div>

          <button>
            {" "}
            <img src={imgCart} alt="icone de carrinho" /> Add ao carrinho
          </button>
        </Styled.Content>
      </Styled.Container>
    </Reveal>
  );
}

export default App;
