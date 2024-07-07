import { React, useContext } from 'react';
import SettingsContext from './SettingsContext';
import BackButton from './BackButton';

export default function Settings() {
  const settingsInfo = useContext(SettingsContext);

  return (
    <div>
      <div styles={{ position: 'absolute', top: 10, left: 10, marginTop: '20px' }}>
        <BackButton onClick={() => settingsInfo.setShowSettings(false)} />
      </div>
    </div>
  )
}
