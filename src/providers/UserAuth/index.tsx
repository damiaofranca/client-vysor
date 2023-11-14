import React, { ReactNode } from "react";
import {
	UserInfo,
	createUserWithEmailAndPassword,
	signInWithPopup,
	signOut,
} from "firebase/auth";

import {
	setPersistence,
	inMemoryPersistence,
	signInWithEmailAndPassword,
} from "firebase/auth";

import { IUserAuthContext, IUserAuthSignIn } from "./types";
import { useAuthentication } from "../../hooks/useAuthentication";
import { handleFirebaseRequestError } from "../../utils/requestError";
import { auth, provider } from "../../config/firebase";

interface UserAuthProps {
	children: ReactNode;
}

export const UserAuthContext = React.createContext<IUserAuthContext>(
	{} as IUserAuthContext,
);

export const UserAuth: React.FC<UserAuthProps> = ({ children }) => {
	const { user } = useAuthentication();
	const preUser = localStorage.getItem("user");
	const [userLogged, setUserLogged] = React.useState<UserInfo | undefined>(
		preUser && JSON.parse(preUser),
	);

	const onLogin = async ({ email, password }: IUserAuthSignIn) => {
		try {
			await setPersistence(auth, inMemoryPersistence);
			const { user: userSignIn } = await signInWithEmailAndPassword(
				auth,
				email,
				password,
			);

			setUserLogged(userSignIn.providerData[0]);
			localStorage.setItem("user", JSON.stringify(userSignIn.providerData[0]));
		} catch (err) {
			handleFirebaseRequestError(err as any);
		}
	};

	const onSignOut = async () => {
		await signOut(auth);
		setUserLogged(undefined);
		localStorage.removeItem("user");
	};

	const onSignInWithGoogle = async () => {
		try {
			const user = await signInWithPopup(auth, provider);
			setUserLogged(user.user.providerData[0]);
			localStorage.setItem("user", JSON.stringify(user.user.providerData[0]));
			window.location.href = "/";
		} catch (error: any) {
			// const errorCode = error.code;
			// const errorMessage = error.message;
			// const email = error.customData.email;
			// const credential = GoogleAuthProvider.credentialFromError(error);
		}
	};

	const onSignUp = async (values: { email: string; password: string }) => {
		try {
			const user = await createUserWithEmailAndPassword(
				auth,
				values.email,
				values.password,
			);
			setUserLogged(user.user.providerData[0]);
			localStorage.setItem("user", JSON.stringify(user.user.providerData[0]));
			window.location.href = "/";
		} catch (error: any) {
			// const errorCode = error.code;
			// const errorMessage = error.message;
			// const email = error.customData.email;
			// const credential = GoogleAuthProvider.credentialFromError(error);
		}
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
				userLogged,

				onLogin,
				onSignUp,
				onSignOut,
				onSignInWithGoogle,
			}}
		>
			{children}
		</UserAuthContext.Provider>
	);
};
