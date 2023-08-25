import React from "react";
import {colors} from "../../styles/GlobalStyle"
import { styled } from "styled-components";

export const Section = styled.section `
    width: 100%;
    div {
        background-color: ${colors.titulo};
        height: 4rem;
        width: 100%;
        display: flex;
        justify-content: left;
        align-items: center;

        h1 {
            color: white;
            padding-left: 1.5rem;
        }
    }
`