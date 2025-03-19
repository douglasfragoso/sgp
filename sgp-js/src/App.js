import { GlobalProvider } from "./contexts/GlobalContext";
import AppRoutes from "./routes";

function App() {
  return (
    <GlobalProvider>
        <AppRoutes />
    </GlobalProvider>
  );
}

export default App;
