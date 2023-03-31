import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header/Header";

import Planet from "./pages/Planets";
import { GlobalStyles } from "./styles/GlobalStyles";

const App = () => {
	return (
		<>
		<GlobalStyles/>
		<BrowserRouter>
			<Header></Header>
		</BrowserRouter>
		</>
	)
};

export default App;
