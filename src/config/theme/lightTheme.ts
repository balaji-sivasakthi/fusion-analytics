import { createTheme } from "@mui/material";
import { blue, grey, red } from "@mui/material/colors";

export default  createTheme({
    typography:{
        fontFamily:"inter"
    },
    
    palette:{
        primary:{
            main:grey[100]
        },
        background: {
            default:"#f1f1f1"
        },
    },
    components:{
        
        MuiAppBar:{
            styleOverrides:{
                root:{
                    alignItems:"center",
                    borderRadius:5,
                    boxShadow:"none",
                    borderWidth:'1px',
                    borderStyle:"solid",
                    borderColor:"#3a35411f",
                    backgroundColor:"#fff",
                    padding:"10px",
                    
                },
            }
        },
        MuiCard:{
            styleOverrides:{
                root:{
                    borderRadius:5,
                    boxShadow:"none",
                    borderWidth:'1px',
                    borderStyle:"solid",
                    borderColor:"#3a35411f",
                    backgroundColor:"#fff",
                    display: "flex",
                    flexDirection: "column",
                }
            }
        },
        MuiCardContent:{
styleOverrides:{
    root:{
        marginTop:"auto"
    }
}
        },
        MuiCardActions:{
            styleOverrides:{
                root:{
                   marginTop:"auto"
                }
            }
        }
    }
})
