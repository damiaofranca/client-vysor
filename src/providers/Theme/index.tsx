import React, { ReactNode, useState } from "react";

import { IThemeContext } from "./types";

interface UserAuthProps {
	children: ReactNode;
}

export const ThemeContext = React.createContext<IThemeContext>(
	{} as IThemeContext,
);

export const ThemeProvider: React.FC<UserAuthProps> = ({ children }) => {
	const [theme, setTheme] = useState<"light" | "dark">("light");

	const onChangeTheme = () => {
		setTheme((theme) => (theme === "light" ? "dark" : "light"));
	};

	return (
		<main className={theme}>
			<ThemeContext.Provider
				value={{
					theme,
					onChangeTheme,
				}}
			>
				{children}
			</ThemeContext.Provider>
		</main>
	);
};
