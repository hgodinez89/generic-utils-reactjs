import { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

export const useFetch = (url) => {
    const isMounted = useRef(true);
    const [state, setState] = useState({ data: null, loading: true, error: null });

    useEffect(() => {
        return () => {
            // This line access to the useRefValue in const isMounted
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
                    error: `Error in fetch to ${url}`,
                });
            });
    }, [url]);

    return state;
}

useFetch.propTypes = {
    url: PropTypes.string.isRequired,
};