import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";
import LoginPage from "@/pages/Login";

function App() {
  return (
    <BrowserRouter>
      <Toaster position="top-center" richColors />
      <Routes>
        <Route path="/" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;