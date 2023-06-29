import React from "react";
import { useNavigate } from "react-router-dom";
import { useUserAuth } from "../../hooks/useUserAuth";
import { getFirstNameFromEmail } from "../../utils/getFirstName";

//icons
import LogoIcon from "../../assets/icons/logo.svg";
import SignOutIcon from "../../assets/icons/sign-out.svg";
import MinifyIcon from "../../assets/icons/minify-bar.svg";
import NotificationIcon from "../../assets/icons/bell.svg";
import ExpandedIcon from "../../assets/icons/expanded-bar.svg";
import TriangleUpIcon from "../../assets/icons/triangle-up.svg";
import TriangleDownIcon from "../../assets/icons/triangle-down.svg";
//icons

import {
	Logo,
	Divider,
	NameUser,
	LeftSide,
	Container,
	Notification,
	MenuInfoIcon,
	TextDropDown,
	ActionDropDown,
	InitialLetters,
	SwitchViewSideBar,
	ContainerDropDown,
	ContainerUserInfo,
	IconDropDownAction,
} from "./styles";

interface HeaderProps {
	sideExpanded: boolean;
	onExpanded: () => void;
}

export const Header: React.FC<HeaderProps> = ({ sideExpanded, onExpanded }) => {
	const navigate = useNavigate();
	const { onSignOut, userLogged } = useUserAuth();
	const [handlerMenuInfo, setHandlerMenuInfo] = React.useState<boolean>(false);

	const signOut = async () => {
		await onSignOut();
		navigate("/login");
	};
	return (
		<Container>
			<Logo src={LogoIcon} alt="Client System" />
			<SwitchViewSideBar
				imgURL={sideExpanded ? ExpandedIcon : MinifyIcon}
				onClick={onExpanded}
			/>
			<LeftSide>
				<Notification imgURL={NotificationIcon} />
				<Divider />
				<ContainerUserInfo onClick={() => setHandlerMenuInfo(!handlerMenuInfo)}>
					<InitialLetters>{(userLogged?.email || "")[0]}</InitialLetters>
					<NameUser>{getFirstNameFromEmail(userLogged?.email || "")}</NameUser>
					<MenuInfoIcon
						src={handlerMenuInfo ? TriangleUpIcon : TriangleDownIcon}
						alt="Informações do usuário"
					/>
					{handlerMenuInfo && (
						<ContainerDropDown onClick={(evt: any) => evt.stopPropagation()}>
							<ActionDropDown onClick={signOut}>
								<IconDropDownAction src={SignOutIcon} alt="Sair" />
								<TextDropDown> Sair </TextDropDown>
							</ActionDropDown>
						</ContainerDropDown>
					)}
				</ContainerUserInfo>
			</LeftSide>
		</Container>
	);
};
