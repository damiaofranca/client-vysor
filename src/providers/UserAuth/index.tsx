import React, { ReactNode } from "react";
import { User, signOut } from "firebase/auth";

import {
	getAuth,
	setPersistence,
	inMemoryPersistence,
	signInWithEmailAndPassword,
} from "firebase/auth";

import { IUserAuthContext, IUserAuthSignIn } from "./types";
import { useAuthentication } from "../../hooks/useAuthentication";
import { handleFirebaseRequestError } from "../../utils/requestError";

interface UserAuthProps {
	children: ReactNode;
}

export const UserAuthContext = React.createContext<IUserAuthContext>(
	{} as IUserAuthContext
);

export const UserAuth: React.FC<UserAuthProps> = ({ children }) => {
	const auth = getAuth();
	const { user } = useAuthentication();
	const preUser = localStorage.getItem("user");
	const [userLogged, setUserLogged] = React.useState<User | undefined>(
		preUser && JSON.parse(preUser)
	);

	const onLogin = async ({ email, password }: IUserAuthSignIn) => {
		try {
			await setPersistence(auth, inMemoryPersistence);
			const { user: userSignIn } = await signInWithEmailAndPassword(
				auth,
				email,
				password
			);
			setUserLogged(userSignIn);
			localStorage.setItem("user", JSON.stringify(userSignIn));
		} catch (err) {
			handleFirebaseRequestError(err as any);
		}
	};

	const onSignOut = async () => {
		await signOut(auth);
		setUserLogged(undefined);
		localStorage.removeItem("user");
	};

	React.useEffect(() => {
		if (user) {
			setUserLogged(user);
			localStorage.setItem("user", JSON.stringify(user));
		}
	}, [user]);
	return (
		<UserAuthContext.Provider
			value={{
				onLogin,
				onSignOut,
				userLogged,
			}}
		>
			{children}
		</UserAuthContext.Provider>
	);
};
