import { React, useContext } from "react";
import SettingsContext from "../../contexts/SettingsContext";
import BackButton from "../../components/BackButton/BackButton";

export default function Settings() {
  const settingsInfo = useContext(SettingsContext);

  return (
    <div>
      <BackButton onClick={() => settingsInfo.setShowSettings(false)} />
    </div>
  )
}
