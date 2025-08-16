import { useContext, useEffect } from 'react';
import ProductGrid from '../../component/productgrid';
import { products } from './constants';
import { Box } from '@mui/material';
import { CartContext } from '../../state/cart/cart_content';





const Task2 = () => {
    const context = useContext(CartContext);

    useEffect(() => {
        // disable scroll on mount
        document.body.style.overflow = context?.isCartOpen ? "hidden" : 'auto';

        // restore scroll on unmount
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [context?.isCartOpen]);

    return (
        <Box sx={{
            overflow: 'hidden'
        }}>
            <ProductGrid products={products} addToCart={(items) => {
                if (context) {
                    const duplicateItems = context.data.includes(items);
                    const updatedItems = duplicateItems ? context.data : [...context.data, items];
                    context.setData(updatedItems);
                }
            }} />
        </Box>

    );
}

export default Task2
