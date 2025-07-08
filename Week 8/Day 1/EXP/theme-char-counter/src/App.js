import './App.css';
import { ThemeProvider, useTheme } from './ThemeContext';
import ThemeSwitcher from './ThemeSwitcher';
import CharacterCounter from './CharacterCounter';

function ThemedApp() {
  const { theme } = useTheme();
  return (
    <div className={`App ${theme}`}>
      <header className="App-header">
        <ThemeSwitcher />
        <CharacterCounter />
        {/* CharacterCounter will be added here */}
        <p>
          Theme Switcher and Character Counter Demo
        </p>
      </header>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <ThemedApp />
    </ThemeProvider>
  );
}

export default App;
