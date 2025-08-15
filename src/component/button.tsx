import { Button } from '@mui/material'
import React from 'react'

const CButton = ({ title, onClick }: { title: string, onClick: () => void }) => {
    return (
        <Button
            variant="contained"
            color="primary"
            onClick={onClick}
            sx={{
                mt: 2,
                py: 1.5,
                px: 3,
                borderRadius: 2,
                textTransform: "none",
                fontWeight: 600,
            }}
        >
            {title}
        </Button>
    )
}

export default CButton
