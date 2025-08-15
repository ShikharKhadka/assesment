import { Box, Typography } from '@mui/material'
import { createPortal } from 'react-dom';
import CloseIcon from '@mui/icons-material/Close';
import { type ReactNode } from 'react';

const CModal = ({ title, children, isOpen, onClose, size, closeOnOverlayClick = true }: { title: string, size?: 'sx' | 'md', children: ReactNode, isOpen: boolean, onClose: () => void, closeOnOverlayClick?: boolean }) => {

    return (

        (isOpen) && <Box>
            {createPortal(
                <Box onClick={!closeOnOverlayClick ? (e) => { e.stopPropagation() } : onClose} sx={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    width: "100vw",
                    height: "100vh",
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                    zIndex: 1300, // similar to MUI dialog backdrop
                }}>
                    <Box
                        onClick={(e) => { e.stopPropagation() }}
                        sx=
                        {{
                            position: "fixed",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                            height: 300,
                            width: size == 'sx' ? "30%" : "40%",
                            backgroundColor: "white",
                            zIndex: 1400, // above backdrop
                            p: 2,
                            borderRadius: 2,
                            boxShadow: 24,
                        }}
                    >
                        <Box sx={{ display: "flex", justifyContent: "space-between", marginBottom: '20px' }}>
                            <Typography variant='h5'>{title}</Typography>
                            <CloseIcon color='primary' onClick={onClose} />
                        </Box>
                        {children}
                    </Box>
                </Box>,
                document.body
            )}
        </Box>
    );
}

export default CModal
