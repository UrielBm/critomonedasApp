import "./Style.scss";
import styled from "@emotion/styled";
const Heading = styled.h1`
  font-family: "Bebas Neue", cursive;
  color: #fff;
  text-align: left;
  font-weight: 700;
  font-size: 4.2rem;
  margin-bottom: 6rem;
  margin-top: 8rem;
  &::after {
    content: "";
    width: 100px;
    height: 6px;
    background-color: #66a2fe;
    display: block;
  }
`;
const Title = ({ title }) => <Heading>{title}</Heading>;

export default Title;
