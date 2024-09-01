import { useThemeContext } from '../../context/themeContext';
import './SettingsPage.css';

const SettingsPage = () => {
  const { darkTheme, toggleTheme } = useThemeContext();
  return (
    <div className="settings-page-div-container">
      <div>
        <div className="settings-header">
          <h2>Settings</h2>
        </div>
        <div className="theme-options">
          <h3>Theme Options</h3>
          <div>
            <div>
              <input
                type="radio"
                id="light"
                name="theme"
                value="light"
                checked={!darkTheme}
                onClick={toggleTheme}
              />
              <label htmlFor="light">Light</label>
            </div>
            <div>
              <input
                type="radio"
                id="dark"
                name="theme"
                value="dark"
                checked={darkTheme}
                onClick={toggleTheme}
              />
              <label htmlFor="dark">Dark</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
