import { useEffect, useRef, useState, type RefObject } from "react";

export function useIntersectionObserver(
    options: IntersectionObserverInit = {}
): [RefObject<HTMLDivElement | null>, boolean] {
    const [isIntersecting, setIsIntersecting] = useState(false);
    const ref = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const observer = new IntersectionObserver(([entry]) => {
            setIsIntersecting(entry.isIntersecting);
        }, options);

        observer.observe(element);

        return () => observer.disconnect();
    }, [options]);

    return [ref, isIntersecting];
}