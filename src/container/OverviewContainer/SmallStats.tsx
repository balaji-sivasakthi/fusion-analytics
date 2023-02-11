import { MdStore } from 'react-icons/md'
import { FaStore } from 'react-icons/fa'
import { IoStorefrontOutline } from "react-icons/io5";
import { Grid } from '@mui/material';
import SCardStats from '../../components/Overview/SCardStats';
function SmallStats() {
    const SData = [
        { title: "Deployed Stores", icon: <FaStore size={32} color={"blue"} />, value: "12", path: '/' },
        { title: "Active Store", icon: <IoStorefrontOutline size={32} color={"green"} />, value: "22", path: '/' },
        { title: "Inactive Stores", icon: <MdStore size={32} color={"red"} />, value: "22", path: '/' },
    ]

    return (
        <Grid container mb={2} spacing={2} columns={12}>

            {/* Small Card stats Data */}
            {SData?.map((d,index) => (<Grid key={index} xs={12} lg={4} item>
                <SCardStats title={d.title} icon={d.icon} value={d.value} path={d.path} />
            </Grid>))}

        </Grid>
    )
}

export default SmallStats