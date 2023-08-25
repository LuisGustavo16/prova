import React from "react";
import * as S from "./style"

export function Opcoes() {
    return (

        <S.Section>

            <div className="noticia">
                <h2 >Notícias</h2>
            </div>

            <a href="/">
                <div className="topicos">
                    <h2>Tópicos</h2>
                </div>
            </a>

            <a href="/Descrição">
                <div className="desc">
                    <h2>Descrição</h2>
                </div>
            </a>

        </S.Section>

    )
}