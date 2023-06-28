import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	min-height: 100vh;
`;

export const LoginContainer = styled.div`
	width: 100%;
	display: flex;
	padding: 88px;
	max-width: 564px;
	flex-direction: column;
	align-items: flex-start;

	@media screen and (max-width: 920px) {
		max-width: 100%;
		align-items: center;
	}

	@media screen and (max-width: 600px) {
		padding: 88px 24px 88px 24px;
	}
`;

export const BackgroundContainer = styled.div`
	width: 100%;
	background-color: red;

	@media screen and (max-width: 920px) {
		display: none;
	}
`;

export const Logo = styled.img`
	width: auto;
	height: 32px;
	margin-bottom: 224px;

	@media screen and (max-width: 920px) {
		margin-bottom: 120px;
	}
`;

export const ContainerForm = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;

	@media screen and (max-width: 920px) {
		max-width: 60%;
	}

	@media screen and (max-width: 770px) {
		max-width: 80%;
	}

	@media screen and (max-width: 600px) {
		max-width: 92%;
	}
`;

export const Title = styled.h1`
	color: #333;
	font-size: 32px;
	font-weight: 600;
	line-height: 42px;
	margin-bottom: 5px;
`;

export const SubTitle = styled.h1`
	color: #828282;
	font-size: 16px;
	font-weight: 400;
	line-height: 24px;
`;

export const Form = styled.form`
	display: flex;
	margin-top: 24px;
	flex-direction: column;
`;

export const FormItem = styled.div`
	display: flex;
	margin-bottom: 16px;
	flex-direction: column;

	&:last-child {
		margin-bottom: 24px;
	}
`;

export const FormLabel = styled.label`
	color: #333;
	font-size: 16px;
	font-weight: 500;
	line-height: 24px;
	margin-bottom: 8px;
`;

export const Submit = styled.button`
	border: none;
	display: flex;
	cursor: pointer;
	padding: 16px 0px;
	border-radius: 5px;
	align-items: center;
	background: #2382a0;
	justify-content: center;

	color: #fff;
	font-size: 16px;
	font-weight: 500;
	line-height: 24px;

	&:hover {
		background-color: #0c799b;
	}

	&:disabled {
		opacity: 0.7;
		cursor: default;
		background-color: #4f9bb3;
	}

	&:focus {
		outline: none;
	}
`;

export const ErrorText = styled.span`
	color: #e54b4b;
	font-size: 12px;
	margin-top: 2px;
	font-weight: 500;
	line-height: 14px;
`;
