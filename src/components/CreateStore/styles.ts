import styled from "styled-components";

export const Backdrop = styled.div`
	top: 0;
	left: 0;
	z-index: 9;
	width: 100%;
	height: 100%;
	display: flex;
	position: absolute;
	justify-content: flex-end;
	background: rgb(79 79 79 / 0.15000000596046448);
`;

export const Container = styled.div`
	width: 100%;
	padding: 40px;
	max-width: 440px;
	overflow-y: auto;
	background-color: #fff;
`;

export const Header = styled.div`
	display: flex;
	margin-bottom: 32px;
	align-items: center;
`;

export const GoBack = styled.div<{ icon: string }>`
	width: 16px;
	height: 16px;
	border: none;
	border: none;
	display: flex;
	cursor: pointer;
	background-image: url(${({ icon }) => icon});
`;

export const TitleModal = styled.h5`
	width: 100%;
	color: #4f4f4f;
	font-size: 18px;
	font-weight: 500;
	line-height: 27px;
	text-align: center;
`;

export const Form = styled.form`
	display: flex;
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

export const ErrorText = styled.span`
	color: #e54b4b;
	font-size: 12px;
	margin-top: 2px;
	font-weight: 500;
	line-height: 14px;
`;

export const Submit = styled.button`
	width: 100%;
	border: none;
	display: flex;
	cursor: pointer;
	padding: 16px 0px;
	margin-bottom: 8px;
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

export const ClearData = styled.button`
	width: 100%;
	border: none;
	display: flex;
	cursor: pointer;
	padding: 16px 0px;
	border-radius: 5px;
	align-items: center;
	background: transparent;
	justify-content: center;

	color: #4f4f4f;
	font-size: 16px;
	font-weight: 500;
	line-height: 24px;

	&:hover {
		background-color: #f3f3f3;
	}

	&:focus {
		outline: none;
	}
`;
