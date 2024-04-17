import logo from './logo.svg';
import './App.css';
import Welcome from './ch05/Welcome';
import NotificationList from './ch06/NotificationList';
import Counter from './ch07/Counter';

function App() {
  let count = 0
  return (
    <div className="App">
      <Counter/>
    </div>
  );
}

export default App;
