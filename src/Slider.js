import './Slider.css';
import { useContext } from 'react';
import ReactSlider from 'react-slider';
import SettingsContext from './SettingsContext';

export default function Slider() {
    const settingsInfo = useContext(SettingsContext);
    
    return (
        <div>
            <label>work: {settingsInfo.workMinutes}</label>
            <ReactSlider
                className={'slider'}
                thumbClassName={'thumb'}
                trackClassName={'track'}
                value={settingsInfo.workMinutes}
                min={0}
                max={120}
                step={5}
                onChange={newValue => settingsInfo.setWorkMinutes(newValue)}
            />
            <label>break: {settingsInfo.breakMinutes}</label>
            <ReactSlider
                className={'slider green'}
                thumbClassName={'thumb'}
                trackClassName={'track'}
                value={settingsInfo.breakMinutes}
                min={0}
                max={120}
                step={5}
                onChange={newValue => settingsInfo.setBreakMinutes(newValue)}
            />
        </div>
    )
}
