import {Container, Box, useTheme, Typography} from "@mui/material";
import back from "../img/home/back.png";
import dog1 from '../img/adoption/dog1.png'
import dog2 from '../img/adoption/dog2.png'
import dog3 from '../img/adoption/dog3.png'
import dog4 from '../img/adoption/dog4.png'
import info1 from '../img/adoption/info1.png'
import info2 from '../img/adoption/info2.png'
import info3 from '../img/adoption/info3.png'
import info4 from '../img/adoption/info4.png'
import ico1 from '../img/adoption/ico1.png'
import ico2 from '../img/adoption/ico2.png'
import ico3 from '../img/adoption/ico3.png'
import ico4 from '../img/adoption/ico4.png'
import ico5 from '../img/adoption/ico5.png'
import ico6 from '../img/adoption/ico6.png'
import AdoptionInfo from "./adoptionInfo";


const adoptionInfos = [
    {
        title:"Czy masz odpowiednie warunki?",
        text:"Zgodnie z ustawą o ochronie zwierząt, obowiązkiem każdego właściciela jest zapewnienie mu odpowiednich warunków. Pomieszczenia powinny być odpowiednio dostosowane, chronić przed zimnem, upałem, opadami atmosferycznymi. Każde zwierzę musi mieć zapewniony dostęp do pożywnej karmy, wody, a także spokojne miejsce do odpoczynku.",
        img:info1,
        side:'right'
    },
    {
        title:"Czy stać cię na utrzymanie zwierzaka?",
        text:"Jeśli zastanawiasz się nad adopcją to znaczy, że masz wielkie serce, jednak samo wielkie serce nie wystarczy. Zwierzę to też koszty- podstawowe jak karma, szczepienia, legowiska, smycze, transporterki i te nieplanowane, często dużo większe związane np. z leczeniem.",
        img:info2,
        side:'left'
    },
    {
        title:"Czy masz dość czasu i cierpliwości?",
        text:"Decydując się na adopcję psa lub kota decydujesz się na przejęcie 100% odpowiedzialności za życie tego zwierzaka, dlatego bardzo ważne abyś przemyślał, czy będziesz miał odpowiednią ilość czasu dla nowego członka rodziny. Psy i koty to zwierzęta społeczne, oczekują od człowieka akceptacji i zainteresowania. W przypadku psów dochodzą również obowiązki związane z wyprowadzaniem ich na spacery przynajmniej trzy razy dziennie, a także z ich wychowaniem.",
        img:info3,
        side:'right'
    },
    {
        title:"Czy decyzja o posiadaniu zwierzaka jest twoja?",
        text:"Warto przemyśleć czy twoja decyzja wynika z miłości do zwierząt, czy nie spowodowana jest chwilową fascynacją lub modą. Zwierzęta to nie zabawki, które można brać i oddawać, gdy nagle nas przerośnie opieka nad nimi. Oddanie zwierzęcia z powrotem do schroniska to największa trauma jaka może spotkać zwierzę.",
        img:info4,
        side:'left'
    },
]

const dogList = [
    dog1,
    dog2,
    dog3,
    dog4
]

type adoptParagraphsType = {
        ico:string,
        text:string,
        list?:string[]
}[]

const adoptParahraps: adoptParagraphsType = [
    {
        ico:ico1,
        text:"Poznaj nasze zwierzęta w zakładce “Nasze zwierzęta” lub odwiedzając nasze schronisko."
    },
    {
        ico:ico2,
        text:"Umów się z wolontariuszem na poznanie zwierzaka."
    },
    {
        ico:ico3,
        text:"Przygotuj się na zabranie zwierzęcia ze schroniska (musisz posiadać obroże, smycz, kaganiec lub transporter)."
    },
    {
        ico:ico4,
        text:"Przygotuj dokumenty - zwierzęta wydajemy na podstawie ważnego dowodu osobistego."
    },
    {
        ico:ico5,
        text:"Przygotuj się finansowo - zwierzęta wydajemy odpłatnie:",
        list:[
            "Psy małe i szczeniaki 50,00 zł",
            "Psy średnie i duże 60,00 zł",
            "Wszystkie psy w typie rasy (bez względu na wiek i wielkość) 75,00 zł",
            "Koty i kocięta 40,00 zł",
        ]
    },
    {
        ico:ico6,
        text:"Pokochaj swojego nowego członka rodziny."
    },
]


