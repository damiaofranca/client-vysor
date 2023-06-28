import { useFormik } from "formik";
import React from "react";

import logo from "../../../assets/icons/logo.svg";
import { Input } from "../../../components";
import LoginUserSchema from "./schema";

import { useNavigate } from "react-router-dom";
import { useUserAuth } from "../../../hooks/useUserAuth";
import {
	BackgroundContainer,
	Container,
	ContainerForm,
	ErrorText,
	Form,
	FormItem,
	FormLabel,
	LoginContainer,
	Logo,
	SubTitle,
	Submit,
	Title,
} from "./styles";

const LoginPage: React.FC = () => {
	const navigate = useNavigate();
	const { onLogin } = useUserAuth();

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
		await onLogin({ email: values.email, password: values.password });
		navigate("/");
	};

	React.useEffect(() => {
		validateForm();
	}, []);

	return (
		<Container>
			<LoginContainer>
				<Logo src={logo} alt="Client System" />
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
							Acessar
						</Submit>
					</Form>
				</ContainerForm>
			</LoginContainer>
			<BackgroundContainer></BackgroundContainer>
		</Container>
	);
};

export default LoginPage;
