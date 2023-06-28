import { FirebaseError } from "firebase/app";
import { toast } from "react-toastify";

export function handleFirebaseRequestError(error: FirebaseError): void {
	let errorCode = "";

	switch (error.code) {
		case "auth/invalid-email":
			errorCode = "Email inválido";
			break;
		case "auth/invalid-password":
			errorCode = "Senha inválida";
			break;
		case "auth/user-disabled":
			errorCode = "Usuário desabilitado";
			break;
		case "auth/user-not-found":
			errorCode = "Usuário não encontrado";
			break;
		default:
			errorCode = "Erro desconhecido";
			break;
	}

	toast.error(errorCode, {
		theme: "light",
		position: "top-right",
		autoClose: 2000,
		draggable: true,
		pauseOnHover: true,
		closeOnClick: true,
		progress: undefined,
		hideProgressBar: false,
	});
}
