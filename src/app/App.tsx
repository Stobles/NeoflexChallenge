import AppRouter from "@/routes/AppRouter";
import { AppProvider } from "./AppProvider";
import { Toaster } from "sonner";

function App() {
  return (
    <AppProvider>
      <Toaster richColors />
      <AppRouter />
    </AppProvider>
  );
}

export default App;
