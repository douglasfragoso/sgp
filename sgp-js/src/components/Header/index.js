import React from 'react';
import logo from '../../files/images/sgp_logo_horizontal.png';
import Button from '../Button';


function Header() {
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
                <Button color="danger" size="m" text="Sair" onClickBtn={() => console.log('Button clicked')} />
            </div>
        </nav>
    );
}

export default Header;