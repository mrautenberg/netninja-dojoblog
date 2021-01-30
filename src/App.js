import Navbar from "./Navbar"
import Home from "./Home"

function App() {

  // const handleClick = () => {
  //   console.log('hello, ninjas')
  // }

  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home /*handleClick={handleClick} */ />
      </div>
    </div>
  );
}

export default App;
