import ConstructionIcon from '@mui/icons-material/Construction';
import { OverridableComponent } from "@mui/material/OverridableComponent";
import PersonIcon from '@mui/icons-material/Person';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import { SvgIconTypeMap } from "@mui/material";
import TvIcon from '@mui/icons-material/Tv';

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
    },
    {
        name:"Goście",
        path:'/guests'
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

export const isolationStatusList =[
    {
        name:'W trakcie',
        value:'inProgress'
    },
    {
        name:'Zakończone',
        value:'finished'
    },
    {
        name:'Anulowane',
        value:'canceled'
    },
    
]
