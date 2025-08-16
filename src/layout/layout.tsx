import { AppBar, Box, Drawer, List, ListItem, ListItemButton, ListItemText, Toolbar, Typography, useMediaQuery, useTheme, } from '@mui/material'
import { Outlet, useNavigate } from 'react-router';
import './layout.css';
import Cart from '../component/header/cart';
import { useContext } from 'react';
import { ThemeDataContext } from '../state/theme/theme_context';


export interface DrawerItemI {
    id: number,
    name: string,
    path: string;
}

export const Layout = () => {

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const themecontext = useContext(ThemeDataContext);
    const router = useNavigate();

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
    ];


    return (
        <Box sx={{
            width: '96vw',
            height: 'auto',
        }}>
            {/* <Navigate to={"/home"}></Navigate> */}
            <Box >
                <AppBar position="fixed" sx={{ backgroundColor: theme.palette.primary.main }}>
                    <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Typography variant="h6" color={theme.palette.primary.contrastText}>
                            Test
                        </Typography>
                        <Cart />
                    </Toolbar>
                </AppBar>

                <Box sx={{}}>
                    {!isMobile && <Drawer
                        variant="permanent"
                        open
                        sx={{
                            "& .MuiDrawer-paper": {
                                top: "64px",
                                height: "calc(100% - 64px)",
                                width: '240px',
                                boxSizing: "border-box",
                            },
                        }}
                    >
                        <List>
                            {items.map((e) => (
                                <ListItem key={e.id} disablePadding divider  onClick={()=>router(e.path)}>
                                    <ListItemButton>
                                        <ListItemText primary={e.name} />
                                    </ListItemButton>
                                </ListItem>
                            ))}
                        </List>

                        <List >

                            <ListItem>
                                <ListItemButton onClick={() => {
                                    localStorage.setItem('theme', 'client-a');
                                    themecontext?.setTheme('client-a')
                                }}>
                                    <ListItemText primary={'Theme1'} />
                                </ListItemButton>

                            </ListItem>
                            <ListItem divider >
                                <ListItemButton onClick={() => {
                                    localStorage.setItem('theme', 'client-b');
                                    themecontext?.setTheme('client-b')
                                }}>
                                    <ListItemText primary={'Theme2'} />
                                </ListItemButton>
                            </ListItem>
                        </List>
                    </Drawer>
                    }

                    <Box
                        component="main"
                        sx={{
                            marginTop: '100px',
                            paddingLeft: !isMobile ? `${300}px` : '',
                            width: !isMobile ? 'calc(100vw - 240px )' : '100vw',
                        }}
                    >
                        <Outlet />
                    </Box>
                </Box>
            </Box>
        </Box >
    )
}
