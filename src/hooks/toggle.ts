import { useCallback, useState } from "react";

export function useToggle(
    initialValue: boolean = false
): [boolean, () => void, () => void, () => void] {
    const [value, setValue] = useState(initialValue);

    const toggle = useCallback(() => setValue((prev) => !prev), []);
    const setTrue = useCallback(() => setValue(true), []);
    const setFalse = useCallback(() => setValue(false), []);

    return [value, toggle, setTrue, setFalse];
}