import Link from "next/link";
import styled from "styled-components";
import { InstaLogo } from "ui/icons";
import { TwitterLogo } from "ui/icons";

export const Root = styled.footer`
  height: 30em;
  width: 100%;
  background-color: #000;
  padding: 2em;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: white;

  li {
    margin: 1em 0;
  }

  ul {
    margin: 0px;
    padding: 0px;
  }

  .link-redes {
    color: white;
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  a {
    color: white;
    &:hover {
      color: var(--celeste);
    }
  }

  .redes-title {
    margin-top: 0px;
  }

  @media (min-width: 769px) {
    padding: 4em;
    display: grid;
    grid-template-columns: auto auto;
    grid-template-rows: auto auto;

    .copyright-container {
      display: flex;
      flex-direction: column-reverse;
    }
  }
`;

export const StyledLink = styled.a`
  color: white;
  /* text-align: center; */
`;
