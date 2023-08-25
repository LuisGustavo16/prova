import React from "react";
import { ComponentHeader, ComponentOpcoes } from "../../components/index"
import { Outlet } from "react-router-dom"
import * as S from "./style"

export function Layout () {
    return (
            <S.Section>

                <div className="opcoes">
                    <ComponentOpcoes />
                </div>

                <div className="header">
                    <ComponentHeader />
                </div>

                <div className="main">
                    <Outlet />
                </div>
                
            </S.Section>
    )
}