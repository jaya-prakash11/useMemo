import React, { useMemo, useState } from 'react';
import './style.css';

export default function App() {
  const [data, setData] = useState(['abc', 'def', 'ghi', 'jkl']);
  const [toggle, setToggle] = useState(false);

  const iterateAllNumber = () => {
    let a = '';
    data.map((res) => {
      a += res;
    });
    return a;
  };

  const getIterateAllNumber = useMemo(() => iterateAllNumber(), [data]);

  return (
    <div>
      {getIterateAllNumber}
      <button onClick={() => setToggle((prev) => !prev)}>Toggle</button>
      {toggle ? 'ON' : 'OFF'}
    </div>
  );
}
