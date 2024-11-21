import {Header} from "./Header/Header.tsx";
import {FormProduct} from "./FormProduct/FormProduct.tsx";
import {useState} from "react";
import {ListProducts} from "./ListProducts/ListProducts.tsx";

interface ItemProduct {
    precio: number,
    imagen: string,
    nombre: string
}

export const AppProduct = () => {
    const [products, setProducts] = useState<ItemProduct[]>([])
    const handleAddProduct = (newItem: ItemProduct) => {
        setProducts((prev)=> [...prev, newItem])
    }

    return (
        <div>
            <Header/>
            <h2 className="text-center">Formulario</h2>
            <FormProduct handleAddProduct={handleAddProduct}/>
            <h2 className="text-center">Productos</h2>
            {products.length > 0 ? <ListProducts arrItems={products}/> : <h2>No hay productos</h2>}
        </div>
    )
}