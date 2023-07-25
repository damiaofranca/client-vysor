import React from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";

import LoginUserSchema from "./schema";
import { Input, Spinner } from "../../../components";
import logo from "../../../assets/icons/logo.svg";
import { useUserAuth } from "../../../hooks/useUserAuth";
import BackgroundImage from "../../../assets/images/background-login.jpg";

import {
	Form,
	Logo,
	Title,
	Submit,
	SubTitle,
	FormItem,
	ErrorText,
	FormLabel,
	Container,
	ContainerForm,
	LoginContainer,
	BackgroundContainer,
} from "./styles";

const LoginPage: React.FC = () => {
	const navigate = useNavigate();
	const { onLogin } = useUserAuth();
	const [isLoading, setIsLoading] = React.useState<boolean>(false);

	const {
		errors,
		values,
		touched,
		isValid,
		handleBlur,
		handleSubmit,
		handleChange,
		validateForm,
	} = useFormik({
		enableReinitialize: true,
		initialValues: {
			email: "",
			password: "",
		},
		onSubmit: () => {
			_onLogin();
		},
		validationSchema: LoginUserSchema,
	});

	const _onLogin = async () => {
		setIsLoading(true);
		await onLogin({ email: values.email, password: values.password });
		setIsLoading(false);

		navigate("/");
	};

	React.useEffect(() => {
		validateForm();
	}, []);

	return (
		<Container>
			<LoginContainer>
				<Logo src={logo} alt="Client Vysor" />
				<ContainerForm>
					<Title>Login</Title>
					<SubTitle>
						Informe os dados abaixo para acessar a nossa plataforma.
					</SubTitle>
					<Form onSubmit={handleSubmit}>
						<FormItem>
							<FormLabel htmlFor="input-text-email">Login</FormLabel>
							<Input
								name="email"
								onBlur={handleBlur}
								value={values.email}
								onChange={handleChange}
								placeholder="Digite aqui"
							/>
							{errors.email && touched.email && (
								<ErrorText>{errors.email}</ErrorText>
							)}
						</FormItem>
						<FormItem>
							<FormLabel htmlFor="input-text-email">Senha</FormLabel>
							<Input
								isToPassword
								name="password"
								onBlur={handleBlur}
								value={values.password}
								onChange={handleChange}
								placeholder="Digite aqui"
							/>
							{errors.password && touched.password && (
								<ErrorText>{errors.password}</ErrorText>
							)}
						</FormItem>
						<Submit disabled={!isValid} type="submit">
							{isLoading && <Spinner />}
							Acessar
						</Submit>
					</Form>
				</ContainerForm>
			</LoginContainer>
			<BackgroundContainer image={BackgroundImage}></BackgroundContainer>
		</Container>
	);
};

export default LoginPage;
