import { AnimalType, ChartDataType, DiseaseType, PetDiseaseType } from "../types/basicTypes";

export const PetData:ChartDataType = {
  labels: ['Psy', 'Koty'],
  datasets: [
    {
      label: 'Zwierzęta',
      data: [30, 40],
      backgroundColor: ['#FF6384', '#36A2EB'],
    },
  ]
}

export const FoodData = {
  labels: ['Sucha karma dla psa', 'Mokra karma dla psa', "Sucha karma dla kota", "Mokra karma dla kota"],
  datasets: [
    {
      label: 'Rodzaje karmy',
      data: [421, 52,245,67],
    },
  ]
}

export const VetData = {
  labels: ['Izolacje', 'Choroby'],
  datasets: [
    {
      label: 'Izolacje i choroby',
      data: [6, 14],
      backgroundColor: ['#FF6384', '#36A2EB'],
    },
  ]
}

export const CalendarData = [
  {
    "value": 7,
    "day": "2023-05-03"
  },
  {
    "value": 15,
    "day": "2023-05-04"
  },
  {
    "value": 4,
    "day": "2023-05-05"
  },
  {
    "value": 18,
    "day": "2023-05-06"
  },
  {
    "value": 10,
    "day": "2023-05-07"
  },
  {
    "value": 12,
    "day": "2023-05-08"
  },
  {
    "value": 5,
    "day": "2023-05-09"
  },
  {
    "value": 9,
    "day": "2023-05-10"
  },
  {
    "value": 13,
    "day": "2023-05-11"
  },
  {
    "value": 2,
    "day": "2023-05-12"
  },
  {
    "value": 14,
    "day": "2023-05-13"
  },
  {
    "value": 8,
    "day": "2023-05-14"
  },
  {
    "value": 11,
    "day": "2023-05-15"
  },
  {
    "value": 16,
    "day": "2023-05-16"
  },
  {
    "value": 19,
    "day": "2023-05-17"
  },
  {
    "value": 20,
    "day": "2023-05-18"
  },
  {
    "value": 5,
    "day": "2023-05-19"
  },
  {
    "value": 17,
    "day": "2023-05-20"
  },
  {
    "value": 8,
    "day": "2023-05-21"
  },
  {
    "value": 3,
    "day": "2023-05-22"
  },
  {
    "value": 16,
    "day": "2023-05-23"
  },
  {
    "value": 9,
    "day": "2023-05-24"
  },
  {
    "value": 6,
    "day": "2023-05-25"
  },
  {
    "value": 18,
    "day": "2023-05-26"
  },
  {
    "value": 1,
    "day": "2023-05-27"
  },
  {
    "value": 13,
    "day": "2023-05-28"
  },
  {
    "value": 7,
    "day": "2023-05-29"
  },
  {
    "value": 20,
    "day": "2023-05-30"
  },
  {
    "value": 12,
    "day": "2023-05-31"
  },
  {
    "value": 4,
    "day": "2023-06-01"
  },
  {
    "value": 11,
    "day": "2023-06-02"
  },
  {
    "value": 18,
    "day": "2023-06-03"
  }
];


export const puszekData:AnimalType={
  number:23,
  name:'Puszek',
  findPlace:'Las Bartąg',
  race:'Kundel',
  weight:3.5,
  sex:'Samiec',
  species:'Pies',
  birthDate:'2019-05-03',
  desc:'Puszek to uroczy mały kundelek o kręconym futerku. Jego futerko ma piękny, brązowy kolor, który sprawia, że wygląda jak mały misiek. Puszek uwielbia bawić się piłką i skakać wesoło po podwórku. Jest niezwykle przyjacielski i zawsze gotów na zabawę z dziećmi. W nocy Puszek chętnie kładzie się na poduszce obok swojego właściciela, trzymając go w ciepłym towarzystwie. To mały, kochany psiak, który wnosi mnóstwo radości do życia swoich opiekunów. Puszek to także bardzo bystry piesek, który szybko uczy się nowych sztuczek i rozumie polecenia swoich właścicieli. Jego okrągłe, czekoladowe oczy potrafią rozczulić każdego, kto spojrzy mu w twarz. To mały kundelek o ogromnym sercu, gotów do oddania miłości i wierności każdego dnia.',
  isIll:false,
  isIsolated:false,
  status:'Do adopcji'
}

export const diseasesData:DiseaseType[] = [
  {
    number:1,
    name:'Wścieklizna',
    description:'jakis opis',
    treatment:'jakis opis'
  },
  {
    number:2,
    name:'Angina',
    description:'jakis opis',
    treatment:'jakis opis'
  },
  {
    number:3,
    name:'Zapalenie ucha',
    description:'jakis opis',
    treatment:'jakis opis'
  },
  {
    number:4,
    name:'Zapalenie płuc',
    description:'jakis opis',
    treatment:'jakis opis'
  }
]

export const testDiseaseData:PetDiseaseType={
  diseaseId:1,
  petId:23,
  startDate:'2021-05-03',
  endDate:'2021-05-10'
}