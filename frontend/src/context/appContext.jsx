import React, { useState, useEffect } from "react";
import getState from "./flux.js";


export const Context = React.createContext(null);


const injectContext = PassedComponent => {
	const StoreWrapper = props => {
        const backendUrl = import.meta.env.VITE_BACKEND_URL;
		const [state, setState] = useState(
			getState({
				getStore: () => state.store,
				getActions: () => state.actions,
				setStore: updatedStore =>
					setState({
						store: Object.assign(state.store, updatedStore),
						actions: { ...state.actions }
					}),
                backendUrl 
			})
		);

		useEffect(() => {
			

		}, []);

		return (
			<Context.Provider value={state}>
				<PassedComponent {...props} />
			</Context.Provider>
		);
	};
	return StoreWrapper;
};

export default injectContext;
