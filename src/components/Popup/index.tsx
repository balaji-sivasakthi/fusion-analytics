import React from 'react'

import Modal from '@mui/material/Modal'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { FaAddressCard } from 'react-icons/fa'
import { GiCancel } from 'react-icons/gi'
const style: any = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 800,
    bgcolor: '#F5F7FF',
    outline: "none",
    borderRadius: '5px',
    boxShadow: 24,
    p: 4,
};

function Popup({ open,handleClose }: { open: any,handleClose:any }) {
    
    return (
        <div>
            <Modal

                open={open}>
                <Box sx={style}>
                    <Box display={"flex"} justifyContent="end">
                        <Button
                         sx={{
                            backgroundColor:"red",
                            color:"#fff"

                    }}
                        onClick={()=>{handleClose((prev: any)=>!prev)}} variant='contained'>Close</Button>
                    </Box>
                    <Box my={2} height={300} sx={{ backgroundColor: "grey" }}>
                    
                    </Box>
                    <Box >
                           
                            <Typography >100% Mactch</Typography>
                        </Box>
                    <Box mt={2} display={"flex"} justifyContent="space-between" height={100}>
                        <Box >
                            <Typography >Person Name: {"Balaji"}</Typography>
                            <Typography >Person Age: {"19"}</Typography>
                        </Box>
                        <Box>
                            <Typography >Person Group: {"TRS"}</Typography>
                            <Typography >Stranger: {"This is not a stranger"}</Typography>
                        </Box>
                        <Box>
                            <Typography >Capture On: {"Head Count Camera"}</Typography>
                            <Typography >Capture At: {"2023-3-8"}</Typography>
                        </Box>
                    </Box>

                    <Box display={"flex"} justifyContent="space-between" sx={{ width: "100%" }}>
                        <Button
                        sx={{
                            backgroundColor:"#4B49AC",
                            color:"#fff"

                    }}
                        startIcon={<FaAddressCard/>}
                        variant="contained">
                            Convert to VIP Customer
                        </Button>
                        <Button
                        sx={{
                            backgroundColor:"#4B49AC",
                            color:"#fff"
                        }}
                        startIcon={<GiCancel/>}
                        variant="contained">
                            Add to Blacklist
                        </Button>
                    </Box>
                </Box>
            </Modal>
        </div>
    )
}

export default Popup