import HandlerPages from "./screens/handlerPages";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
	return (
		<>
			<HandlerPages />
			<ToastContainer />
		</>
	);
};

export default App;
