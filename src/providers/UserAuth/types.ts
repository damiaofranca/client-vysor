import { UserInfo } from "firebase/auth";

export interface IUserAuthSignIn {
	email: string;
	password: string;
}

export interface IUserAuthContext {
	userLogged: UserInfo | undefined;
	onSignOut: () => Promise<void>;

	onSignInWithGoogle: () => Promise<void>;
	onLogin: ({ email, password }: IUserAuthSignIn) => Promise<void>;
	onSignUp: (values: { email: string; password: string }) => Promise<void>;
}
