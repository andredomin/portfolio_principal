import Landing from "./components/Landing"
import Starfield from 'react-starfield';
import './App.scss'
function App() {

  return (
    <>
      <div className="App">
      <Starfield
        starCount={1000}
        starColor={[255, 255, 255]}
        speedFactor={0.02}
        backgroundColor="black"
      />
        <Landing />
      </div>
    </>
  )
}

export default App
