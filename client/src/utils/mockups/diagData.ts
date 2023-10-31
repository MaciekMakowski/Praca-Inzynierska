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

export const VisitorsData = {
  labels: ["Styczeń", "Luty", "Marzec", "Kwiecień", "Maj", "Czerwiec","Lipiec","Sierpień","Wrzesień", "Paździenik", "Listopad", "Grudzień"],
  datasets: [
    {
      label: "Odwiedziny wolontariuszy w schronisku",
      data: [33, 53, 85, 41, 44, 65, 33, 53, 85, 41, 44, 65],
      fill: true,
      backgroundColor: "rgba(75,192,192,0.2)",
      borderColor: "rgba(75,192,192,1)"
    },
    {
      label: "Odwiedziny gości w schronisku",
      data: [109, 80, 55, 223, 45, 142, 109, 80, 55, 223, 45, 142],
      fill: false,
      borderColor: "#742774"
    }
  ]
};


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