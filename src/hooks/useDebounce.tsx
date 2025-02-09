import { useState, useEffect } from "react";

/**
 * デバウンス(遅延処理)フック
 * @example
 * const debouncedValue = useDebounce(value, 500);
 */
function useDebounce<T>(value: T, delay: number = 500): T {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        return () => {
            clearTimeout(handler);
        };
    }, [value, delay]);

    return debouncedValue;
}

export default useDebounce;
