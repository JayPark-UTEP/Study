import { useState } from "react";

export default function Hello({age}) {
  const [name, setName] = useState('Mike');
  const [newAge, setAge] = useState(age);
  const msg = age > 19 ? "adult" : "juvenile";

  return (
    <div>
      <h2 id="name">
        {name}({newAge}) : {msg}
      </h2>
      <button onClick={() => {
        setName(name ==="Mike" ? "Jane" : "Mike");
        setAge(newAge + 1)
      }}
      >
        +
      </button>
      <button onClick={() => {
        setAge(newAge - 1)
      }}
      >
        -
      </button>
    </div>
  );
}