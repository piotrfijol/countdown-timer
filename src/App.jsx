import './App.scss'
import { Footer } from "./components/footer";

function App() {

  return (
    <div className="App">
      <div className="stars-background"></div>
      <div className="container">
        <h2 className="description">WE'RE LAUNCHING SOON</h2>
        <div className="counter">
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default App
