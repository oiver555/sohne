import ReactDOM from "react-dom/client";
import App from "./App.jsx";

const root = ReactDOM.createRoot(document.querySelector("#root"));

const index = () => {
  return root.render(<App />);
};

index();
