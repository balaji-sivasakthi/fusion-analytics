
import { RxMagicWand } from "react-icons/rx";
import { MdOutlineSettings } from "react-icons/md";
import { TbBrandGoogleAnalytics } from "react-icons/tb";
import { AiOutlineLineChart } from "react-icons/ai";
import { BiSliderAlt } from "react-icons/bi";
export default  [
    {
        id:"overview",
        label:"menu.overview",
        path:'/app/overview',
        Icons:<TbBrandGoogleAnalytics/>
    },
    {
        id:"footFall",
        label:"menu.footfall",
        path:'/app/footfall',
        Icons:<RxMagicWand/>
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
        Icons:<BiSliderAlt/>
    },
    {
        id:"Surveiliance Dashboard",
        label:"menu.surveliance",
        path:'/app/surveiliance',
        Icons:<MdOutlineSettings/>
    },
     {
        id:"Setting",
        label:"menu.settings",
        path:'/app/settings',
        Icons:<MdOutlineSettings/>
    }
]