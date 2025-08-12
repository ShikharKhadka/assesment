import { AppBar, Button, Drawer, List, ListItem } from '@mui/material'
import { useState } from 'react';
import { Navigate, Outlet } from 'react-router';
import './layout.css';


export interface DrawerItemI {
    id: number,
    name: string,
    code: string
}

export const Layout = () => {
    const items: DrawerItemI[] = [
        {
            code: "T1",
            id: 1,
            name: "Task 1"
        },
        {
            code: "T2",
            id: 2,
            name: "Task 2"
        },
        {
            code: "T3",
            id: 2,
            name: "Task 3"
        },
        {
            code: "T4",
            id: 4,
            name: "Task 4"
        },
    ];

    const [isOpen, setIsopen] = useState(false);

    return (
        <div>
            <Navigate to={"/home"}></Navigate>
            <div>
                <AppBar position='fixed' sx={{ height: "64px" }}>
                    <div>This is appBar</div>
                    <Button onClick={() => {
                        setIsopen((prev) => !prev);
                    }}>Tap</Button>
                </AppBar>
                <Drawer sx={{
                    '& .MuiDrawer-paper': {
                        position: 'absolute',
                        top: 64,
                        height: "80%"
                    }
                }} variant='permanent' open={isOpen}>
                    <div>
                        {isOpen ?
                            <div className='drawerHeader'>
                                <div className=''>Header</div>
                                <div className=''>Header</div>

                            </div>
                            :
                            <div>Header</div>
                        }

                    </div>
                    <List sx={{ marginLeft: isOpen ? "8px" : "" }} >
                        {items.map((e) => {
                            return <ListItem key={e.id}>
                                {e.name}
                            </ListItem>
                        })}
                    </List>
                </Drawer>
            </div>
            <Outlet />
        </div >
    )
}
