import { PageTopicos, PageLayout, PageDescricao } from "../pages/index"
import { Routes, Route } from "react-router-dom"

export function RouteSoftware() {
    return (
        <Routes>
            <Route path = "/" element = {<PageLayout/>}>
                <Route path = "" element = {<PageTopicos/>} />
                <Route path = "Descrição" element = {<PageDescricao/>} />
            </Route>
        </Routes>
    )
}