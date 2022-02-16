import * as S from "./style";

export default function BtnT({ children, onClick }) {
  return <S.BtnElementTop onClick={onClick}>{children}</S.BtnElementTop>;
}
