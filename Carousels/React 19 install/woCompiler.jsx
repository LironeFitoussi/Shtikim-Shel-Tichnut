// Example 1: Traditional React component with manual optimizations
import React, { useState, useCallback, useMemo } from 'react';

const ExpensiveComponent = React.memo(({ data }) => {
  console.log('ExpensiveComponent rendered');
  // Assume this is an expensive computation
  const processedData = data.map(item => item * 2);
  
  return (
    <ul>
      {processedData.map(item => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
});

export const TraditionalComponent = () => {
  const [count, setCount] = useState(0);
  const [data, setData] = useState([1, 2, 3, 4, 5]);

  const incrementCount = useCallback(() => {
    setCount(prevCount => prevCount + 1);
  }, []);

  const memoizedData = useMemo(() => data, [data]);

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={incrementCount}>Increment</button>
      <ExpensiveComponent data={memoizedData} />
    </div>
  );
};