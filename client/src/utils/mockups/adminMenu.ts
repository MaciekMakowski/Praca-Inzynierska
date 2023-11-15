import {
  AnimalType,
  DiseaseType,
  IsolationType,
  PetDiseaseType,
} from "../types/basicTypes";

import ConstructionIcon from "@mui/icons-material/Construction";
import PersonIcon from "@mui/icons-material/Person";
import { ResourceType } from "../types/basicTypes";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import TvIcon from "@mui/icons-material/Tv";
import { menuListType } from "../types/basicTypes";
import { subListType } from "../types/basicTypes";

export const subList: subListType[] = [
  {
    name: "Zwierzęta",
    path: "/animals",
  },
  {
    name: "Choroby",
    path: "/diseases",
  },
  {
    name: "Izolacje",
    path: "/isolations",
  },
  {
    name: "Wolontariusze",
    path: "/volunteers",
  },
  {
    name: "Adpotcje",
    path: "/adoptions",
  },
  {
    name: "Zasoby",
    path: "/resources",
  },
  {
    name: "Goście",
    path: "/guests",
  },
  {
    name: "Spotkania",
    path: "/meetings",
  },
];
export const subListWorkers: subListType[] = [
  {
    name: "Lista pracowników",
    path: "/list",
  },
  {
    name: "Urlopy",
    path: "/holidays",
  },
  {
    name: "Prośby",
    path: "/requests",
  },
];

export const menuList: menuListType[] = [
  {
    ico: TvIcon,
    name: "Pulpit",
    path: "/panel",
  },
  {
    ico: ConstructionIcon,
    name: "Zarządzanie",
    path: "/management",
    subList: subList,
  },
  {
    ico: SignalCellularAltIcon,
    name: "Statystyki",
    path: "/statistics",
    subList: subList,
  },
  {
    ico: PersonIcon,
    name: "Pracownicy",
    path: "/workers",
    subList: subListWorkers,
  },
];

export const isolationStatusList = [
  {
    name: "W trakcie",
    value: "inProgress",
  },
  {
    name: "Zakończona",
    value: "finished",
  },
  {
    name: "Anulowana",
    value: "canceled",
  },
  {
    name: "Oczekująca",
    value: "waiting",
  }
];

export const resourceDetailsData: ResourceType = {
  id: 1,
  name: "Whiskas",
  quantity: 10,
  subtype: "Karma sucha dla kota",
  type: "Jedzenie",
  unit: "Kilogramy",
  expirationDate: "2021-10-10",
};

export const puszekData: AnimalType = {
  id: 23,
  attributes: {
    name: "Puszek",
    findPlace: "Las Bartąg",
    race: "Kundel",
    weight: 3.5,
    sex: "Samiec",
    species: "Pies",
    birthDate: "2019-05-02",
    description:
      "Puszek to uroczy mały kundelek o kręconym futerku. Jego futerko ma piękny, brązowy kolor, który sprawia, że wygląda jak mały misiek. Puszek uwielbia bawić się piłką i skakać wesoło po podwórku. Jest niezwykle przyjacielski i zawsze gotów na zabawę z dziećmi. W nocy Puszek chętnie kładzie się na poduszce obok swojego właściciela, trzymając go w ciepłym towarzystwie. To mały, kochany psiak, który wnosi mnóstwo radości do życia swoich opiekunów. Puszek to także bardzo bystry piesek, który szybko uczy się nowych sztuczek i rozumie polecenia swoich właścicieli. Jego okrągłe, czekoladowe oczy potrafią rozczulić każdego, kto spojrzy mu w twarz. To mały kundelek o ogromnym sercu, gotów do oddania miłości i wierności każdego dnia.",
    isIll: false,
    isIsolated: false,
    toAdoption: false,
    adopted: false,
  },
};

export const diseasesData: DiseaseType[] = [
  {
    id: 1,
    attributes: {
      name: "Wścieklizna",
      description: "jakis opis",
      treatment: "jakis opis",
    },
  },
  {
    id: 2,
    attributes: {
      name: "Wścieklizna",
      description: "jakis opis",
      treatment: "jakis opis",
    },
  },
  {
    id: 3,
    attributes: {
      name: "Wścieklizna",
      description: "jakis opis",
      treatment: "jakis opis",
    },
  },
  {
    id: 4,
    attributes: {
      name: "Wścieklizna",
      description: "jakis opis",
      treatment: "jakis opis",
    },
  },
];

export const testDiseaseData: PetDiseaseType = {
  diseaseId: 1,
  petId: 23,
  startDate: "2021-10-10",
  endDate: "2021-10-10",
  symptoms: "jakis opis",
  status: "W trakcie",
};

export const diseaseDataDetails: DiseaseType = {
  id: 1,
  attributes: {
    name: "Wścieklizna",
    description: "jakis opis",
    treatment: "jakis opis",
  },
};

export const isolationDataDetails: IsolationType = {
  id: 1,
  attributes:{
    reason: "jakis opis",
    startDate: "2021-10-10",
    endDate: "2021-10-10",
    status: "W trakcie",
    animal: puszekData,
  }

};

export const GuestData = {
  name: "Jan",
  lastName: "Kowalski",
  phoneNumber: "123456789",
  email: "asdasd@wp.pl",
  birthDate: "2021-10-10",
  address: "Nowakowska 43b/2",
  city: "Olsztyn",
  postCode: "10-123",
  pesel: "12345678901",
  sex: "Mężczyzna",
};
