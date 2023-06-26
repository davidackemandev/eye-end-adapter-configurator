import { useState } from "react";
import Select from "react-select";

import "./App.css";

function App() {
  const [selectedGrip, setSelectedGrip] = useState("");
  const [selectedDevice, setSelectedDevice] = useState("");

  const [gripEyeEnd, setGripEyeEnd] = useState("");
  const [deviceEyeEnd, setDeviceEyeEnd] = useState("");

  // each grip only gets one eye end adapter!

  const grips = [
    {
      value: "G1061",
      label: "G1061 - Wedge grip, 1,200 lbF - 1/2-20F",
      eyeendKit: "AC1046-2",
    },
    {
      value: "G1061-1",
      label: "G1061-1 - Wedge grip, 200 lbF - 5/16-18F",
      eyeendKit: "AC1046-1",
    },
    {
      value: "G1061-2",
      label: "G1061-2 - Wedge grip, 2,000 lbF - 1/2-20F",
      eyeendKit: "AC1046-2",
    },
    {
      value: "G1061-3",
      label: "G1061-3 - Wedge grip, rubber jaw faces, 50 lbF - 1/2-20F",
      eyeendKit: "AC1046-2",
    },
    {
      value: "G1062",
      label: "G1062 - Miniature Wedge Grip - #10-32F",
      eyeendKit: "AC1046",
    },
    {
      value: "G1003",
      label: "G1003 - Miniature Component Grip - #10-32F",
      eyeendKit: "AC1046",
    },
    {
      value: "G1056",
      label: "G1056 - Multi-jaw Grip - #10-32F",
      eyeendKit: "AC1046",
    },
  ];

  const sensors = [
    { value: "MR01-50", label: "MR01-50 - 1/4-28F", eyeendKit: "AC1047-3" },
    { value: "MR01-100", label: "MR01-100 - 1/4-28F", eyeendKit: "AC1047-3" },
    { value: "MR01-200", label: "MR01-200 - 1/4-28F", eyeendKit: "AC1047-3" },
    { value: "MR01-300", label: "MR01-300 - 1/2-20F", eyeendKit: "AC1047-2" },
    { value: "MR01-500", label: "MR01-500 - 1/2-20F", eyeendKit: "AC1047-2" },
    { value: "MR01-750", label: "MR01-750 - 1/2-20F", eyeendKit: "AC1047-2" },
    { value: "MR01-1000", label: "MR01-1000 - 1/2-20F", eyeendKit: "AC1047-2" },
    { value: "MR01-1500", label: "MR01-1500 - 1/2-20F", eyeendKit: "AC1047-2" },
    { value: "MR01-2000", label: "MR01-2000 - 1/2-20F", eyeendKit: "AC1047-2" },
    { value: "MR01-5000", label: "MR01-5000 - 3/4-16F", eyeendKit: "none" },
    { value: "MR01-10000", label: "MR01-10000 - 3/4-16F", eyeendKit: "none" },
  ];

  const forcegauges = [
    { value: "M5-012", label: "M5-012 - #10-32M", eyeendKit: "AC1045" },
    { value: "M5-025", label: "M5-025 - #10-32M", eyeendKit: "AC1045" },
    { value: "M5-05", label: "M5-05 - #10-32M", eyeendKit: "AC1045" },
    { value: "M5-2", label: "M5-2 - #10-32M", eyeendKit: "AC1045" },
    { value: "M5-5", label: "M5-5 - #10-32M", eyeendKit: "AC1045" },
    { value: "M5-10", label: "M5-10 - #10-32M", eyeendKit: "AC1045" },
    { value: "M5-20", label: "M5-20 - #10-32M", eyeendKit: "AC1045" },
    { value: "M5-50", label: "M5-50 - #10-32M", eyeendKit: "AC1045" },
    { value: "M5-100", label: "M5-100 - #10-32M", eyeendKit: "AC1045" },
    { value: "M5-200", label: "M5-200 - 5/16-18M", eyeendKit: "AC1045-1" },
    { value: "M5-300", label: "M5-300 - 5/16-18M", eyeendKit: "AC1045-1" },
    { value: "M5-500", label: "M5-500 - 5/16-18M", eyeendKit: "AC1045-1" },
    { value: "M5-750", label: "M5-750 - 1/2-20F", eyeendKit: "AC1045-2" },
    { value: "M5-1000", label: "M5-1000 - 1/2-20F", eyeendKit: "AC1045-2" },
    { value: "M5-1500", label: "M5-1500 - 1/2-20F", eyeendKit: "AC1045-2" },
    { value: "M5-2000", label: "M5-2000 - 1/2-20F", eyeendKit: "AC1045-2" },
  ]

  const baseplates = [
    { value: "baseplate 1", label: "baseplate 1", eyeendKit: "AC1047-3" },
    { value: "baseplate 2", label: "baseplate 2", eyeendKit: "AC1047-3" }
  ]

  const devicesGrouped = [
    {label: 'Sensors', options: sensors},
    {label: 'Force Gauges', options: forcegauges},
    {label: 'Baseplates', options: baseplates}
  ]

  const eyeendKits = [
    {
      model: "AC1045",
      description: "Force gauge / force sensor adapter kit, #10-32F",
      imgsrc: "./img/AC1045_800x800.jpg",
      includes: [
        "1x G1082 eye end",
        "1x G1084 washer",
        "2x G1079 lock ring",
        "1x G1080 anchor pin",
      ],
    },
    {
      model: "AC1045-1",
      description: "	Force gauge / force sensor adapter kit, 5/16-18F",
      imgsrc: "./img/AC1045-1_800x800.jpg",
      includes: [
        "1x G1082-1 eye end",
        "1x G1084-1 washer",
        "2x G1079 lock ring",
        "1x G1080 anchor pin",
      ],
    },
    {
      model: "AC1045-2",
      description: "Force gauge adapter kit, 1/2-20M",
      imgsrc: "./img/AC1045-2_800x800.jpg",
      includes: [
        "1x G1081-2 eye end",
        "1x G1084-2 washer",
        "2x G1079 lock ring",
        "1x G1080 anchor pin",
      ],
    },
    {
      model: "AC1046",
      description: "Grip adapter kit, #10-32M",
      imgsrc: "./img/AC1046_800x800.jpg",
      includes: ["1x G1083 eye end adapter", "1x G1079 lock ring"],
    },
    {
      model: "AC1046-1",
      description: "Grip adapter kit, 5/16-18M",
      imgsrc: "./img/AC1046-1_800x800.jpg",
      includes: ["1x G1083-1 eye end adapter", "1x G1079 lock ring"],
    },
    {
      model: "AC1046-2",
      description: "Grip adapter kit, 1/2-20M",
      imgsrc: "./img/AC1046-2_800x800.jpg",
      includes: ["1x G1083-2 eye end adapter", "1x G1079 lock ring"],
    },
    {
      model: "AC1047",
      description: "Test frame base adapter kit, #10-32M",
      imgsrc: "./img/AC1047_800x800.jpg",
      includes: [
        "1x G1081 eye end",
        "1x G1080 anchor pin",
        "2x G1079 lock ring",
      ],
    },
    {
      model: "AC1047-1",
      description: "Test frame base adapter kit, 5/16-18M",
      imgsrc: "./img/AC1047-1_800x800.jpg",
      includes: [
        "1x G1081-1 eye end",
        "1x G1080 anchor pin",
        "2x G1079 lock ring",
      ],
    },
    {
      model: "AC1047-2",
      description: "Test frame base / force sensor adapter kit, 1/2-20M",
      imgsrc: "./img/AC1047-2_800x800.jpg",
      includes: [
        "1x G1081-2 eye end",
        "1x G1080 anchor pin",
        "2x G1079 lock ring",
      ],
    },
    {
      model: "AC1047-3",
      description: "Force sensor adapter kit, 1/4-28M",
      imgsrc: "./img/AC1047-3_800x800.jpg",
      includes: [
        "1x G1081-3 eye end",
        "1x G1080 anchor pin",
        "2x G1079 lock ring",
      ],
    },
    {
      model: "AC1047-4",
      description: "Force sensor adapter, Series R03, #10-32M",
      imgsrc: "./img/AC1047-4_800x800.jpg",
      includes: [
        "1x G1081 eye end",
        "1x G1080 anchor pin",
        "2x G1079 lock ring",
        "1x G1084 washer",
      ],
    },
  ];

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
                <img className="resultItemImage" src={gripEyeEnd.imgsrc} />
                <div className="resultItemText">
                  <strong>{gripEyeEnd.model} - {gripEyeEnd.description}</strong>
                  <div style={{ fontSize: ".9rem" }}>
                    Includes:
                    {gripEyeEnd.includes.map((item) => {
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
            stroke-width="0"
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
          {deviceEyeEnd && (
            <div className="resultItem">
              <img className="resultItemImage" src={deviceEyeEnd.imgsrc} />
              <div className="resultItemText">
                <strong>{deviceEyeEnd.model} - {deviceEyeEnd.description}</strong>
                <div style={{ fontSize: ".9rem" }}>
                  Includes:
                  {deviceEyeEnd.includes.map((item) => {
                    return <div>{item}</div>;
                  })}
                </div>
              </div>
            </div>
          )}
        </div>

        <div>

        </div>
      </div>
    </div>
  );
}

export default App;
