
import { RxMagicWand } from "react-icons/rx";
import { MdOutlineSettings } from "react-icons/md";
import { TbBrandGoogleAnalytics } from "react-icons/tb";
import { AiOutlineLineChart } from "react-icons/ai";
import { BiCamera, BiSliderAlt } from "react-icons/bi";
import { FaEye } from "react-icons/fa";
import { GiJourney } from "react-icons/gi";
export default  [
   
    
    {
        id:"footFall",
        label:"menu.footfall",
        path:'/app/footfall',
        Icons:<TbBrandGoogleAnalytics/>
    },
     
    {
        id:"Surveiliance Dashboard",
        label:"menu.surveliance",
        path:'/app/surveiliance',
        Icons:<FaEye/>
    },
    {
        id:"group",
        label:"menu.group",
        path:'/app/group',
        Icons:<AiOutlineLineChart/>
    },
    {
        id:"depoly",
        label:"menu.delopy",
        path:'/app/deploy',
        Icons:<GiJourney/>
    },
    {
        id:"Analytics",
        label:"menu.overview",
        path:'/app/overview',
        Icons:<RxMagicWand/>
    },
   
   
     {
        id:"Setting",
        label:"menu.settings",
        path:'/app/settings',
        Icons:<MdOutlineSettings/>
    }
]