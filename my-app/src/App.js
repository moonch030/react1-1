import './App.css'
import SplitPane from './ch11/SplitPane';

function App() {
  return (
    <div className="App">
      <SplitPane
      left={<Contacts/>}
      rigth={<Chat/>}
      />
    </div>
  );
}

export default App;