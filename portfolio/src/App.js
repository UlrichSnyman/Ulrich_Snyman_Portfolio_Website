import './styles/App.css';
import MainPage from './components/MainPage';

function App() {
  return (
    <div className="App">
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <header className="App-header">
        <MainPage />
      </header>
    </div>
  );
}

export default App;
