import styled from "styled-components";

export const TitlePage = styled.h1`
  font-size: 3em;
  text-align: center;
`;

export const Tiny = styled.p`
  font-size: 0.9em;
`;

export const SubTitle = styled.h2`
  font-size: 2em;
`;

export const BodyText = styled.p``;

export const PriceText = styled.span`
  font-size: 1.8em;
  font-weight: bold;
`;

// export const SectionTitle = styled(TitlePage)`
//   margin: 30px;
// `;

// export function H2(props: any) {
//   return <SubTitle {...props} as="h2"></SubTitle>;
// }
// ////lo mismo que arriba para cambiar el tag de h1 a h3

// export const SubtitleH3 = styled(TitlePage).attrs({
//   as: "h3",
// })`
//   color: green;
// `;

export const Large = styled.p`
  font-size: large;
  margin: 0.5em 0em;
`;

export const LargeBolt = styled(Large)`
  font-weight: bold;
  /* text-align: center; */
`;
