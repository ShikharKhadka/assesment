import { useContext } from 'react';
import ProductGrid from '../../component/productgrid';
import { TransactionContext } from '../../state/cart/cart_content';
import { products } from './constants';





const Task2 = () => {
    const context = useContext(TransactionContext);



    return (
        <ProductGrid products={products} addToCart={(items) => {
            if (context) {
                const duplicateItems = context.data.includes(items);
                const updatedItems = duplicateItems ? context.data : [...context.data, items];
                context.setData(updatedItems);
            }
        }} />
    );
}

export default Task2
