import {Box, Button, Checkbox, Container, Skeleton, TextField, Typography, useTheme} from "@mui/material";

import ImageComponent from "../components/imageComponent";
import back from "../img/home/back.png";
import cat1 from '../img/contact/cats/cat1.png'
import cat2 from '../img/contact/cats/cat2.png'
import cat3 from '../img/contact/cats/cat3.png'
import cat4 from '../img/contact/cats/cat4.png'
import cat5 from '../img/contact/cats/cat5.png'
import cat6 from '../img/contact/cats/cat6.png'
import cat7 from '../img/contact/cats/cat7.png'
import cat8 from '../img/contact/cats/cat8.png'
import dog1 from '../img/contact/dogs/dog1.png'
import dog2 from '../img/contact/dogs/dog2.png'
import dog3 from '../img/contact/dogs/dog3.png'
import dog4 from '../img/contact/dogs/dog4.png'
import dog5 from '../img/contact/dogs/dog5.png'
import dog6 from '../img/contact/dogs/dog6.png'
import dog7 from '../img/contact/dogs/dog7.png'
import dog8 from '../img/contact/dogs/dog8.png'
import postDog from '../img/contact/postdog.png'
import {useState} from "react";

const dogsImages = [
    dog1, dog2,dog3, dog4, dog5, dog6, dog7, dog8
]
const catsImages = [
    cat1, cat2, cat3, cat4, cat5, cat6,cat7, cat8
]

