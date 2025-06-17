import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../context/appContext.jsx";
import { Link } from "react-router-dom";
export const List = () => {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.getUsers();
    }, []);


    return (
        <div className="container mt-5 d-flex justify-content-center">
            <div className="card shadow-lg p-4 w-100" style={{ maxWidth: "800px", borderRadius: "1rem" }}>
                <h2 className="text-center mb-4" style={{ color: "#13518c" }}>
                    <strong>Lista de Usuarios</strong>
                </h2>
                {store.users && store.users.length > 0 ? (
                    <table className="table align-middle text-center">
                        <thead className="table-dark">
                            <tr>
                                <th>Nombre</th>
                                <th>Email</th>
                            </tr>
                        </thead>
                        <tbody>
                            {store.users.map((user) => (
                                <tr key={user.id}>
                                    <td className="fs-5" style={{ color: "#13518c" }}>
                                        <strong>{user.name}</strong>
                                    </td>
                                    <td style={{ color: "#13518c" }}>{user.email}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <p className="text-center">No hay usuarios registrados.</p>
                )}


                <div className="d-flex justify-content-center mt-4">
                    <Link to="/" className="btn btn-primary">
                        Volver
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default List;