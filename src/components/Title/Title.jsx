import * as S from "./style";

export default function Title({ htmlFor, children }) {
  return (
    <S.DivTitle>
      <label htmlFor={htmlFor}>{children}</label>
    </S.DivTitle>
  );
}
//"inputValue"
