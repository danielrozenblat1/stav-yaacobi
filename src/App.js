
import './App.css';
import ByMe from './components/ByMe/ByMe';
import AboutMe from './components/me/Me';
import PrivacyPolicy from './components/privacy/Privacy';
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
  <PrivacyPolicy
  ownerName="סתיו יעקובי"
  email="stavyaacobi1@gmail.com"
  address="052-639-2116"
  domain="https://stavyaacobi.co.il/"
/>
  <ByMe/>
  </>
}

export default App;
