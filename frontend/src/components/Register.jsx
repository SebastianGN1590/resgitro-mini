import React, { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
    const backendUrl = import.meta.env.VITE_BACKEND_URL;

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formData.name || !formData.email || !formData.password) {
            alert("Todos los campos son obligatorios");
            return;
        }
        try {
            const res = await fetch(backendUrl + "/api/users", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });
            if (res.ok) {
                alert("Usuario registrado con éxito ✅");
                setFormData({ name: "", email: "", password: "" });
            } else {
                const data = await res.json();
                alert(data.error || "Error al registrar usuario");
            }
        } catch (error) {
            console.error(error);
            alert("Error al conectar con el backend");
        }
    };

    // El return debe estar aquí, dentro de la función
    return (
     
          <div className="d-flex flex-column align-items-center vh-100">
             <div style={{ width: "850px", padding: "20px", border: "1px solid #ccc", borderRadius: "8px", backgroundColor:"#f7f7f7", marginTop: "50px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}>
                <h2 className="text-center" style={{color:"#13518c"}}> <strong>Ingresa tus datos por favor</strong></h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label" style={{color:"#13518c"}}>Nombre</label>
                        <input
                            type="text"
                            className="form-control"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                        />
                     
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label" style={{color:"#13518c"}}>Correo</label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            name="email"
                            aria-describedby="emailHelp"
                            value={formData.email}
                            onChange={handleChange}
                        />
                        
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label" style={{color:"#13518c"}}>Contraseña</label>
                        <input
                            type="password"
                            className="form-control"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                        />
                    </div>
                    <button type="submit" className="btn btn-success">Enviar</button>
                </form>
            </div>
             <div className="d-flex justify-content-center mt-4">
                    <Link to="/" className="btn btn-primary">
                        Volver
                    </Link>
                </div>
            </div>
     
            );
};

            export default Register;