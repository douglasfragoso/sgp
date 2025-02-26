import './login.css';
import logo from '../../files/images/sgp_logo_vertical.png';
import { useState } from 'react';


function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [manterConectado, setManterConectado] = useState(true);
  const [erro, setErro] = useState('');

  const fazerLogin = (e) => {
    e.preventDefault();

    if (email === '' || senha === '') {
      setErro('Preencha todos os campos');
    }

    console.log({email, senha, manterConectado});
  }

  return (
    <div className="bg-container">
      <div className="container">
        <div className="row justify-content-center">
          <form className="col-md-5 col-10 login-container" onSubmit={fazerLogin}>
            <div className="row justify-content-center my-4">
              <div className="col-8">
                
                <div className='d-flex justify-content-center'>
                  <img src={logo} alt="SGP Logo" width="200px" />
                </div>

                <div className='d-flex justify-content-center'>{erro}</div>
                
                <div>
                  <input type="email"
                    className="form-control border border-primary mb-2"
                    placeholder="E-mail"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    >
                  </input>
                  <input type="password"
                    className="form-control border border-primary mb-2"
                    placeholder="Password"
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                    >
                  </input>

                  <div className="form-check text-start my-3">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultChecked={manterConectado}
                      onChange={() => setManterConectado(!manterConectado)}>
                    </input>
                    <label className="form-check-label">
                      Mantenha-me conectado
                    </label>
                  </div>

                  <div className="d-flex justify-content-center">
                    <button type="submit" className="btn btn-primary mt-2 px-4">Entrar</button>
                  </div>

                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;