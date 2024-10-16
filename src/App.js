import "./App.css";
import { useState, useMemo } from "react";
import Timer from "./components/Timer/Timer.js";
import SettingsPage from "./pages/SettingsPage.js";
import SettingsContext from "./contexts/SettingsContext.js";
import Pomodoro from "./components/Pomodoro.js";

export default function App() {
  const [showSettings, setShowSettings] = useState(false);
  const [workMinutes, setWorkMinutes] = useState(45);
  const [breakMinutes, setBreakMinutes] = useState(15);

  const settingsValue = useMemo(() => ({
    showSettings,
    setShowSettings,
    workMinutes,
    breakMinutes,
    setWorkMinutes,
    setBreakMinutes,
  }), [showSettings, workMinutes, breakMinutes]);

  return (
    <SettingsContext.Provider value={settingsValue}>
      <div className="app-container">
        <button 
          className="settings-button" 
          onClick={() => setShowSettings(true)}
          aria-label="Open Settings"
        >
          Settings
        </button>
        {showSettings ? (
          <SettingsPage />
        ) : (
          <div className="app">
            <div className="timer">
              <Timer />
            </div>
            <div className="pomodoro">
              <Pomodoro />
            </div>
          </div>
        )}
      </div>
    </SettingsContext.Provider>
  );
}