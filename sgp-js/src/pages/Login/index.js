import { useState, useContext } from 'react';
import { GlobalContext } from '../../contexts/GlobalContext';
import logo from '../../files/images/sgp_logo_vertical.png';
import './login.css';


function Login() {
  const {login} = useContext(GlobalContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(true);
  const [erro, setErro] = useState('');

  const fazerLogin = (e) => {
    e.preventDefault();

    if (email === '' || password === '') {
      setErro('Preencha todos os campos');
    }

    login({email, password, remember});
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
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    >
                  </input>

                  <div className="form-check text-start my-3">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultChecked={remember}
                      onChange={() => setRemember(!remember)}>
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