import React, { useState } from "react";

const Register = ({ batch, faculty, college, students }) => {
  const [entries, setEntries] = useState(students);

  const [name, setName] = useState("Jonh Rana");
  const [dob, setDob] = useState("");
  const [address, setAddress] = useState("");

  return (
    <div>
      <h1>{college}</h1>
      <p>
        {faculty} - {batch}
      </p>
      <ul>
        {entries.map((s) => (
          <li key={s.id}>
            <span>{s.id} </span>
            <span>{s.name}</span>
            <span>{s.dob}</span>
            <span>{s.address}</span>
          </li>
        ))}
      </ul>
      <button
        onClick={() =>
          setEntries([
            ...entries,
            {
              id: entries.length + 1,
              name: name,
              dob: dob,
              address: address,
            },
          ])
        }
      >
        +Add
      </button>
      <button onClick={() => setEntries([])}>Clear All</button>
      <input onChange={(e) => setName(e.target.value)} value={name} />
      <input onChange={(e) => setDob(e.target.value)} value={dob} />
      <input onChange={(e) => setAddress(e.target.value)} value={address} />
    </div>
  );
};

export default Register;
