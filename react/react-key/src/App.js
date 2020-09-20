import React, { Fragment, useState } from "react";

function Sort() {
  let [list, setList] = useState([
    { id: 0, content: "c0" },
    { id: 1, content: "c1" },
    { id: 2, content: "c2" }
  ]);
  const sort = () => {
    let preList = list.slice();
    preList.sort((a, b) => b.id - a.id);
    setList(preList);
  };
  return (
    <div>
      {list.map((item, i) => {
        return (
          <li
            // key={i}
            key={item.id}
          >
            {item.content}
            <input />
          </li>
        );
      })}
      <button onClick={sort}>sort</button>
    </div>
  );
}
export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Sort />
    </div>
  );
}