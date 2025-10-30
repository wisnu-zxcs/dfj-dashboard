import { useCallback, useEffect, useRef, useState } from "react";

export function useTableScroll() {
    const tableRef = useRef<HTMLDivElement>(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(false);

    const checkScroll = useCallback(() => {
        if (!tableRef.current) return;

        const { scrollLeft, scrollWidth, clientWidth } = tableRef.current;
        setCanScrollLeft(scrollLeft > 0);
        setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
    }, []);

    useEffect(() => {
        checkScroll();
        window.addEventListener('resize', checkScroll);
        return () => window.removeEventListener('resize', checkScroll);
    }, [checkScroll]);

    return { tableRef, canScrollLeft, canScrollRight, checkScroll };
}