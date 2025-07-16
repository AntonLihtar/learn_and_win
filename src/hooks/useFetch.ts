/*
* тестовый хук - не тестировал!
* */
import {useState, useEffect} from "react";

type FetchData<T> = {
    data: T | null;
    loading: boolean;
    error: Error | null;
};

export function useFetch<T>(url: string): FetchData<T> {
    const [state, setState] = useState<FetchData<T>>({
        data: null,
        loading: true,
        error: null,
    });

    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => setState({data, loading: false, error: null}))
            .catch((error) => setState({data: null, loading: false, error}));
    }, [url]);

    return state;
}