import "./Style.scss";
import styled from "@emotion/styled";
import UseCriptoMonedas from "../../hooks/UseCriptoModenas";
import UseKripto from "../../hooks/UseKripto";
import { useEffect, useState } from "react";
import axios from "axios";
import ErrorDiv from "../Error";
const ArrayMonedas = [
  {
    code: "USD",
    name: "Dolar Americano",
  },
  {
    code: "MXN",
    name: "Peso Mexicano",
  },
  {
    code: "EUR",
    name: "Euro",
  },
  {
    code: "GBP",
    name: "Libra Esterlina",
  },
];
const Button = styled.input`
  margin-top: 1rem;
  font-weight: bold;
  font-size: 1.3rem;
  padding: 0.3rem 0.6rem;
  background-color: #66a2fe;
  border: none;
  width: 100%;
  border-radius: 1.5rem;
  color: #fff;
  outline: none;
  transition: background-color 0.4s ease;
  &:hover {
    background-color: #326ac0;
    cursor: pointer;
  }
`;
const Form = ({ SetgetData }) => {
  const [ArrayKripto, setArrayKripto] = useState([]);
  const [Error, SetError] = useState(false);
  useEffect(() => {
    getKriptoCoinData();
  }, []);
  const getKriptoCoinData = async () => {
    const kripto = await axios.get(
      "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD"
    );
    const { Data } = kripto.data;
    setArrayKripto(Data);
  };
  const [coin, SelectCoins] = UseCriptoMonedas(
    "Elige tu modena",
    "",
    ArrayMonedas
  );
  const [KriptoCoin, SelectKripto] = UseKripto(
    "Elige tu kriptomoneda",
    "",
    ArrayKripto
  );
  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (coin.trim() === "" || KriptoCoin.trim() === "") {
      SetError(true);
      return;
    }
    SetError(false);
    SetgetData({
      coin: coin,
      kryto: KriptoCoin,
    });
  };
  return (
    <form onSubmit={handleOnSubmit} className="Form">
      {Error ? <ErrorDiv text="Debes seleccionar ambos capos." /> : null}
      <SelectCoins />
      <SelectKripto />
      <Button type="submit" value="Calcular" />
    </form>
  );
};

export default Form;
