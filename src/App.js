import { useState } from "react";
import Select from 'react-select';

import './App.css';

function App() {
  const [selectedGrip, setSelectedGrip] = useState("");
  const [selectedDevice, setSelectedDevice] = useState("");

  const [gripEyeEnd, setGripEyeEnd] = useState("");
  const [deviceEyeEnd, setDeviceEyeEnd] = useState("");

// each grip only gets one eye end adapter!

  const grips = [
    { value: 'G1061', label: 'G1061 - Wedge grip, 1,200 lbF - 1/2-20 M', thread: '1/2-20', type: 'grip' },
    { value: 'G1061-1', label: 'G1061-1 - Wedge grip, 200 lbF - 5/16-18 M', thread: '5/16-18', type: 'grip' },
    { value: 'G1061-2', label: 'G1061-2 - Wedge grip, 2,000 lbF - 1/2-20 M', thread: '1/2-20', type: 'grip' },
    { value: 'G1061-3', label: 'G1061-3 - Wedge grip, rubber jaw faces, 50 lbF - 1/2-20 M', thread: '1/2-20', type: 'grip' },
    { value: 'G1062', label: 'G1062 - Miniature Wedge Grip - #10-32 M', thread: '#10-32', type: 'grip' },
    { value: 'G1003', label: 'G1003 - Miniature Component Grip - #10-32 M', thread: '#10-32', type: 'grip' },
    { value: 'G1056', label: 'G1056 - Multi-jaw Grip - #10-32 M', thread: '#10-32', type: 'grip' },
  ]

  const devices = [
    {value: 'MR01-50', label: 'MR01-50 - 1/4-28 F', thread: '1/4-28', male: false, type: 'sensor' },
    {value: 'MR01-100', label: 'MR01-100 - 1/4-28 F', thread: '1/4-28', male: false, type: 'sensor' },
    {value: 'MR01-200', label: 'MR01-200 - 1/4-28 F', thread: '1/4-28', male: false, type: 'sensor' },
    {value: 'MR01-300', label: 'MR01-300 - 1/2-20 F', thread: '1/2-20', male: false, type: 'sensor' },
    {value: 'MR01-500', label: 'MR01-500 - 1/2-20 F', thread: '1/2-20', male: false, type: 'sensor' },
    {value: 'MR01-750', label: 'MR01-750 - 1/2-20 F', thread: '1/2-20', male: false, type: 'sensor' },
    {value: 'MR01-1000', label: 'MR01-1000 - 1/2-20 F', thread: '1/2-20', male: false, type: 'sensor' },
    {value: 'MR01-1500', label: 'MR01-1500 - 1/2-20 F', thread: '1/2-20', male: false, type: 'sensor' },
    {value: 'MR01-2000', label: 'MR01-2000 - 1/2-20 F', thread: '1/2-20', male: false, type: 'sensor' },
    {value: 'MR01-5000', label: 'MR01-5000 - 3/4-16 F', thread: '3/4-16', male: false, type: 'sensor' },
    {value: 'MR01-10000', label: 'MR01-1000 - 3/4-16 F', thread: '3/4-16', male: false, type: 'sensor' }
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

  //const eyeendKits = [
  // {model:'AC1045', description: 'Force gauge / force sensor adapter kit, #10-32F', thread:'#10-32F', male: false, type: 'force gauge sensor'},
  // {model:'AC1045-1', description: '	Force gauge / force sensor adapter kit, 5/16-18F', thread:'5/16-18', male: false, type: 'force gauge sensor'},
  // {model:'AC1045-2', description: 'Force gauge adapter kit, 1/2-20M', thread:'1/2-20', type: 'force gauge sensor'},
  // {model:'AC1046', description: 'Grip adapter kit, #10-32M', thread:'#10-32', type: 'grip'},
  // {model:'AC1046-1', description: 'Grip adapter kit, 5/16-18M', thread:'5/16-18', type: 'grip'},
  // {model:'AC1046-2', description: 'Grip adapter kit, 1/2-20M', thread:'1/2-20', type: 'grip'},
  // {model:'AC1047', description: 'Test frame base adapter kit, #10-32M', thread:'#10-32', type: 'base'},
  // {model:'AC1047-1', description: 'Test frame base adapter kit, 5/16-18M', thread:'5/16-18', type: 'base'},
  // {model:'AC1047-2', description: 'Test frame base / force sensor adapter kit, 1/2-20M', thread:'1/2-20', type: 'base'},
  // {model:'AC1047-3', description: 'Force sensor adapter kit, 1/4-28M', thread:'1/4-28', type: 'sensor'},
  // {model:'AC1047-4', description: 'Force sensor adapter, Series R03, #10-32M', thread:'#10-32', type: 'sensor'}
  //]

  function onSelect(input, form){
    console.log(input)
    if(form === 'grips'){
      if(!input){
        setGripEyeEnd('');
       return;
      }
      const result = eyeends.filter(item => item.thread === input.thread  && item.type === 'grip');
      console.log(result)
      setGripEyeEnd(result[0]);
      // setSelectedGrip(item)
    } else if (form === 'device'){
      if(!input){
        setDeviceEyeEnd('');
       return;
      }
      const result = eyeends.filter(item => item.thread === input.thread  && item.type !== 'grip' );
      console.log(result)
      setDeviceEyeEnd(result[0])
    }
  }

  return (
    <div className="App">
      <div style={{width: '500px'}}>
      <div style={{height:'20px'}}></div>
      <span>Select a grip:</span>
      <Select options={grips} isSearchable={true} isClearable={true} onChange={(item)=>{onSelect(item, 'grips')}} />
      <div style={{height:'20px'}}></div>
      <span>Select a device:</span>
      <Select options={devices} isSearchable={true} isClearable={true} onChange={(item)=>{onSelect(item, 'device')}} />
      <div style={{height:'20px'}}></div>
      <span>Result:</span>
      {gripEyeEnd && deviceEyeEnd && <div>
      {gripEyeEnd && <div>1x {gripEyeEnd.model} - {gripEyeEnd.description}</div>}
      {deviceEyeEnd && <div>1x {deviceEyeEnd.model} - {deviceEyeEnd.description}</div>}
      </div>
      }
      </div>
    </div>
  );
}

export default App;
