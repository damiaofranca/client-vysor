import { User } from "firebase/auth";

export interface IUserAuthSignIn {
	email: string;
	password: string;
}

export interface IUserAuthContext {
	userLogged: User | undefined;
	onSignOut: () => Promise<void>;
	onLogin: ({ email, password }: IUserAuthSignIn) => Promise<void>;
}