const Contact = () => {
    const theme = useTheme()
    const [mapLoad, setMapLoad] = useState(true)

    return(
        <Container
            sx={{
                backgroundImage:`url(${back})`,
                backgroundSize:'contain',
                px: { xs: 0, lg: 2 },
            }}
        >
            <Box
                display={'flex'}
                boxSizing={"border-box"}
                py={3}
                width={'100%'}
            >
                <Box
                    width={'100%'}
                    display={"flex"}
                    sx={{
                        flexDirection:{xs:'column', lg:'row'}
                    }}
                >
                    <Box
                        display={"flex"}
                        flexDirection={'column'}
                        sx={{
                            width:{xs:'100%', lg:'50%'}

                        }}
                    >
                        <Box
                            bgcolor={theme.palette.background.secondary}
                            p={3}
                        >
                            <Typography variant={"h6"} color={theme.palette.text.primary}>
                                Kontakt
                            </Typography>
                            <Typography variant={"body1"} color={theme.palette.text.primary}>
                                Nasze schronisko
                            </Typography>
                            <Box
                                display={"flex"}
                                justifyContent={"space-between"}
                                sx={{
                                    flexDirection:{xs:'column', lg:'row'}
                                }}
                            >
                                <Box
                                    display={"flex"}
                                    justifyContent={"start"}
                                    sx={{
                                        flexDirection:'column',
                                        gap:{xs:0, lg:0}
                                    }}
                                >
                                    <Typography variant={"body1"} color={theme.palette.text.primary}>
                                        Słoneczna 5a
                                    </Typography>
                                    <Typography variant={"body1"} color={theme.palette.text.primary}>
                                        10-693
                                    </Typography>
                                    <Typography variant={"body1"} color={theme.palette.text.primary}>
                                        Olsztyn
                                    </Typography>
                                </Box>
                                <Box>
                                    <Typography variant={"body1"} fontWeight={600} color={theme.palette.text.primary}>
                                        Biuro: 
                                    </Typography>
                                    <Typography variant={"body1"} color={theme.palette.text.primary}>
                                        123 456 789
                                    </Typography>
                                    <Typography variant={"body1"} fontWeight={600} color={theme.palette.text.primary}>
                                        Telefon interwencyjny 24h:
                                    </Typography>
                                    <Typography variant={"body1"} color={theme.palette.text.primary}>
                                        987 653 4321
                                    </Typography>
                                    <Typography variant={"body1"} fontWeight={600} color={theme.palette.text.primary}>
                                        Email
                                    </Typography>
                                    <Typography variant={"body1"} color={theme.palette.text.primary}>
                                        schronisko@gmail.com
                                    </Typography>
                                </Box>
                            </Box>

                        </Box>
                        <Box
                            sx={{
                                minWidth:'20rem',
                                height:'30rem',
                            }}
                        > 
                        <Skeleton 
                        variant="rectangular"
                        sx={{
                            height:'100%',
                            display:mapLoad ? 'block' : 'none'
                        }}
                        /> 
                         <iframe
                            title="Nasz adres"
                            width="100%"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2359.574497289696!2d20.453564677091013!3d53.74365274492137!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46e27f4da93ae01d%3A0xea956f263f7cf90!2sWydzia%C5%82%20Matematyki%20i%20Informatyki%20UWM%20w%20Olsztynie!5e0!3m2!1spl!2spl!4v1698774114901!5m2!1spl!2spl"
                            style={{ 
                                border: 0, 
                                display:mapLoad ? 'none' : 'block',
                                height:'100%',
                             }}
                            allowFullScreen
                            loading="lazy"
                            onLoad={() => setMapLoad(false)}
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                        </Box>
                    </Box>
                    <Box
                        display={"flex"}
                        flexDirection={"column"}
                        alignItems={"center"}
                        boxSizing={"border-box"}
                        p={3}
                        sx={{
                            backgroundColor:theme.palette.background.light,
                            width:{xs:'100%', lg:'50%'}
                        }}
                        gap={3}
                        color={theme.palette.text.secondary}
                    >
                        <Typography variant={'h6'} >
                            Wolontariat
                        </Typography>
                        <Typography variant={'body1'} >
                            Wolontariat w Miejskim Schronisku dla Bezdomnych Zwierząt w Olsztynie zaczął działać w październiku 2009 roku. Obecnie jest prowadzony przez Fundację Schronisko, która powstała by objąć opieką zwierzęta przebywające w schronisku w Olsztynie. Nierzadko są to zwierzęta wyrzucone przez swoich właścicieli, niechciane i niekochane, najczęściej psy i koty, jednak Fundacja niesie pomoc wszystkim zwierzakom, które trafiają do schroniska.
                        </Typography>
                        <Typography variant={'body1'} >
                            Wolontariusze mogą się zajmować zwierzętami zarówno na terenie schroniska, jak i poza nim. Podczas swoich wizyt w naszych schronisku zajmują się socjalizacją zwierząt, nauką nowych komend oraz poprawnego zachowania. Oprócz tego oczywiście biorą czynny udział w poszukiwaniu nowych domów dla naszych podopiecznych, a także w zbieraniu informacji o zwierzęciu, dzięki czemu możemy dobrze poznać każdego zwierzaka. Dodatkowo wolontariusze uczestniczą w akcjach organizowanych przez Fundację oraz szkoleniach uczących ich opieki nad zwierzętami i tresury. Poza schroniskiem wolontariusze również robią wiele dobrego prowadząc działania zwiększające szanse na adopcję.
                        </Typography>
                        <Box
                            display={"flex"}
                            flexDirection={"column"}
                            alignItems={"center"}
                        >
                            <Typography variant={'subtitle1'}>
                                Kontakt w sprawie wolontariatu:
                            </Typography>
                            <Typography variant={'body1'} >
                                Psy - Paweł 213 456 789
                            </Typography>
                            <Typography variant={'body1'} >
                                Koty - Kasia 902 123 456
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Box
                display={'flex'}
                boxSizing={"border-box"}
                py={3}
                width={'100%'}
                justifyContent={"space-evenly"}
                flexWrap={'wrap'}
            >
                {dogsImages.map((dog, index) => {
                    return(
                        <ImageComponent
                            key={index}
                            src={dog}
                            alt="Zdjęcie psa"
                            sx={{
                                display:{xs:index<2 ?'flex' : 'none', sm:index<3 ?'flex' : 'none',  md:index<4 ?'flex' : 'none', lg:'block'},
                                width:'8rem',
                                height:'8rem',
                            }}
                        />
                    )
                })}

            </Box>

            <Box
                display={'flex'}
                boxSizing={"border-box"}
                py={3}
                width={'100%'}
            >
                <Box
                    display={"flex"}
                    width={'100%'}
                    borderRadius={'200px'}
                    sx={{
                        flexDirection:{xs:'column', lg:'row'}
                    }}
                >
                    <ImageComponent
                            src={postDog}
                            alt="Zdjęcie psa"
                            sx={{
                                width:{xs:'100%', lg:'60%'},
                                height:{xs:'20rem', lg:'100%'},
                            }}
                        />
                    <Box
                        display={"flex"}
                        flexDirection={"column"}
                        bgcolor={theme.palette.background.secondary}
                        sx={{
                            height:{xs:'fit-content', lg:'100%'},
                            width:{xs:'100%', lg:'40%'}
                        }}
                        boxSizing={"border-box"}
                        p={3}
                        gap={1}
                    >
                        <Typography variant={'h5'} color={theme.palette.text.primary}>
                            Napisz do nas
                        </Typography>
                        <Box
                            width={'100%'}
                            display={"flex"}
                            flexDirection={"column"}
                            gap={3}
                        >
                            <TextField
                                fullWidth
                                color={"secondary"}
                                label={'Imię'}
                                focused
                            />
                            <TextField
                                fullWidth
                                color={"secondary"}
                                label={'Email'}
                                focused
                            />
                            <TextField
                            fullWidth
                            color={"secondary"}
                            label={'Numer telefonu'}
                            focused
                            />
                            <TextField
                                fullWidth
                                color={"secondary"}
                                label={'Wiadomość'}
                                multiline
                                minRows={4}
                                focused
                            />
                        </Box>
                        <Box
                            display={"flex"}
                            alignItems={"center"}
                        >
                            <Checkbox required/>
                            <Typography variant={"caption"} color={theme.palette.primary.main}>
                                Akceptuję warunki przetwarzania moich danych osobowych
                            </Typography>
                        </Box>
                        <Button variant={"contained"} fullWidth>Wyślij</Button>

                    </Box>

                </Box>

            </Box>
            <Box
                display={'flex'}
                boxSizing={"border-box"}
                py={3}
                width={'100%'}
                justifyContent={"space-evenly"}
                flexWrap={'wrap'}
            >
                {catsImages.map((cat, index) => {
                    return(
                        <ImageComponent
                            key={index}
                            src={cat}
                            alt="Zdjęcie kota"
                            sx={{
                                display:{xs:index<2 ?'flex' : 'none', sm:index<3 ?'flex' : 'none',  md:index<4 ?'flex' : 'none', lg:'block'},
                                width:'8rem',
                                height:'8rem',
                            }}
                        />
                    )
                })}

            </Box>
        </Container>
    )
}

export  default Contact