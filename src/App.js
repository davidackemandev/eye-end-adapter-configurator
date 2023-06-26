import { useState } from "react";
import Select from "react-select";

import {grips, devicesGrouped, eyeendKits} from "./Data";
import "./App.css";

function App() {
  const [gripEyeEnd, setGripEyeEnd] = useState("");
  const [deviceEyeEnd, setDeviceEyeEnd] = useState("");

  // const eyeends = [
  //   {model: 'G1081', description: 'Eye end, #10-32M', thread: '#10-32'},
  //   {model: 'G1081-1', description: 'Eye end, 5/16-18M', thread: '5/16-18'},
  //   {model: 'G1081-2', description: 'Eye end, 1/2-20M', thread: '1/2-20'},
  //   {model: 'G1081-3', description: 'Eye end, 1/4-28M', thread: '1/4-28'},
  //   {model: 'G1082', description: 'Eye end, #10-32F', thread: '#10-32', male: false},
  //   {model: 'G1082-1', description: 'Eye end, 5/16-18F', thread: '5/16-18', male: false},
  //   {model: 'G1083', description: 'Eye end adapter, #10-32M', thread: '#10-32', type: 'grip',},
  //   {model: 'G1083-1', description: 'Eye end adapter, 5/16-18M', thread: '5/16-18', type: 'grip'},
  //   {model: 'G1083-2', description: 'Eye end adapter, 1/2-20M', thread: '1/2-20', type: 'grip'}
  // ]

  function onSelect(input, form) {
    if (form === "grips") {
      if (!input) {
        setGripEyeEnd("");
        return;
      }
      const result = eyeendKits.filter(
        (item) => item.model === input.eyeendKit
      );
      setGripEyeEnd(result[0]);
    } else if (form === "device") {
      if (!input) {
        setDeviceEyeEnd("");
        return;
      }
      const result = eyeendKits.filter(
        (item) => item.model === input.eyeendKit
      );
      setDeviceEyeEnd(result[0]);
    }
  }

  return (
    <div className="App">
      <div style={{ height: "20px" }}></div>
      <div style={{ width: "500px" }}>
        <div className="selectItemWrap">
          <div className="selectLabel">Connect this grip:</div>
          <Select
            options={grips}
            isSearchable={true}
            isClearable={true}
            onChange={(item) => {
              onSelect(item, "grips");
            }}
          />
          {gripEyeEnd && (
            <div className="resultItem">
              <img className="resultItemImage" src={gripEyeEnd.imgsrc} alt="" />
              <div className="resultItemText">
                <strong>
                  {gripEyeEnd.model} - {gripEyeEnd.description}
                </strong>
                <div style={{ fontSize: ".9rem" }}>
                  Includes:
                  {gripEyeEnd.includes &&
                    gripEyeEnd.includes.map((item) => {
                      return <div>{item}</div>;
                    })}
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="resultItemArrow">
          <svg
            height="60px"
            width="60px"
            stroke="currentColor"
            fill="#c6c6c6"
            strokeWidth="0"
            version="1.1"
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M8 15.5l7.5-7.5h-4.5v-8h-6v8h-4.5z"></path>
          </svg>
        </div>
        <div className="selectItemWrap">
          <div className="selectLabel">
            To this sensor, gauge, or baseplate:
          </div>
          <Select
            options={devicesGrouped}
            isSearchable={true}
            isClearable={true}
            onChange={(item) => {
              onSelect(item, "device");
            }}
          />
          {deviceEyeEnd &&
            deviceEyeEnd.model !==
              "none" && (
                <div className="resultItem">
                  <img className="resultItemImage" src={deviceEyeEnd.imgsrc} alt="" />
                  <div className="resultItemText">
                    <strong>
                      {deviceEyeEnd.model} - {deviceEyeEnd.description}
                    </strong>
                    <div style={{ fontSize: ".9rem" }}>
                      Includes:
                      {deviceEyeEnd.includes &&
                        deviceEyeEnd.includes.map((item) => {
                          return <div>{item}</div>;
                        })}
                    </div>
                  </div>
                </div>
              )}
          {deviceEyeEnd.model === "none" && (
            <div className="resultItem">
              <div style={{color:"#ff0000"}}>Eye end adapters are not available for this model.</div>
            </div>
          )}
        </div>

        <div></div>
      </div>
    </div>
  );
}

export default App;
