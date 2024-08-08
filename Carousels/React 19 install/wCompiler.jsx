// Example 2: React 19 component relying on compiler optimizations
export const ModernComponent = () => {
    const [count, setCount] = useState(0);
    const [data, setData] = useState([1, 2, 3, 4, 5]);
  
    // No need for useCallback
    function incrementCount() {
      setCount(prevCount => prevCount + 1);
    }
  
    // The compiler will optimize this expensive computation
    function ExpensiveComponent({ data }) {
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
    }
  
    return (
      <div>
        <h2>Count: {count}</h2>
        <button onClick={incrementCount}>Increment</button>
        <ExpensiveComponent data={data} />
      </div>
    );
  };
  