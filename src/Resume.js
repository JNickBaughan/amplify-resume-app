import './App.css';
import { Header } from "./components/Header";
import { Bio } from "./components/Bio";
import { Experience } from "./components/Experience";
import { Education } from "./components/Education";

function App() {
  return (
    <div className="resume">
      <Header />
      <div className='sections'>
        <Bio />
        <br />
        <br />
        <br />
        <Experience />
        <br />
        <br />
        <br />
        <Education />
      </div>
    </div>
  );
}

export default App;
