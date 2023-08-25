import React from "react";
import { colors } from "../../styles/GlobalStyle"
import { styled } from "styled-components";

export const Section = styled.section`
    

    section {
        display: grid;
        grid-template-columns: auto;
        gap: 1rem;

        div {
            background-color: ${colors.texto};
        }

    }
`