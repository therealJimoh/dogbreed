import "./App.scss";
import Homepage from "./page/Homepage";
import { Provider } from "react-redux";
import store from "./features";

function App() {
  return (
    <Provider store={store}>
      <Homepage />
    </Provider>
  );
}

export default App;
