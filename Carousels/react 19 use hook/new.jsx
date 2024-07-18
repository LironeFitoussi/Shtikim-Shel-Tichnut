import { use } from 'react';

function MyComponent({ dataPromise }) {
    const data = use(dataPromise);
    return <div>{data}</div>;
}