import { Box, Button } from '@mui/material'
import { createPortal } from 'react-dom';
import CloseIcon from '@mui/icons-material/Close';
import type { ReactNode } from 'react';

const CModal = ({ children }: { children: ReactNode }) => {
    return (
        <Box>
            {createPortal(
                <Box sx={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    width: "100vw",
                    height: "100vh",
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                    zIndex: 1300, // similar to MUI dialog backdrop
                }}>
                    <Box
                        sx=
                        {{
                            position: "fixed",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                            height: 300,
                            width: 700,
                            backgroundColor: "white",
                            zIndex: 1400, // above backdrop
                            p: 2,
                            borderRadius: 2,
                            boxShadow: 24,
                        }}
                    >
                        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                            <Box>Edit Users</Box>
                            <CloseIcon color='primary' />
                        </Box>

                        {children}

                        <Box sx={{
                            position: "absolute", bottom: "8px", left: "50%",
                            transform: "translate(-50%, -50%)", display: "flex",
                            gap: 2 // MUI spacing units (2 = 16px)
                        }}>
                            <Button variant='contained' sx={{ textTransform: "none" }}>Close</Button>
                            <Button variant='contained' sx={{ textTransform: "none" }}>Submit</Button>
                        </Box>
                    </Box>
                </Box>,
                document.body
            )}
        </Box>
    );
}

export default CModal
