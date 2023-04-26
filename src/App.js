import data from './data';
import './App.css';
import Body from './components/body';
import Header from './components/header';

function App() {
  const datas = data.map((arr) => {
    return (
      <Body 
      arr = {arr}
      />
      
    )
  })
  return (
    <div className="App">
      <Header />
      {datas}
    </div>
  );
}

export default App;
