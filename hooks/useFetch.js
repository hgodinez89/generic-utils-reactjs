import { useState, useEffect, useRef } from 'react';

export const useFetch = (url) => {
    const isMounted = useRef(true);
    const [state, setState] = useState({ data: null, loading: true, error: null });

    useEffect(() => {
        return () => {
            // Esto accede al valor del useRef en la constante isMounted
            isMounted.current = false;
        };
    }, [])

    useEffect(() => {
        setState({ data: null, loading: true, error: null});
        
        fetch(url)
            .then(resp => resp.json())
            .then(data => {
                if (isMounted.current) {
                    setState({
                        loading: false,
                        error: null,
                        data
                    });
                }
            }).
            catch(() => {
                setState({
                    data: null,
                    loading: false,
                    error: 'No fue posible cargar la data',
                });
            });
    }, [url]);

    return state;
}
