import styled from "styled-components";
import { Card } from "./Card";

const ButtonEl = styled(Card)`
  cursor: pointer;
  align-items: center;

  :hover {
    background-color: lightGrey;
  }
`;

type ButtonProps = {
  text: string;
  onClick: (e: React.MouseEvent<HTMLElement>, ...args: any[]) => void;
};

export const Button = ({ text, onClick }: ButtonProps) => {
  return <ButtonEl onClick={onClick}>{text}</ButtonEl>;
};
