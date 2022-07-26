import { useEffect, useState } from 'react';

function useFetch(url, method, body) {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);
    var bodyInput = body
    // console.log(bodyInput)
    console.log(url)

    useEffect(() => {
        const abortCont = new AbortController();
        console.log(bodyInput)
        
        fetch(url, { method: method, signal: abortCont.signal, body:body ,  mode: 'cors', headers : { 
            'Content-Type': 'application/json'
        } } )
        .then((res) => {

            console.log(res)

           
            if (!res.ok) {
                // const error = (data && data.message) || res.status;
                // console.log("anything")

                // console.log(Promise.reject(error))

                throw Error("Data could not be retrieved");
            }
            return res.json();
        })
        .then((data) => {
            console.log("line 30")
            console.log(data)
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
    }, [url, method, body]);

    return { data, isPending, error, setData };
}

export default useFetch;