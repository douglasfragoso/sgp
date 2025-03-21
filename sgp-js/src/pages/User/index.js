import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { USUARIOS } from "../../mocks/user";

function User() {
    return (
        <>
            <Header />

            <section className="container mt-3" id="user">
                <div className="d-flex justify-content-between">
                    <h1>Usuários Cadastrados</h1>
                    <div><a href="/newuser" className="btn btn-primary">Novo Usuário</a></div>
                </div>
                <table class="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Nome</th>
                            <th scope="col">CPF</th>
                            <th scope="col">Email</th>
                            <th scope="col">Idade</th>
                            <th scope="col">Status</th>
                            <th scope="col">Opções</th>
                        </tr>
                    </thead>
                    <tbody>
                        {USUARIOS.map((usuario) => (
                            <tr key={usuario.id}>
                                <th scope="row">{usuario.id}</th>
                                <td>{usuario.nome}</td>
                                <td>{usuario.cpf}</td>
                                <td>{usuario.email}</td>
                                <td>{usuario.idade}</td>
                                <td>{usuario.status}</td>
                                <td>
                                    <div className="btn-group" role="group">
                                        <button type="button" className="btn btn-primary">Editar</button>
                                        <button type="button" className="btn btn-danger">Exclui</button>
                                    </div>
                                </td>

                            </tr>
                        ))
                        }
                    </tbody>
                </table>
            </section>

            <Footer />
        </>
    );
}

export default User;