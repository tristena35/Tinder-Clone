import './App.css';
import Header from './components/header/Header';
import TinderCards from './components/tinder-cards/TinderCards';
import SwipeButtons from './components/swipe-buttons/SwipeButtons';

function App() {
  return (
    // BEM class naming convetion
    <div className="app">
      <Header />
      <TinderCards />
      <SwipeButtons />
    </div>
  );
}

export default App;
 