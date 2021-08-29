import './App.css';
import "./common/lib/bootstrap.min.css";
import "./common/common.css"
import CustomHeader from './components/header/header';
import Home from './components/Home/Home';
function App() {
  return (
    <div className="mainBackground">
      <CustomHeader />
      <Home></Home>
    </div>
  );
}

export default App;
