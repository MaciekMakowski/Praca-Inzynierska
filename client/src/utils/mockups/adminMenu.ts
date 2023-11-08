import ConstructionIcon from '@mui/icons-material/Construction';
import PersonIcon from '@mui/icons-material/Person';
import { ResourceType } from '../types/basicTypes';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import TvIcon from '@mui/icons-material/Tv';
import { menuListType } from '../types/basicTypes';
import { subListType } from '../types/basicTypes';

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


export const resourceDetailsData:ResourceType ={
    id:1,
    name:"Whiskas",
    quantity:10,
    subtype:"Karma sucha dla kota",
    type:"Jedzenie",
    unit:"Kilogramy",
    expirationDate:"2021-10-10"
}