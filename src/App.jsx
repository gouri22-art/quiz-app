import { BrowserRouter as Router, Routes, Route } from 'react-router'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Home from './components/Home'
import Quiz from './components/Quiz'
import Result from './components/Result'
import { AuthProvider } from './context/AuthContext'


// to setup Routing 
function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/result" element={<Result />} />

        </Routes>
      </Router>
    </AuthProvider>
  )

}

export default App
