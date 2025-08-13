import { AppBar, Drawer, List, ListItem, ListItemButton, ListItemText, Toolbar, Typography, useTheme } from '@mui/material'
import { Navigate, Outlet } from 'react-router';
import './layout.css';


export interface DrawerItemI {
    id: number,
    name: string,
}

export const Layout = () => {

    const theme = useTheme();
    const items: DrawerItemI[] = [
        {
            id: 1,
            name: "Task 1"
        },
        {
            id: 2,
            name: "Task 2"
        },
        {
            id: 2,
            name: "Task 3"
        },
        {
            id: 4,
            name: "Task 4"
        },
    ];


    return (
        <div>
            <Navigate to={"/home"}></Navigate>
            <div>
                {/* Header */}
                <AppBar position="fixed" sx={{ backgroundColor: theme.palette.primary.main }}>
                    <Toolbar>
                        <Typography variant="h6" color={theme.palette.primary.contrastText}>
                            Assessment
                        </Typography>
                    </Toolbar>
                </AppBar>

                {/* Sidebar Drawer */}
                <Drawer
                    variant="permanent"
                    open
                    sx={{
                        "& .MuiDrawer-paper": {
                            top: "64px", // aligns under AppBar
                            height: "calc(100% - 64px)",
                            width: 240,
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
                        <ListItem  disablePadding >
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
                         <ListItem   divider >
                            <ListItemButton>
                                <ListItemText primary={'Theme'} />
                            </ListItemButton>
                            
                        </ListItem>
                    </List>
                </Drawer>
            </div>
            <Outlet />
        </div >
    )
}
