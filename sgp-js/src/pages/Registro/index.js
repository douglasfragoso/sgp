import './registro.css';
import logo from '../../files/images/sgp_logo_vertical.png';
import { useState, useEffect } from 'react';

function Registro() {
    const [formData, setFormData] = useState({
        nome: '',
        sobrenome: '',
        email: '',
        senha: '',
        confirmacaoSenha: '',
        dataNascimento: '',
        endereco: {
            cep: '',
            logradouro: '',
            numero: '',
            complemento: '',
            bairro: '',
            cidade: '',
            estado: ''
        }
    });

    const [erros, setErros] = useState([]);
    const [senhaCompativel, setSenhaCompativel] = useState(true);

    useEffect(() => {
        if (formData.senha !== formData.confirmacaoSenha) {
            setSenhaCompativel(false);
        } else {
            setSenhaCompativel(true);
        }
    }, [formData.senha, formData.confirmacaoSenha]);

    const buscarCEP = async (cep) => {
        try {
            const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
            const data = await response.json();

            if (!data.erro) {
                setFormData(prev => ({
                    ...prev,
                    endereco: {
                        ...prev.endereco,
                        logradouro: data.logradouro,
                        bairro: data.bairro,
                        cidade: data.localidade,
                        estado: data.uf
                    }
                }));
            }
        } catch (error) {
            console.error('Erro ao buscar CEP:', error);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name.startsWith('endereco.')) {
            const campoEndereco = name.split('.')[1];
            setFormData(prev => ({
                ...prev,
                endereco: {
                    ...prev.endereco,
                    [campoEndereco]: value
                }
            }));

            if (campoEndereco === 'cep' && value.length === 8) {
                buscarCEP(value);
            }
        } else {
            setFormData(prev => ({
                ...prev,
                [name]: value
            }));
        }
    };

    const validarFormulario = () => {
        const novosErros = [];
        const camposObrigatorios = [
            'nome', 'sobrenome', 'email', 'senha',
            'confirmacaoSenha', 'dataNascimento'
        ];

        camposObrigatorios.forEach(campo => {
            if (!formData[campo]) {
                novosErros.push(`O campo ${campo} é obrigatório`);
            }
        });

        if (!senhaCompativel) {
            novosErros.push('As senhas não coincidem');
        }

        if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
            novosErros.push('E-mail inválido');
        }

        setErros(novosErros);
        return novosErros.length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validarFormulario()) {
            // Lógica para enviar os dados para o backend
            console.log('Dados do formulário:', formData);
            alert('Registro realizado com sucesso!');
        }
    };

    return (
        <div className="bg-container">
            <div className="container">
                <div className="row justify-content-center">
                    <form className="col-md-7 col-10 registro-container" onSubmit={handleSubmit}>
                        <div className="row justify-content-center my-4">
                            <div className="col-10">

                                <div className='d-flex justify-content-center mb-4'>
                                    <img src={logo} alt="SGP Logo" width="200px" />
                                </div>

                                {erros.length > 0 && (
                                    <div className="alert alert-danger">
                                        <ul className="mb-0">
                                            {erros.map((erro, index) => (
                                                <li key={index}>{erro}</li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                <div className="row">
                                    <div className="col-md-6">
                                        <input
                                            type="text"
                                            className="form-control mb-3"
                                            placeholder="Nome"
                                            name="nome"
                                            value={formData.nome}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <input
                                            type="text"
                                            className="form-control mb-3"
                                            placeholder="Sobrenome"
                                            name="sobrenome"
                                            value={formData.sobrenome}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                </div>

                                <input
                                    type="email"
                                    className="form-control mb-3"
                                    placeholder="E-mail"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />

                                <div className="row">
                                    <div className="col-md-6">
                                        <input
                                            type="password"
                                            className="form-control mb-3"
                                            placeholder="Senha"
                                            name="senha"
                                            value={formData.senha}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <input
                                            type="password"
                                            className={`form-control mb-3 ${!senhaCompativel ? 'is-invalid' : ''}`}
                                            placeholder="Confirmação de Senha"
                                            name="confirmacaoSenha"
                                            value={formData.confirmacaoSenha}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                </div>

                                <input
                                    type="date"
                                    className="form-control mb-3"
                                    placeholder="Data de Nascimento"
                                    name="dataNascimento"
                                    value={formData.dataNascimento}
                                    onChange={handleChange}
                                    required
                                />

                                <div className="card p-3 mb-3">
                                    <h5 className="mb-3">Endereço</h5>

                                    <div className="row">
                                        <div className="col-md-4">
                                            <input
                                                type="text"
                                                className="form-control mb-3"
                                                placeholder="CEP"
                                                name="endereco.cep"
                                                value={formData.endereco.cep}
                                                onChange={handleChange}
                                                maxLength="8"
                                            />
                                        </div>
                                        <div className="col-md-8">
                                            <input
                                                type="text"
                                                className="form-control mb-3"
                                                placeholder="Logradouro"
                                                name="endereco.logradouro"
                                                value={formData.endereco.logradouro}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-md-3">
                                            <input
                                                type="text"
                                                className="form-control mb-3"
                                                placeholder="Número"
                                                name="endereco.numero"
                                                value={formData.endereco.numero}
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div className="col-md-9">
                                            <input
                                                type="text"
                                                className="form-control mb-3"
                                                placeholder="Complemento"
                                                name="endereco.complemento"
                                                value={formData.endereco.complemento}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-md-5">
                                            <input
                                                type="text"
                                                className="form-control mb-3"
                                                placeholder="Bairro"
                                                name="endereco.bairro"
                                                value={formData.endereco.bairro}
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div className="col-md-5">
                                            <input
                                                type="text"
                                                className="form-control mb-3"
                                                placeholder="Cidade"
                                                name="endereco.cidade"
                                                value={formData.endereco.cidade}
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div className="col-md-2">
                                            <input
                                                type="text"
                                                className="form-control mb-3"
                                                placeholder="UF"
                                                name="endereco.estado"
                                                value={formData.endereco.estado}
                                                onChange={handleChange}
                                                maxLength="2"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="d-flex justify-content-center">
                                    <button type="submit" className="btn btn-primary px-5">
                                        Registrar
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Registro;