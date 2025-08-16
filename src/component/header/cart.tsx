import styled from '@emotion/styled';
import { Badge, Box, IconButton, TableCell, TableRow, Typography, type BadgeProps } from '@mui/material'
import { useContext, useState } from 'react';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import CModal from '../model';
import { DataTable } from '../datatable';
import CTextField from '../formfields/textfield';
import DeleteIcon from '@mui/icons-material/Delete';
import type { ItemsI } from '../../pages/task2/interface';
import { CartContext } from '../../state/cart/cart_content';

const Cart = () => {

    const context = useContext(CartContext);
    // const [openDilaog, setOpenDilaog] = useState(false);
    const [amount, setAmount] = useState({
        tax: '',
        discount: '',
    })

    const StyledBadge = styled(Badge)<BadgeProps>(() => ({
        '& .MuiBadge-badge': {
            right: -3,
            top: 13,
            border: `2px solid `,
            padding: '0 4px',
        },
    }));

    const getTotalAmount = () => {
        const totalAmount = (context?.data.reduce((total, amount) => total + (amount.price * amount.quantity), 0));
        if (totalAmount) {
            const amountAfterDiscount = parseFloat(totalAmount.toString()) - parseFloat(amount.discount ? amount.discount : '0');
            const amountAfterTax = parseFloat(amountAfterDiscount.toString()) + parseFloat(amount.tax ? amount.tax : '0');

            return amountAfterTax;
        }
        return totalAmount;
    }

    const removeItems = (item: ItemsI) => {
        const removedItems = context?.data.filter((e) => e.id != item.id) ?? [];
        context?.setData(removedItems);
    }

    const qunatityOnchange = (id: string, f: React.ChangeEvent<HTMLInputElement>) => {
        if (!context) return;
        const itemList = context.data?.map((e) => {
            if (e.id == id) {
                return { ...e, quantity: Number(f.target.value) }
            }
            return e;
        }) ?? [];

        context.setData(itemList);
    }
    return (

        <Box>
            <IconButton aria-label="cart">
                <StyledBadge badgeContent={context && context.data ? context.data.length : 0} color="secondary">
                    <AddShoppingCartIcon onClick={() => context?.setcartOpen(true)} />
                </StyledBadge>
            </IconButton>
            <CModal isOpen={context?.isCartOpen ?? false} onClose={() => context?.setcartOpen(false)} title='Cart' >
                {context?.data.length == 0 ? <Typography variant='body1'>
                    Add Item to cart
                </Typography> : <Box>
                    <DataTable column={[
                        { label: "S.No", sortable: false },
                        { label: "Name", sortable: false },
                        { label: "Quantity", sortable: false },
                        { label: "Price", sortable: false },
                        { label: "Action", sortable: false }
                    ]}
                        rows={context?.data ?? []}>
                        {
                            context?.data.map((e, index) => {
                                return <TableRow key={e.id}>
                                    <TableCell>{index + 1}</TableCell>
                                    <TableCell>{e.name}</TableCell>
                                    <TableCell sx={{ width: '200px' }}>
                                        <CTextField onchange={(value) => qunatityOnchange(e.id, value)}
                                            placeholder='Quantity' value={e.quantity.toString() ?? ""} />
                                    </TableCell>
                                    <TableCell>{e.price}</TableCell>
                                    <TableCell>
                                        <DeleteIcon color='primary' onClick={() => {
                                            removeItems(e);
                                        }} />
                                    </TableCell>
                                </TableRow>
                            })
                        }
                    </DataTable>
                    <Box sx={{ display: 'flex', marginTop: '10px', justifyContent: 'space-between' }}>
                        <Box sx={{ display: 'flex', gap: '10px' }}>
                            <CTextField onchange={(e) => {
                                setAmount({ ...amount, discount: e.target.value })
                            }} placeholder='Discount Amount' />
                            <CTextField onchange={(e) => { setAmount({ ...amount, tax: e.target.value }) }} placeholder='Tax Amount' />
                        </Box>

                        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                            <Typography variant='h6'>Total Amount</Typography>
                            <Typography variant='h6'>{getTotalAmount()}</Typography>
                        </Box>
                    </Box>
                </Box>}

            </CModal>
        </Box>
    );
}

export default Cart
