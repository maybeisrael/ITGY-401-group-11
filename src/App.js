import './App.css';
import Bio from './components/Bio.tsx';
import Header from './components/header.tsx'
import Hero from './components/Hero.tsx';
import Pdevelopment from './components/Pdevelopment.tsx';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Bio />
      <Pdevelopment />
    </div>
  );
}

export default App;
