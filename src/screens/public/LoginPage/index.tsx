import React from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { Button, Spinner } from "@nextui-org/react";

import LoginUserSchema from "./schema";
import logo from "../../../assets/icons/logo.svg";
import { useUserAuth } from "../../../hooks/useUserAuth";
import { GoogleIcon, InputNew } from "../../../components";

import {
	Logo,
	Form,
	FormItem,
	Subtitle,
	LeftSide,
	RightSide,
	TitleLeft,
	TitleForm,
	Container,
	ContainerForm,
	ForgotPassword,
	ContainerSubmit,
	DontHaveAccount,
	ForgotPasswordContainer,
	DontHaveAccountContainer,
} from "./styles";
import { useTheme } from "../../../hooks";

const LoginPage: React.FC = () => {
	const { theme } = useTheme();
	const navigate = useNavigate();
	const { onLogin, onSignInWithGoogle } = useUserAuth();
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
		<Container className="bg-background">
			<LeftSide className={theme === "dark" ? "dark" : ""}>
				<Logo src={logo} alt="Client Vysor" />
				<TitleLeft className="text-content2">
					“Automatização para seu <strong>estoque</strong> empresárial!”
				</TitleLeft>
				<Subtitle className="text-content2">
					Busque o que sempre desejou, um sistema que te oferece controle total
					sobre seu estoque.
				</Subtitle>

				<img src={logo} alt="Client Vysor" className="logo-absolute" />
			</LeftSide>
			<RightSide>
				<ContainerForm>
					<TitleForm className="text-content2">Login</TitleForm>
					<Form onSubmit={handleSubmit}>
						<FormItem>
							<InputNew
								name="email"
								label="Email"
								variant="bordered"
								onBlur={handleBlur}
								value={values.email}
								onChange={handleChange}
								placeholder="Digite seu e-mail"
								isInvalid={errors.email && touched.email ? true : false}
								errorMessage={errors.email && touched.email ? errors.email : ""}
							/>
						</FormItem>
						<FormItem>
							<InputNew
								label="Senha"
								name="password"
								type="password"
								variant="bordered"
								onBlur={handleBlur}
								onChange={handleChange}
								value={values.password}
								placeholder="Digite sua senha"
								isInvalid={errors.password && touched.password ? true : false}
								errorMessage={
									errors.password && touched.password ? errors.password : ""
								}
							/>
						</FormItem>
						<ForgotPasswordContainer>
							<ForgotPassword to={"/forgot-password"}>
								Esqueceu a senha ?
							</ForgotPassword>
						</ForgotPasswordContainer>

						<ContainerSubmit>
							<Button
								type="submit"
								color="primary"
								className="w-full"
								isDisabled={!isValid}
								isLoading={isLoading}
								spinner={<Spinner size="sm" />}
							>
								Entrar
							</Button>
						</ContainerSubmit>
						<ContainerSubmit>
							<Button
								type="submit"
								color="primary"
								variant="bordered"
								className="w-full"
								endContent={<GoogleIcon />}
								onClick={onSignInWithGoogle}
							>
								Continue com
							</Button>
						</ContainerSubmit>
					</Form>
				</ContainerForm>
				<DontHaveAccountContainer>
					<DontHaveAccount to={"/register"} className="text-content2">
						Não têm uma conta? <strong>Registre-se.</strong>
					</DontHaveAccount>
				</DontHaveAccountContainer>
			</RightSide>
		</Container>
	);
};

export default LoginPage;
