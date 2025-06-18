const backendUrl = "http://localhost:5000"
const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            user: {

            },
            message: null,

        },

        actions: {


            // ingresar los datos del usuario 
            signup: async (email, password, name) => {
                try {
                    const response = await fetch(`${backendUrl}/api/users`, {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({ name, email, password })
                    });

                    const data = await response.json();

                    if (response.ok) {
                        alert("Usuario registrado con éxito ✅");
                        console.log("Nuevo usuario:", data.new_user_created);
                    } else {
                        alert(data.error || "Error al registrar el usuario");
                    }
                } catch (error) {
                    console.error("Error en el registro:", error);
                    alert("Ocurrió un error al intentar registrarse");
                }
            },


            getUsers: async () => {
                try {
                    const response = await fetch(`${backendUrl}/api/users`);
                    if (response.ok) {
                        const data = await response.json();
                        console.log("Lista de usuarios:", data);
                        setStore({ ...getStore(), users: data });
                    } else {
                        alert("Error al obtener la lista de usuarios");
                    }
                } catch (error) {
                    console.error("Error al obtener la lista de usuarios:", error);
                }
            }
        }

    }
};

export default getState;
