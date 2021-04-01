import "./Style.scss";
import { GetColorValue } from "../../helpers/helper";
const Cotizador = ({ cotizacion }) => {
  if (Object.keys(cotizacion).length === 0) return null;
  const { CHANGE24HOUR, HIGHDAY, PRICE, LOWDAY } = cotizacion;
  return (
    <div className="wrapperCard">
      <h3 className="subtitle">Cotización</h3>
      <section>
        <p className="text">{PRICE}</p>
        <p className="text">Precio más alto: {HIGHDAY}</p>
        <p className="text">precio más bajo: {LOWDAY}</p>
        <p className="text">
          Cambio últimas 24HRS:
          <span className={GetColorValue(CHANGE24HOUR)}> {CHANGE24HOUR}</span>
        </p>
      </section>
    </div>
  );
};

export default Cotizador;
