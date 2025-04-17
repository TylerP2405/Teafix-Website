import { useMemo } from "react";
import { Product } from "../mockdata/product";

export const useSortedProducts = (products: Product[], sortOption: string) => {
    return useMemo(() => {
        const sorted = [...products]
        switch (sortOption){
            case "priceLowToHigh":
                return sorted.sort((a,b) => a.price - b.price)
            case "priceHighToLow":
                return sorted.sort((a,b) => b.price - a.price)
            case "nameAtoZ":
                return sorted.sort((a,b) => a.name.localeCompare(b.name))
            case "nameZtoA":
                return sorted.sort((a,b) => b.name.localeCompare(a.name))
            case "bestSelling":
                // Assuming best selling is based on the number of sales
                // Implement when use database to load data
                //return sorted.sort((a,b) => b.sales - a.sales)
                return sorted // Placeholder for best selling sort
            default:
                return sorted
        }
    }, [products, sortOption])
}