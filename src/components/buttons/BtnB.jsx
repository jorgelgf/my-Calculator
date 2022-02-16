import * as S from "./style";

export default function BtnB({ children, htmlFor, onClick }) {
  return (
    <S.BtnBottom htmlFor={htmlFor} onClick={onClick}>
      {children}
    </S.BtnBottom>
  );
}
