import * as S from "./style";

export default function BtnB({ children, htmlFor, key, onClick }) {
  return (
    <S.BtnBottom htmlFor={htmlFor} key={key} onClick={onClick}>
      {children}
    </S.BtnBottom>
  );
}
