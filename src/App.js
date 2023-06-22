import { useState } from "react";
import Select from 'react-select';

import './App.css';

function App() {
  const [selectedGrip, setSelectedGrip] = useState("");
  const [selectedDevice, setSelectedDevice] = useState("");

  const [gripEyeEnd, setGripEyeEnd] = useState("");

  const grips = [
    { value: 'G1061', label: 'G1061 Wedge grip, 1,200 lbF', thread: '1/2-20', type: 'grip' },
    { value: 'G1061-1', label: 'G1061-1 Wedge grip, 200 lbF', thread: '5/16-18', type: 'grip' },
    { value: 'G1061-2', label: 'G1061-2 Wedge grip, 2,000 lbF', thread: '1/2-20', type: 'grip' },
    { value: 'G1061-3', label: 'G1061-3 Wedge grip, rubber jaw faces, 50 lbF', thread: '1/2-20', type: 'grip' },
    { value: 'G1062', label: 'G1062 Miniature Wedge Grip', thread: '#10-32', type: 'grip' },
    { value: 'G1003', label: 'G1003 Miniature Component Grip', thread: '#10-32', type: 'grip' },
    { value: 'G1056', label: 'G1056 Multi-jaw Grip', thread: '#10-32', type: 'grip' },
  ]

  const devices = [
    { value: 'MR01-50', label: 'MR01-50', thread: '1/4-28', male: false },
    { value: 'MR01-100', label: 'MR01-100', thread: '1/4-28', male: false },
    { value: 'MR01-200', label: 'MR01-200', thread: '1/4-28', male: false },
    { value: 'MR01-300', label: 'MR01-300', thread: '1/2-20', male: false },
    { value: 'MR01-500', label: 'MR01-500', thread: '1/2-20', male: false },
    { value: 'MR01-750', label: 'MR01-750', thread: '1/2-20', male: false },
    { value: 'MR01-1000', label: 'MR01-1000', thread: '1/2-20', male: false },
    { value: 'MR01-1500', label: 'MR01-1500', thread: '1/2-20', male: false },
    { value: 'MR01-2000', label: 'MR01-2000', thread: '1/2-20', male: false },
    { value: 'MR01-5000', label: 'MR01-5000', thread: '3/4-16', male: false },
    { value: 'MR01-10000', label: 'MR01-1000', thread: '3/4-16', male: false }
  ]

  const eyeends = [
    {model: 'G1081', description: 'Eye end, #10-32M', thread: '#10-32'},
    {model: 'G1081-1', description: 'Eye end, 5/16-18M', thread: '5/16-18'},
    {model: 'G1081-2', description: 'Eye end, 1/2-20M', thread: '1/2-20'},
    {model: 'G1081-3', description: 'Eye end, 1/4-28M', thread: '1/4-28'},
    {model: 'G1082', description: 'Eye end, #10-32F', thread: '#10-32', male: false},
    {model: 'G1082-1', description: 'Eye end, 5/16-18F', thread: '5/16-18', male: false},
    {model: 'G1083', description: 'Eye end adapter, #10-32M', thread: '#10-32', type: 'grip',},
    {model: 'G1083-1', description: 'Eye end adapter, 5/16-18M', thread: '5/16-18', type: 'grip'},
    {model: 'G1083-2', description: 'Eye end adapter, 1/2-20M', thread: '1/2-20', type: 'grip'}
  ]

  const eyeendKits = [
    {model:'AC1045', thread:'#10-32F'},
    {model:'AC1045-1', thread:'5/16-18', male: false},
    {model:'AC1045-2', thread:'1/2-20', male: false},
    {model:'AC1046', thread:'#10-32', type: 'grip'},
    {model:'AC1046-1', thread:'5/16-18', type: 'grip'},
    {model:'AC1046-2', thread:'1/2-20', type: 'grip'},
    {model:'AC1047', thread:'#10-32'},
    {model:'AC1047-1', thread:'5/16-18'},
    {model:'AC1047-2', thread:'1/2-20'},
    {model:'AC1047-3', thread:'1/4-28'},
    {model:'AC1047-4', thread:'#10-32'}
  ]

  function onSelect(item, form){
    if(form === 'grips'){
      getGripEyeEnd(item);
      // setSelectedGrip(item)
    } else if (form === 'device'){
      setSelectedDevice(item)
    }
  }

  function getGripEyeEnd(input){
    const result = eyeends.filter(item => item.thread === input.thread  && item.type === 'grip');
    setGripEyeEnd(result[0]);
    return result;
  }

  function readout(){
    
  }

  return (
    <div className="App">
      <div style={{width: '300px'}}>
      <span>Select a grip:</span>
      <Select options={grips} isSearchable={true} isClearable={true} onChange={(item)=>{onSelect(item, 'grips')}} />
      <span>Select a device:</span>
      <Select options={devices} isSearchable={true} isClearable={true} onChange={(item)=>{onSelect(item, 'device')}} />
      <div style={{height:'40px'}}></div>
      {gripEyeEnd && <div>1x {gripEyeEnd.model} - {gripEyeEnd.description}</div>}
      </div>
    </div>
  );
}

export default App;
