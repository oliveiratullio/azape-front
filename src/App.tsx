import { BrowserRouter, Route, Routes } from "react-router-dom"
import { AuthProvider } from "./contexts/AuthContext"
import LoginPage from "./pages/AuthPages/LoginPage/LoginPage"
import DashboardPage from "./pages/DashboardPage/DashboardPage"

function App() {

  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App