const Adoption = () => {

    const theme= useTheme()

    return(
        <Container
            sx={{
                backgroundImage:`url(${back})`,
                backgroundSize:'contain'
            }}
        >
            <Box
                py={5}
                display={'flex'}
                sx={{
                    flexDirection:{xs:'column', lg:'row'}
                }}
            >
                <Box
                    width={'100%'}
                    display={'flex'}
                    justifyContent={"space-evenly"}
                >
                    {dogList.map((dog, index) => {
                        return(
                            <Box
                                key={index}
                                sx={{
                                    backgroundImage:`url(${dog})`,
                                    backgroundSize:'cover',
                                    width:'16rem',
                                    height:'10rem'
                                }}
                            />
                        )
                    })}
                </Box>
            </Box>
            <Box
                py={5}
                display={"flex"}
                flexDirection={"column"}
                alignItems={"center"}
                gap={5}
            >
                <Box
                    display={"flex"}
                    flexDirection={"column"}
                >
                    <Box
                        bgcolor={theme.palette.primary.main}
                        py={2}
                        sx={{
                            borderRadius:'10px 10px 0px 0px'
                        }}
                    >
                        <Typography textAlign={"center"} variant={"h6"} color={theme.palette.text.secondary}>
                            Wszystko co musisz wiedzieć o adopcji psa i kota ze schroniska
                        </Typography>

                    </Box>
                    <Box
                        bgcolor={theme.palette.background.light}
                        py={2}
                        px={4}
                    >
                        <Typography textAlign={"center"} variant={"subtitle1"} fontWeight={"bold"} color={theme.palette.text.secondary}>
                            Jeśli zastanawiasz się nad adopcją...
                        </Typography>
                        <Typography textAlign={"center"} variant={"body1"} color={theme.palette.text.secondary}>
                            Żadna najcenniejsza rzecz ani przedmiot nie wzbogaca naszego życia tak jak obecność zwierzaka. Jest lekarstwem na nasze smutki i samotność, obdarza nas przyjaźnią bezinteresowną, czystą i wielką. Taka przyjaźń to niezwykle rzadki i cenny dar. Towarzystwo czworonożnego przyjaciela może wzbogacić nasze życie, złagodzić i ogrzać atmosferę w domu. Jednak jest to jednocześnie ogromny obowiązek, więc zanim zdecydujesz się przyjąć do swego domu zwierzę odpowiedz sobie na pytania:
                        </Typography>
                    </Box>
                </Box>

                <Box
                    display={"flex"}
                    flexDirection={"column"}
                    gap={5}
                    width={'80%'}
                >
                    {adoptionInfos.map((info, index)=> {
                        return(
                            <AdoptionInfo
                                key={index}
                                title={info.title}
                                text={info.text}
                                img={info.img}
                                side={info.side}
                            />
                        )
                    })}
                    <Box
                        width={'100%'}
                        display={"flex"}
                        flexDirection={'column'}
                        gap={3}
                        bgcolor={theme.palette.background.light}
                        boxSizing={"border-box"}
                        p={3}
                    >
                        <Typography textAlign={"center"} variant={"subtitle1"} color={theme.palette.text.secondary} fontWeight={"bold"}>
                            Jeśli już zdecydowałeś się na adopcję...
                        </Typography>
                        {adoptParahraps.map((para, index) => {
                            return(
                                <Box
                                >
                                    <Box
                                        display={'flex'}
                                        gap={2}
                                    >
                                    <Box
                                        width={'24px'}
                                        height={'24px'}
                                        sx={{
                                            backgroundImage:`url(${para.ico})`
                                        }}
                                    />
                                        <Typography variant={'body1'} color={theme.palette.text.secondary}>
                                            {para.text}
                                        </Typography>
                                    </Box>
                                    {para.list && (
                                        <ul>
                                            {para.list.map((text, index) => {
                                                return(
                                                    <li style={{
                                                            marginLeft:'16px',
                                                            color:theme.palette.text.secondary
                                                        }}>
                                                        <Typography key={index} variant={'body1'} color={theme.palette.text.secondary}>
                                                            {text}
                                                        </Typography>
                                                    </li>
                                                )
                                            })}
                                        </ul>
                                    )}
                                </Box>
                            )
                        })}

                    </Box>
                </Box>
            </Box>
        </Container>
    )
}

export default Adoption