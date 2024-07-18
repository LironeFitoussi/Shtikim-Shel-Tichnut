// Old way
function OldComponent() {
    const [data, setData] = useState(null);
    useEffect(() => {
        fetchData().then(setData);
    }, []);
    if (data === null) return <div>Loading...</div>;
    return <div>{data}</div>;
}

// New way with 'use'
function NewComponent({ dataPromise }) {
    const data = use(dataPromise);
    return <div>{data}</div>;
}