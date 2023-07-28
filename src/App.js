// NOTE
// https://medium.com/@lahiru0561/react-select-with-custom-label-and-custom-search-122bfe06b6d7

import { useState } from "react";
import Select from "react-select";

import { eyeendKits } from "./Data";
import "./App.css";
import data from "./data.json";

function App() {
  const [gripEyeEnd, setGripEyeEnd] = useState("");
  const [deviceEyeEnd, setDeviceEyeEnd] = useState("");

  const selectData = data.map((item) => {
    item.label = `${item.MODELNO} - ${item.DESCRIPTION}${
      item.THREAD ? " - " + item.THREAD : ""
    }`;
    item.value = item.MODELNO;
    return item;
  });

  function compare(a, b) {
    if (a.MODELNO < b.MODELNO) {
      return -1;
    }
    if (a.MODELNO > b.MODELNO) {
      return 1;
    }
    return 0;
  }

  const grips = selectData.filter((item) => item.TYPE === "grip").sort(compare);
  
  const sensors = selectData
    .filter((item) => item.TYPE === "sensor")
    .sort(compare);
  const gauges = selectData
    .filter((item) => item.TYPE === "gauge")
    .sort(compare);
  const testStands = selectData
    .filter((item) => item.TYPE === "test stand")
    .sort(compare);
  const devicesGrouped = [
    { label: "Sensors", options: sensors },
    { label: "Force Gauges", options: gauges },
    { label: "Test Stands", options: testStands },
  ];

  function onSelect(input, form) {
    if (form === "grips") {
      if (!input) {
        setGripEyeEnd("");
        return;
      }
      const result = eyeendKits.filter(
        (item) => item.model === input.EYEENDKIT
      );
      setGripEyeEnd(result[0]);
    } else if (form === "device") {
      if (!input) {
        setDeviceEyeEnd("");
        return;
      }
      const result = eyeendKits.filter(
        (item) => item.model === input.EYEENDKIT
      );
      setDeviceEyeEnd(result[0]);
    }
  }

  return (
    <div className="App">
      <div className="selectLabel">Eye End Configurator</div>
        {/* start first select section */}
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
          {gripEyeEnd &&
            gripEyeEnd.model !== "none" &&
            gripEyeEnd.model !== "integrated" && (
              <div className="resultItem">
                <img
                  className="resultItemImage"
                  src={gripEyeEnd.imgsrc}
                  alt=""
                />
                <div className="resultItemText">
                  <strong>
                    {gripEyeEnd.model} - {gripEyeEnd.description}
                  </strong>
                  <div style={{ fontSize: ".9rem" }}>
                    Includes:
                    <div dangerouslySetInnerHTML={{__html: gripEyeEnd.includes}} />
                  </div>
                </div>
              </div>
            )}
          {gripEyeEnd.model === "none" && (
            <div className="resultItem">
              <div style={{ color: "#ff0000" }}>
                Eye end adapters are not available for this model.
              </div>
            </div>
          )}
          {gripEyeEnd.model === "integrated" && (
            <div className="resultItem">
              <div>{gripEyeEnd.description}</div>
            </div>
          )}
        </div>
        {/* end first select section */}
        <div className="resultItemArrow">
          <svg
            height="25px"
            width="25px"
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
        {/* start second select section */}
        <div className="selectItemWrap">
          <div className="selectLabel">
            To this sensor, gauge, or test stand:
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
            deviceEyeEnd.model !== "none" &&
            deviceEyeEnd.model !== "integrated" && (
              <div className="resultItem">
                <img
                  className="resultItemImage"
                  src={deviceEyeEnd.imgsrc}
                  alt=""
                />
                <div className="resultItemText">
                  <strong>
                    {deviceEyeEnd.model} - {deviceEyeEnd.description}
                  </strong>
                  <div style={{ fontSize: ".9rem" }}>
                    Includes:
                    <div dangerouslySetInnerHTML={{__html: deviceEyeEnd.includes}} />
                  </div>
                </div>
              </div>
            )}
          {deviceEyeEnd.model === "none" && (
            <div className="resultItem">
              <div style={{ color: "#ff0000" }}>
                {deviceEyeEnd.description}
              </div>
            </div>
          )}
          {deviceEyeEnd.model === "integrated" && (
            <div className="resultItem">
              <div>{deviceEyeEnd.description}</div>
            </div>
          )}
        </div>
    </div>
  );
}

export default App;
