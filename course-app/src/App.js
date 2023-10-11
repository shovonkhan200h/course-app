import logo from './logo.svg';
import './App.css';
import Header from './Component/Header/Header';
import Slider from './Component/Slider/Slider';
import Section from './Component/Section1/Section';
import Course from './Component/Course/Course';

function App() {
  return (
    <div>
      <Header></Header>
      <Slider></Slider>
      {/* <Section></Section> */}
      <Course></Course>
    </div>
  );
}

export default App;
