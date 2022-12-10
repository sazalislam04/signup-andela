import { Toaster } from "react-hot-toast";
import "./App.css";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <div>
      <Dashboard />
      <Toaster />
    </div>
  );
}

export default App;
