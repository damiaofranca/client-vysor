import { toast } from "react-toastify";
import React, { ReactNode, useState } from "react";
import {
	User,
	signOut,
	setPersistence,
	signInWithPopup,
	onAuthStateChanged,
	inMemoryPersistence,
	sendPasswordResetEmail,
	signInWithEmailAndPassword,
	createUserWithEmailAndPassword,
} from "firebase/auth";

import { auth, provider } from "../../config/firebase";
import { IUserAuthContext, IUserAuthSignIn } from "./types";
import { handleFirebaseRequestError } from "../../utils/requestError";

interface UserAuthProps {
	children: ReactNode;
}

export const UserAuthContext = React.createContext<IUserAuthContext>(
	{} as IUserAuthContext,
);

export const UserAuth: React.FC<UserAuthProps> = ({ children }) => {
	const [loading, setLoading] = useState<boolean>(true);
	const [userLogged, setUserLogged] = React.useState<User | undefined>(
		undefined,
	);

	const onLogin = async ({ email, password }: IUserAuthSignIn) => {
		try {
			await setPersistence(auth, inMemoryPersistence);
			const { user: userSignIn } = await signInWithEmailAndPassword(
				auth,
				email,
				password,
			);

			localStorage.setItem("user", JSON.stringify(userSignIn.providerData[0]));
		} catch (err) {
			handleFirebaseRequestError(err as any);
		}
	};

	const onSignOut = async () => {
		await signOut(auth);
	};

	const onSignInWithGoogle = async () => {
		const user = await signInWithPopup(auth, provider);
		localStorage.setItem("user", JSON.stringify(user.user.providerData[0]));
		window.location.href = "/";
	};

	const onSignUp = async (values: { email: string; password: string }) => {
		const user = await createUserWithEmailAndPassword(
			auth,
			values.email,
			values.password,
		);
		localStorage.setItem("user", JSON.stringify(user.user.providerData[0]));
		window.location.href = "/";
	};

	const sendEmailUpdatePassword = async (email: string) => {
		try {
			await sendPasswordResetEmail(auth, email);
			toast.success("Email enviado com sucesso.");
		} catch (error) {
			console.log(error);
		}
	};

	React.useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			setLoading(false);
			if (user) {
				setUserLogged(user);
			} else {
				setUserLogged(undefined);
			}
		});

		return () => {
			if (unsubscribe) unsubscribe();
		};
	}, []);
	return (
		<UserAuthContext.Provider
			value={{
				userLogged,

				onLogin,
				onSignUp,
				onSignOut,
				onSignInWithGoogle,
				sendEmailUpdatePassword,
			}}
		>
			{!loading && children}
		</UserAuthContext.Provider>
	);
};
