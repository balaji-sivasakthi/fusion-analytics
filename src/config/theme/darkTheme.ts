import { createTheme } from "@mui/material";
import { blue, grey, red } from "@mui/material/colors";

export default createTheme({
    palette:{
        primary:{
            main:grey[100]
        },
        background:{
            default:blue[200]
        }
    },
    components:{
        
        MuiAppBar:{
            styleOverrides:{
                root:{
                    borderRadius:5
                }
            }
        }
    }
})
