import { useCallback, useMemo, useState } from "react";

export interface PaginationState {
    currentPage: number;
    itemsPerPage: number;
    totalItems: number;
    totalPages: number;
}

export interface PaginationActions {
    goToPage: (page: number) => void;
    nextPage: () => void;
    previousPage: () => void;
    setItemsPerPage: (items: number) => void;
}

export function usePagination<T>(
    items: T[],
    initialItemsPerPage: number = 10
): [T[], PaginationState, PaginationActions] {
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(initialItemsPerPage);

    const totalItems = items.length;
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    // Calculate paginated items
    const paginatedItems = useMemo(() => {
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        return items.slice(startIndex, endIndex);
    }, [items, currentPage, itemsPerPage]);

    // Pagination actions
    const goToPage = useCallback(
        (page: number) => {
            const validPage = Math.max(1, Math.min(page, totalPages));
            setCurrentPage(validPage);
        },
        [totalPages]
    );

    const nextPage = useCallback(() => {
        goToPage(currentPage + 1);
    }, [currentPage, goToPage]);

    const previousPage = useCallback(() => {
        goToPage(currentPage - 1);
    }, [currentPage, goToPage]);

    const updateItemsPerPage = useCallback((items: number) => {
        setItemsPerPage(items);
        setCurrentPage(1); // Reset to first page
    }, []);

    return [
        paginatedItems,
        {
            currentPage,
            itemsPerPage,
            totalItems,
            totalPages,
        },
        {
            goToPage,
            nextPage,
            previousPage,
            setItemsPerPage: updateItemsPerPage,
        },
    ];
}