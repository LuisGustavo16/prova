import React from "react";
import { colors } from "../../styles/GlobalStyle"
import { styled } from "styled-components";

export const Section = styled.section`
    gap: 3rem;
    width: 8rem;
    display: grid;
    grid-template-columns: auto;
    padding-left: 0.3rem;

    a {
        text-decoration: none;
        color: black;
    }

    .noticia {
            background-color: white;
            border: 1rem;            
            height: 3rem;
            display: flex;
            justify-content: center;
            align-items: center;
    }

    .topicos {
            background-color: gray;
            height: 3rem;
            display: flex;
            justify-content: center;
            align-items: center;

            h2 {
                color: white;
            }

    }

    .desc {
        background-color: ${colors.titulo};
        height: 3rem;
        display: flex;
        justify-content: center;
        align-items: center;
    }

`
