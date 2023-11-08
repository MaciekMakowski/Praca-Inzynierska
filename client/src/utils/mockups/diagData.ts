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

