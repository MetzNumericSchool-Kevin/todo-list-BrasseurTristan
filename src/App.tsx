import "./App.css";
import { TodoApp } from "./components/TodoApp";

function App() {
  return (
    <div className="hero min-h-screen bg-blue-950">
      <div className="hero-content text-center flex-col">
        <h1 className="text-5xl font-bold text-white">Ma liste de choses à faire</h1>
        <TodoApp />
      </div>
    </div>
  );
}

export default App;
