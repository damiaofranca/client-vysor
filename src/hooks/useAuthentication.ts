import React from "react";
import { getAuth, onAuthStateChanged, User } from "firebase/auth";

const auth = getAuth();

export function useAuthentication() {
	const [user, setUser] = React.useState<User>();

	React.useEffect(() => {
		const unsubscribeFromAuthStateChanged = onAuthStateChanged(auth, (user) => {
			if (user) {
				setUser(user);
			} else {
				setUser(undefined);
			}
		});

		return unsubscribeFromAuthStateChanged;
	}, []);

	return {
		user,
	};
}
