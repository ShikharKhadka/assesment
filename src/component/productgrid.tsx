import { Box, Button, Grid, Typography } from '@mui/material'
import { products } from '../pages/task2/constants';
import CButton from './button';
import type { ItemsI } from '../pages/task2/interface';


const ProductGrid = ({ products, addToCart }: { products: ItemsI[], addToCart: (items: ItemsI) => void }) => {
    return (
        <Grid container spacing={3}>
            {products.map((e) => (
                <Grid size={{ xs: 12, sm: 4, md: 3 }} key={e.id}>
                    <Box
                        display="flex"
                        flexDirection="column"
                        alignItems="center"
                        p={3}
                        borderRadius={3}
                        bgcolor="#fefefe"
                        sx={{
                            boxShadow: 1,
                            transition: "0.3s",
                            "&:hover": { boxShadow: 6, transform: "translateY(-2px)" },
                            width: "100%", // fill the grid item
                        }}
                    >
                        {/* Product Image */}
                        <Box
                            component="img"
                            src={e.image}
                            alt="Product"
                            sx={{
                                width: 150,
                                height: 150,
                                borderRadius: 2,
                                objectFit: "cover",
                                mb: 2,
                                border: "1px solid #eee",
                            }}
                        />

                        {/* Product Name */}
                        <Typography
                            variant="h6"
                            fontWeight="700"
                            gutterBottom
                            align="center"
                        >
                            {e.name}
                        </Typography>

                        {/* Price */}
                        <Typography
                            variant="subtitle1"
                            color="primary"
                            fontWeight="600"
                            gutterBottom
                            align="center"
                        >
                            {`$ ${e.price}`}
                        </Typography>

                        {/* Quantity */}
                        <Box
                            display="flex"
                            alignItems="center"
                            mt={1}
                            bgcolor="#f5f5f5"
                            borderRadius={1}
                            px={2}
                            py={0.5}
                            justifyContent="space-between"
                            width={100}
                        >
                            <Typography variant="body2" color="text.secondary">
                                Qty
                            </Typography>
                            <Typography variant="body1" fontWeight="600">
                                {e.quantity}
                            </Typography>
                        </Box>

                        {/* Add to Cart Button */}
                        <CButton title='Add To Cart' onClick={() => addToCart(e)} />
                    </Box>
                </Grid>
            ))}
        </Grid>
    );
}

export default ProductGrid
