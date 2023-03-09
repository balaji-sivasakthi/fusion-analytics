import React, { useEffect } from 'react'

import Modal from '@mui/material/Modal'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { FaAddressCard } from 'react-icons/fa'
import { GiCancel } from 'react-icons/gi'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch } from '../../redux/store'
import { closeModel } from '../../redux/surveillance/recentCaptureModelSlice'

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

function Popup() {
    const dispatch = useDispatch<AppDispatch>();
    const { isOpen, data } = useSelector((state: any) => state.recentCaptureModel);

    const handleClose = () => {
        dispatch(closeModel())
    }
    return (
        <div>
            <Modal

                open={isOpen}>
                <Box sx={style}>
                    <Box display={"flex"} justifyContent="end">
                        <Button
                            sx={{
                                backgroundColor: "red",
                                color: "#fff"
                            }}
                            onClick={handleClose} variant='contained'>Close</Button>
                    </Box>
                    <Box my={2} height={300} sx={{ backgroundColor: "grey" }}>
                        <img height={"100%"} width={"100%"} src={"http://192.168.0.104/" + data?.top1?.faceImageURL} alt="" />
                    </Box>
                    <Box >

                        <Typography >{data?.top1?.searchScore}% Match</Typography>
                    </Box>
                    <Box mt={2} display={"flex"} justifyContent="space-between" height={100}>
                        <Box >
                            <Typography >Person Name: {data?.top1?.description}</Typography>
                            <Typography >Person Age: {data?.faceAttr?.age}</Typography>
                        </Box>
                        <Box>
                            <Typography >Person Group: {data?.top1?.alertGroup.map((e: any) => `${e.groupName}`)}</Typography>
                            <Typography >Stranger: {data?.stranger ? "This is a stranger" : "This is not a stranger"}</Typography>
                        </Box>
                        <Box>
                            <Typography >Capture On: {data?.channelName}</Typography>
                            <Typography >Capture At: {new Date(data?.timestamp).toLocaleString()}</Typography>
                        </Box>
                    </Box>

                    <Box display={"flex"} justifyContent="space-between" sx={{ width: "100%" }}>
                        <Button
                            sx={{
                                backgroundColor: "#4B49AC",
                                color: "#fff"

                            }}
                            startIcon={<FaAddressCard />}
                            variant="contained">
                            Convert to VIP Customer
                        </Button>
                        <Button
                            sx={{
                                backgroundColor: "#4B49AC",
                                color: "#fff"
                            }}
                            startIcon={<GiCancel />}
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