import styled from "styled-components";

export const Container = styled.header`
	width: 100%;
	display: flex;
	align-items: center;
	padding: 25px 40px 25px 29px;
`;

export const Logo = styled.img`
	width: auto;
	height: 32px;
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

export const Notification = styled.button<{ imgURL: string }>`
	width: 24px;
	height: 24px;
	border: none;
	position: relative;
	background: url(${({ imgURL }) => imgURL});

	&::before {
		top: 1px;
		right: 1px;
		width: 4px;
		height: 4px;
		content: "";
		position: absolute;
		border-radius: 10px;
		background-color: #e54b4b;
	}
`;

export const Divider = styled.div`
	width: 1px;
	height: 32px;
	margin: 0 16px;
	background-color: #bdbdbd;
`;

export const InitialLetters = styled.div`
	width: 50px;
	height: 50px;
	display: flex;
	margin-right: 16px;
	align-items: center;
	border-radius: 50px;
	justify-content: center;
	background-color: #2382a0;

	color: #fff;
	font-size: 24px;
	line-height: 34px;
	text-transform: uppercase;
`;

export const NameUser = styled.h5`
	color: #4f4f4f;
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

export const MenuInfoIcon = styled.img`
	width: 24px;
	height: 24px;
`;

export const ContainerDropDown = styled.div`
	left: 0;
	bottom: 0;
	width: 100%;
	z-index: 9999;
	cursor: default;
	padding: 8px 10px;
	border-radius: 4px;
	position: absolute;
	background-color: #2382a0;
	transform: translateY(calc(100% + 6px));
`;

export const ActionDropDown = styled.div`
	width: 100%;
	padding: 2px;
	display: flex;
	cursor: pointer;
	border-radius: 2px;
	align-items: center;
	background-color: #2382a0;

	&:hover {
		background-color: #2b90af;
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
