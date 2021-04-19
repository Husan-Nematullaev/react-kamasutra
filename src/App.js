import './App.css';
import Content from './components/Profile';
import Header from './components/Header'
import Nav from './components/Nav';

const App = () => {
  return (
    <div className="wrapper">
      <Header />
      <Nav />
      <Content />
    </div>
  );
}


export default App;