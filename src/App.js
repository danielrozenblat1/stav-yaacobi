
import './App.css';
import ByMe from './components/ByMe/ByMe';
import AboutMe from './components/me/Me';
import Recommends from './components/recommends/Recommends';
import FifthScreen from './screens/FifthScreen';
import FirstScreen from './screens/FirstScreen';
import ForthScreen from './screens/ForthScreen';
import SecondScreen from './screens/SecondScreen';
import ThirdScreen from './screens/ThirdScreen';

function App() {
  return <>
  <FirstScreen/>
  <Recommends/>
  <SecondScreen/>
  <ThirdScreen/>

  <AboutMe/>

  <FifthScreen/>
  <ForthScreen/>
  <ByMe/>
  </>
}

export default App;
