import { AppBar, Badge, Box, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText, Toolbar, Typography, useTheme, type BadgeProps } from '@mui/material'
import { Navigate, Outlet } from 'react-router';
import './layout.css';
import Cart from '../component/header/cart';


export interface DrawerItemI {
    id: number,
    name: string,
    path: string;
}

export const Layout = () => {

    const theme = useTheme();
    const items: DrawerItemI[] = [
        {
            id: 1,
            name: "Task 1",
            path: '/home',
        },
        {
            id: 2,
            name: "Task 2",
            path: '/task2',

        },
        {
            id: 2,
            name: "Task 3",
            path: '/home',

        },
        {
            id: 4,
            name: "Task 4",
            path: '/home',

        },
    ];


    return (
        <Box sx={{
            width: '100vw',    // full viewport width
            height: 'auto',   // full viewport height
        }}>
            {/* <Navigate to={"/home"}></Navigate> */}
            <Box >
                {/* Header */}
                <AppBar position="fixed" sx={{ backgroundColor: theme.palette.primary.main }}>
                    <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Typography variant="h6" color={theme.palette.primary.contrastText}>
                            Test
                        </Typography>
                      <Cart/>
                    </Toolbar>
                </AppBar>

                <Box sx={{
                    display: "flex",
                    alignContent: 'flex-start',
                }}>
                    <Drawer
                        variant="permanent"
                        open
                        sx={{
                            "& .MuiDrawer-paper": {
                                top: "64px", // aligns under AppBar
                                height: "calc(100% - 64px)",
                                width: '240px',
                                boxSizing: "border-box",
                            },
                        }}
                    >
                        <List>
                            {items.map((e) => (
                                <ListItem key={e.id} disablePadding divider>
                                    <ListItemButton>
                                        <ListItemText primary={e.name} />
                                    </ListItemButton>
                                </ListItem>
                            ))}
                        </List>

                        <List >
                            <ListItem disablePadding >
                                <ListItemButton>
                                    <ListItemText primary={'Theme'} />
                                    <>Arrow</>
                                </ListItemButton>

                            </ListItem>
                            <ListItem>
                                <ListItemButton>
                                    <ListItemText primary={'Theme'} />
                                </ListItemButton>

                            </ListItem>
                            <ListItem divider >
                                <ListItemButton>
                                    <ListItemText primary={'Theme'} />
                                </ListItemButton>
                            </ListItem>
                        </List>
                    </Drawer>
                    <Box
                        component="main"
                        sx={{
                            marginTop: '100px',
                            paddingLeft: `${400}px`,
                            width: 'calc(100vw )',
                        }}
                    >
                        <Outlet />
                    </Box>
                </Box>

                {/* Sidebar Drawer */}

            </Box>
        </Box >
    )
}
