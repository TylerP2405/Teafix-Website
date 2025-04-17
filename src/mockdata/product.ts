import mug1 from '../assets/mug1.png'
import mug2 from '../assets/mug2.png'
import mug3 from '../assets/mug3.png'
import mug4 from '../assets/mug4.png'

export interface Product {
    id: number;
    name: string;
    price: number;
    image: string;
}

export const products: Product[] = [
    { id: 1, name: "Coffee Beans", price: 16, image: mug1 },
    { id: 2, name: "Coffee Mug", price: 12, image: mug2 },
    { id: 3, name: "Coffee Beans", price: 13, image: mug3 },
    { id: 4, name: "Coffee Beans", price: 16, image: mug4 },
    { id: 5, name: "Coffee Beans", price: 16, image: mug1 },
    { id: 6, name: "Coffee Mug", price: 12, image: mug2 },
    { id: 7, name: "Coffee Beans", price: 13, image: mug3 },
    { id: 8, name: "Coffee Beans", price: 16, image: mug4 },
    { id: 9, name: "Coffee Beans", price: 16, image: mug1 },
    { id: 10, name: "Coffee Mug", price: 12, image: mug2 },
    { id: 11, name: "Coffee Beans", price: 13, image: mug3 }, 
]