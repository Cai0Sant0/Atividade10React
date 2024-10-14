import "./App.css";
import Botao from "./components/Botao";

function App() {
  return (
    <div className="container">
        <Botao logado={true} />
        <Botao logado={false} />
    </div>
  );
}

export default App;
