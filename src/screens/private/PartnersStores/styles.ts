import styled from "styled-components";

export const Container = styled.div`
	width: 100%;
	height: 100%;
	padding: 40px;
	display: flex;
	border-radius: 12px;
	background-color: #fff;
	flex-direction: column;
`;

export const ContainerHeader = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	margin-bottom: 32px;
	justify-content: space-between;
`;

export const Title = styled.h1`
	color: #333;
	font-size: 24px;
	font-weight: 600;
	line-height: 36px;
`;

export const RegisterStore = styled.button`
	border: none;
	display: flex;
	cursor: pointer;
	padding: 5px 8px;
	border-radius: 4px;
	align-items: center;
	background-color: transparent;

	color: #4f4f4f;
	font-size: 16px;
	font-weight: 500;
	line-height: 24px;

	&:hover {
		background-color: #f0f0f0;
	}
`;

export const RegisterIcon = styled.img`
	width: 20px;
	height: 20px;
	margin-right: 8px;
`;
