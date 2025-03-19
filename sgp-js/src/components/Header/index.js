import logo from '../../files/images/sgp_logo_horizontal.png';
import Button from '../Button';
import { useContext } from 'react';
import { GlobalContext } from '../../contexts/GlobalContext';

function Header() {

    const {logout} = useContext(GlobalContext);

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container">
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#menu-lateral"
                    aria-controls="menu-lateral"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="menu-lateral">
                    <a className="navbar-brand" href="#">
                        <img src={logo} alt="SGP" width="200px" />
                    </a>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" href="#">Dashboard</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href="#">Usuários</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href="#">Projetos</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href="#">Tarefas</a>
                        </li>
                    </ul>
                </div>
                <Button color="danger" text="Sair" onClickBtn={logout} />
            </div>
        </nav>
    );
}

export default Header;