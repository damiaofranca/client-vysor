import styled from "styled-components";

export const Container = styled.header`
	width: 100%;
	display: flex;
	align-items: center;
	background-color: #4e61c9;
	padding: 25px 40px 25px 29px;
`;

export const Logo = styled.img`
	width: 180px;
	height: auto;
	margin-right: 45px;

	@media screen and (max-width: 770px) {
		height: 20px;
		margin-right: 20px;
	}

	@media screen and (max-width: 480px) {
		display: none;
	}
`;

export const SwitchViewSideBar = styled.button<{ imgURL: string }>`
	width: 24px;
	height: 24px;
	border: none;
	cursor: pointer;
	background: url(${({ imgURL }) => imgURL});

	@media screen and (max-width: 770px) {
		display: none;
	}
`;

export const LeftSide = styled.div`
	flex: 1;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: flex-end;
`;

export const InitialLetters = styled.div`
	width: 50px;
	height: 50px;
	display: flex;
	margin-right: 16px;
	align-items: center;
	border-radius: 50px;
	justify-content: center;
	background-color: #ffffff;

	color: #4f4f4f;
	font-size: 24px;
	line-height: 34px;
	font-weight: 600;
	text-transform: uppercase;
`;

export const NameUser = styled.h5`
	color: #ffffff;
	font-size: 16px;
	font-weight: 500;
	line-height: 24px;
	margin: 0 16px 0 0;
`;

export const ContainerUserInfo = styled.div`
	display: flex;
	cursor: pointer;
	position: relative;
	align-items: center;
`;

export const ContainerDropDown = styled.div`
	left: 0;
	bottom: 0;
	width: 100%;
	z-index: 9999;
	cursor: default;
	border-radius: 4px;
	position: absolute;
	background-color: #5d3ac5;
	transform: translateY(calc(100% + 6px));
`;

export const ActionDropDown = styled.div`
	width: 100%;
	display: flex;
	cursor: pointer;
	padding: 8px 10px;
	border-radius: 2px;
	align-items: center;
	background-color: #5d3ac5;

	&:hover {
		background-color: #4e28c3;
	}
`;

export const TextDropDown = styled.span`
	color: #fff;
	font-size: 13px;
	font-weight: 600;
	line-height: 24px;
`;

export const IconDropDownAction = styled.img`
	width: 20px;
	height: 20px;
	margin-right: 6px;
`;
