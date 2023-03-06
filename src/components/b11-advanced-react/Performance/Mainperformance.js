import React, { useCallback, useMemo, useState } from 'react';
import Count from './Count';

const Mainperformance = () => {
    const [filter, setFilter] = useState("");
  // useCallback(() => callback, [dependencies]);
  // memorized
  const calculate = useCallback(() => setFilter("")//cho dù setfilter ngoài thay đổi nhg trong hàm callback k thay đổi
  , [setFilter]);//properties dk k thay đổi re-render
  // useMemo(() => value, [dependencies])
  const data = useMemo(() => ({ success: false }), []);
  return (
    <div>
      <input
        type="text"
        className="p-3 rounded border border-gray-300"
        onChange={(e) => setFilter(e.target.value)}
      />
      <Count calculate={calculate} data={data}></Count>
    </div>
  );
};

export default Mainperformance;