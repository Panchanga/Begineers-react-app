import React from "react";
const First = (props) => {
  console.log("first props", props);
  return (
    <div>
      <h1>{props.title}</h1>
      <p>
        This is certify that
        <strong>
          {props.gender === "M" ? "Mr" : "Ms"}.{props.name}
        </strong>
        , aged <i> {props.age} </i>
        <strong>has passed in the following subjects</strong>
      </p>
      <ol>
        {props.subjects.map((s) => (
          <li>{s}</li>
        ))}
        <li>Nepali</li>
      </ol>
      his location is{" "}
      <strong>
        {props.location.latitude}N {props.location.longitude}
      </strong>
    </div>
  );
};
const Second = () => {
  return (
    <div>
      <h1>This is the second component</h1>
      Register Batch = {"074"}
      Faculty = {"BEX"}
    </div>
  );
};
export { Second };
export default First;
