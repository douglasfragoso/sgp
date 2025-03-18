import Alert from '../../components/Alert';
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import robo from '../../files/images/robo_404.png';

function Pagina404() {
    return (
        <>
            <Header />
                <div className="container mt-3">
                    <Alert color="warning" text="Página não encontrada"/>
                    <div className="d-flex justify-content-center">
                        <img src={robo} alt="Error 404 - Not Found" width={("30%")}/>
                    </div>
                </div>
            <Footer />
        </>
    );
}

export default Pagina404;