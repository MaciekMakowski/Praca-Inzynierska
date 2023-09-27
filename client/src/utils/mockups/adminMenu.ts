import { OverridableComponent } from "@mui/material/OverridableComponent";
import { SvgIconTypeMap } from "@mui/material";
import TvIcon from '@mui/icons-material/Tv';
import ConstructionIcon from '@mui/icons-material/Construction';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import PersonIcon from '@mui/icons-material/Person';


export type subListType = {
    name:string,
    path:string,
}

export type menuListType = {
    ico:OverridableComponent<SvgIconTypeMap<{}, "svg">> & { muiName: string; },
    name:string,
    path:string,
    subList?:subListType[]
}

export const subList:subListType[] = [
    {
        name:'Zwierzęta',
        path:'/animals'
    },
    {
        name:'Choroby',
        path:'/diseases'
    },
    {
        name:'Izolacje',
        path:'/isolations'
    },
    {
        name:"Wolontariusze",
        path:'/volunteers'
    },
    {
        name:"Adpotcje",
        path:'/adoptions'
    },
    {
        name:"Zasoby",
        path:'/resources'
    }
]
export const subListWorkers:subListType[] = [
    {
        name:'Lista pracowników',
        path:'/list'
    },
    {
        name:'Urlopy',
        path:'/holidays'
    },
    {
        name:'Prośby',
        path:'/requests'
    },
]

export const menuList:menuListType[] = [
    {
        ico:TvIcon,
        name:'Pulpit',
        path:'/panel',
    },
    {
        ico:ConstructionIcon,
        name:'Zarządzanie',
        path:'/management',
        subList:subList
    },
    {
        ico:SignalCellularAltIcon,
        name:'Statystyki',
        path:'/statistics',
        subList:subList
    },
    {
        ico:PersonIcon,
        name:'Pracownicy',
        path:'/workers',
        subList:subListWorkers
    }

]
