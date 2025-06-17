import { Link } from "react-router-dom";

function Home() {
    return (
        <div className="container d-flex flex-column align-items-center" style={{ minHeight: "100vh", marginTop: "50px" }}>
            <h1 style={{ color: "#13518c" }}><strong> Bienvenido a la Mini app de usuarios</strong></h1>
            <p className="fs-4" style={{ color: "#13518c" }}>Elige una opción para continuar</p>

            <div className="container text-center">
                <div className="row row-cols-6 g-4">
                    <div className="col-6">
                        <Link to="/register" className="btn btn-primary">
                            Ir a Registro
                        </Link>
                    </div>
                    <div className="col -6">
                        <Link to="/list" className="btn btn-secondary">
                            Ir a Lista
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;