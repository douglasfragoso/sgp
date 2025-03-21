import Header from "../../../components/Header"
import Footer from "../../../components/Footer"
import Modal from "../../../components/Modal"
import { useState } from "react"
import { useNavigate } from "react-router-dom";

function UserForm() {
    const navigate = useNavigate();

    const [nome, setNome] = useState('');
    const [cpf, setCpf] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [dataNascimento, setDataNascimento] = useState('');
    const [status, setStatus] = useState('');
    const [exibirModal, setExibirModal] = useState(false);

    const salvar = (e) => {
        e.preventDefault();
        console.log(nome, cpf, email, password, dataNascimento, status
        );

        setExibirModal(true);
    }

    const cancelar = (e) => {
       navigate('/user');
    }

    const closeModal = () => {
        setExibirModal(false);
        navigate('/user');
    }

    return (
        <>
            <Header />
            <section className="container mt-3" id="user-form">
                <h1>Dados do Usuário</h1>

                <form className="row g-3" onSubmit={salvar}>
                    <div className="col-md-6 mp-12">
                        <label htmlFor="name" className="form-label">Nome</label>
                        <input type="text" 
                        className="form-control" 
                        id="name" 
                        placeholder="Digite seu nome aqui" 
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                        required />
                    </div>
                    <div className="col-md-6 mp-12">
                        <label htmlFor="cpf" className="form-label">CPF</label>
                        <input type="text" 
                        className="form-control" 
                        id="cpf" 
                        placeholder="Digite seu cpf aqui" 
                        value={cpf}
                        onChange={(e) => setCpf(e.target.value)}
                        required/>
                    </div>
                    <div className="col-md-6 mp-12">
                        <label htmlFor="inputEmail4" className="form-label">Email</label>
                        <input type="email" 
                        className="form-control" 
                        id="inputEmail4" 
                        placeholder="Digite seu email aqui"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                         />
                    </div>
                    <div className="col-md-6 mp-12">
                        <label htmlFor="inputPassword4" className="form-label">Password</label>
                        <input type="password" 
                        className="form-control" 
                        id="inputPassword4" 
                        placeholder="Digite sua senha aqui" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required/>
                    </div>
                    <div className="col-md-6 mp-12">
                        <label htmlFor="dataNascimento" className="form-label">Data de Nascimento</label>
                        <input type="date" 
                        className="form-control" 
                        name="dataNascimento" 
                        id="dataNascimento"
                        value={dataNascimento}
                        onChange={(e) => setDataNascimento(e.target.value)}
                        required />
                    </div>
                    <div className="col-md-6 mp-12">
                        <label htmlFor="status" className="form-label">Status</label>
                        <select id="status" 
                        className="form-select" 
                        value={status} 
                        onChange={(e) => setStatus(e.target.value)}
                        required>
                            <option disabled value={""}>Escolha uma opção</option>
                            <option value={"INATIVO"}>Inativo</option>
                            <option value={"ATIVO"}>Ativo</option>
                        </select>
                    </div>
                    <div className="col-12">
                        <button type="submit" className="btn btn-primary">Salvar</button>
                        <button className="btn btn-outline-primary ms-2" onClick={cancelar}>Cancelar</button>
                    </div>
                </form>
                {exibirModal && <Modal
                    titulo={"Confirmação"}
                    texto={"Usuário cadastrado com sucesso!"}
                    txtBtn01={"OK"}
                    onClickBtn01={closeModal} 
                    />}
            </section>

            <Footer />
        </>
    )
}

export default UserForm;