import {Container, Box, Typography, useTheme} from "@mui/material";
import back from "../img/home/back.png";
import mapImg from '../img/contact/map.png'

const Contact = () => {
    const theme = useTheme()

    return(
        <Container
            sx={{
                backgroundImage:`url(${back})`,
                backgroundSize:'contain'
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
                                        flexDirection:{xs:'row', lg:'column'},
                                        gap:{xs:3, lg:0}
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
                                    <Typography variant={"body1"} color={theme.palette.text.primary}>
                                        Biuro: 123 456 789
                                    </Typography>
                                    <Typography variant={"body1"} color={theme.palette.text.primary}>
                                        Telefon interwencyjny 24h: 987 653 4321
                                    </Typography>
                                    <Typography variant={"body1"} color={theme.palette.text.primary}>
                                        schronisko@gmail.com
                                    </Typography>
                                </Box>
                            </Box>

                        </Box>
                        <Box
                            sx={{
                                backgroundImage:`url(${mapImg})`,
                                backgroundSize:'cover',
                                backgroundPosition:'center',
                                minWidth:'20rem',
                                minHeight:'30rem',

                            }}
                        />
                    </Box>
                    <Box
                        display={"flex"}
                        flexDirection={"column"}
                        alignItems={"center"}
                        boxSizing={"border-box"}
                        p={3}
                        sx={{
                            backgroundColor:theme.palette.primary.main,
                            width:{xs:'100%', lg:'50%'}
                        }}
                        gap={3}
                    >
                        <Typography variant={'h6'} color={theme.palette.text.secondary}>
                            Wolontariat
                        </Typography>
                        <Typography variant={'body1'} color={theme.palette.text.secondary}>
                            Wolontariat w Miejskim Schronisku dla Bezdomnych Zwierząt w Olsztynie zaczął działać w październiku 2009 roku. Obecnie jest prowadzony przez Fundację Schronisko, która powstała by objąć opieką zwierzęta przebywające w schronisku w Olsztynie. Nierzadko są to zwierzęta wyrzucone przez swoich właścicieli, niechciane i niekochane, najczęściej psy i koty, jednak Fundacja niesie pomoc wszystkim zwierzakom, które trafiają do schroniska.
                        </Typography>
                        <Typography variant={'body1'} color={theme.palette.text.secondary}>
                            Wolontariusze mogą się zajmować zwierzętami zarówno na terenie schroniska, jak i poza nim. Podczas swoich wizyt w naszych schronisku zajmują się socjalizacją zwierząt, nauką nowych komend oraz poprawnego zachowania. Oprócz tego oczywiście biorą czynny udział w poszukiwaniu nowych domów dla naszych podopiecznych, a także w zbieraniu informacji o zwierzęciu, dzięki czemu możemy dobrze poznać każdego zwierzaka. Dodatkowo wolontariusze uczestniczą w akcjach organizowanych przez Fundację oraz szkoleniach uczących ich opieki nad zwierzętami i tresury. Poza schroniskiem wolontariusze również robią wiele dobrego prowadząc działania zwiększające szanse na adopcję.
                        </Typography>
                        <Box
                            display={"flex"}
                            flexDirection={"column"}
                            alignItems={"center"}
                        >
                            <Typography variant={'subtitle1'} color={theme.palette.text.secondary}>
                                Kontakt w sprawie wolontariatu:
                            </Typography>
                            <Typography variant={'body1'} color={theme.palette.text.secondary}>
                                Psy - Paweł 213 456 789
                            </Typography>
                            <Typography variant={'body1'} color={theme.palette.text.secondary}>
                                Koty - Kasia 902 123 456
                            </Typography>
                        </Box>


                    </Box>
                </Box>

            </Box>
        </Container>
    )
}

export  default Contact