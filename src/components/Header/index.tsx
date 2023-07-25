import React from "react";
import { useNavigate } from "react-router-dom";
import { useUserAuth } from "../../hooks/useUserAuth";
import { getFirstNameFromEmail } from "../../utils/getFirstName";

//icons
import LogoIcon from "../../assets/icons/logo.svg";
import SignOutIcon from "../../assets/icons/sign-out.svg";
import MinifyIcon from "../../assets/icons/minify-bar.svg";
import ExpandedIcon from "../../assets/icons/expanded-bar.svg";

import {
	Logo,
	NameUser,
	LeftSide,
	Container,
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
			<Logo src={LogoIcon} alt="Client Vysor" />
			<SwitchViewSideBar
				imgURL={sideExpanded ? ExpandedIcon : MinifyIcon}
				onClick={onExpanded}
			/>
			<LeftSide>
				<ContainerUserInfo onClick={() => setHandlerMenuInfo(!handlerMenuInfo)}>
					<NameUser>{getFirstNameFromEmail(userLogged?.email || "")}</NameUser>
					<InitialLetters>{(userLogged?.email || "")[0]}</InitialLetters>
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
