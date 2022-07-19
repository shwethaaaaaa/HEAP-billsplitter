import { useEffect, useState } from 'react';

function useFetch(url, method, body) {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const abortCont = new AbortController();

        fetch(url, { method: method, signal: abortCont.signal, body: body })
        .then((res) => {
            if (!res.ok) {
                throw Error("Data could not be retrieved");
            }
            return res.json();
        })
        .then((data) => {
            setData(data);
            setIsPending(false);
            setError(null);
        })
        .catch((err) => {
            if (err.name !== "AbortError") {
                setData(null);
                setIsPending(false);
                setError(err.message);
                console.error(err); // Optional
            }
        });

        return () => abortCont.abort();
    }, [url, method]);

    return { data, isPending, error, setData };
}

export default useFetch;
