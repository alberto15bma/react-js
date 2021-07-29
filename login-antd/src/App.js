import { AuthProvider } from "./context/AuthContext";
import Login from "./paginas/Login/Login";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Login />
      </AuthProvider>
    </div>
  );
}

export default App;
