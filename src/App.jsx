import './App.scss'
import { Counter } from "./components/Counter";
import { Footer } from "./components/Footer";

function App() {

  return (
    <div className="App">
      <div className="stars-background"></div>
      <div className="container">
        <h2 className="description">WE'RE LAUNCHING SOON</h2>
        <Counter />
      </div>
      <Footer />
    </div>
  )
}

export default App
