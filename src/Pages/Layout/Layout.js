import { Link, Outlet } from "react-router-dom"

function Layout() {

    return (
        <>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/Eventos">Eventos</Link></li>
                    <li><Link to="/Eventos/:idCurso">Detalhes</Link></li>
                </ul>
            </nav>

            <Outlet />
        </>
    )
}

export default Layout