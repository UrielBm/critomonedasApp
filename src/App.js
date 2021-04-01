import styled from "@emotion/styled";
import axios from "axios";
import { useEffect, useState } from "react";
import imagen from "./assets/images/cryptomonedas.png";
import Cotizador from "./components/Cotizador";
import Form from "./components/Form";
import Spinner from "./components/Spinner";
import Title from "./components/Title";
const WrapperMain = styled.main`
  max-width: 990px;
  margin: 0 auto;
  text-align: center;
  @media (min-width: 720px) {
    display: flex;
    justify-content: space-around;
  }
`;
const WrapperSection = styled.section`
  flex-grow: 1;
`;
const Imagen = styled.img`
  width: 100%;
  margin-top: 5rem;
`;
function App() {
  const [getData, SetgetData] = useState({
    coin: "",
    kryto: "",
  });
  const [cotizacion, getCotizacion] = useState({});
  const [Loading, SetLoading] = useState(false);
  useEffect(() => {
    const handleGetCotizacion = async () => {
      const { coin, kryto } = getData;
      if (coin === "") return;
      const response = await axios.get(
        `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${kryto}&tsyms=${coin}`
      );
      SetLoading(true);
      setTimeout(() => {
        SetLoading(false);
        getCotizacion(response.data.DISPLAY[kryto][coin]);
      }, 1700);
    };
    handleGetCotizacion();
  }, [getData]);
  return (
    <WrapperMain>
      <WrapperSection>
        <Imagen src={imagen} />
      </WrapperSection>
      <WrapperSection>
        <Title title="Cotiza criptomonedas al instante" />
        <Form SetgetData={SetgetData} />
        {Loading ? <Spinner /> : <Cotizador cotizacion={cotizacion} />}
      </WrapperSection>
    </WrapperMain>
  );
}

export default App;
