import {Box, Container, Typography, useTheme} from "@mui/material";
import back from '../img/home/back.png'
import dogMain from '../img/home/dog.png'
import dogMainLong from '../img/home/dogLong.png'
import sup1 from '../img/home/sup1.png'
import sup2 from '../img/home/sup2.png'
import sup3 from '../img/home/sup3.png'
import sup4 from '../img/home/sup4.png'
import sup5 from '../img/home/sup5.png'
import hands from '../img/home/hands.png'
import dogAbout1 from '../img/home/dogAbout1.png'
import dogAbout2 from '../img/home/dogAbout2.png'

const Home = () => {
    const theme = useTheme()

    const supporters = [sup1,sup2,sup3,sup4,sup5]


    return(
        <Container
            sx={{
                backgroundImage:`url(${back})`,
                backgroundSize:'cover'
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
                        display={"flex"}
                        sx={{
                            backgroundImage:{xs:`url(${dogMainLong})`, lg:`url(${dogMain})`},
                            backgroundSize:'cover',
                            backgroundPosition:'center',
                            height:{xs:'20rem', lg:'25rem'},
                            width:{xs:'100%', lg:'30rem'}
                        }}
                    />
                <Box
                    display={"flex"}
                    flexDirection={"column"}
                    alignItems={"center"}
                    sx={{
                        height:{xs:'fit-content', lg:'25rem'},
                        width:{xs:'100%', lg:'60%'}
                    }}
                    p={3}
                    boxSizing={"border-box"}
                    height={'25rem'}
                    width={'60%'}
                    bgcolor={'#fff'}
                    gap={3}
                >
                    <Typography textAlign={"center"} width={'60%'} variant="h3" color={theme.palette.text.primary}>
                        Schronisko dla zwierząt w Olsztynie
                    </Typography>
                    <Typography textAlign={"center"} variant={'h5'} color={theme.palette.text.primary}>
                        Nas i nasze zwierzęta wspierają marki
                    </Typography>
                    <Box
                        display={"flex"}
                        justifyContent={"space-evenly"}
                    >
                        {supporters.map(supp => {
                            return(
                                <Box
                                    width={'5rem'}
                                    height={'5rem'}
                                    sx={{
                                        backgroundImage:`url(${supp})`,
                                        backgroundSize:'contain',
                                        backgroundRepeat:'no-repeat'
                                    }}
                                />
                            )
                        })}

                    </Box>


                </Box>
            </Box>
            <Box
                bgcolor={'#003C18'}
                display={"flex"}
                alignItems={"end"}
            >
                <Box
                    p={3}
                    flexGrow={1}
                    height={'100%'}
                    display={"flex"}
                    flexDirection={"column"}
                    justifyContent={"end"}
                >
                    <Box
                        display={"flex"}
                        sx={{
                            flexDirection:{xs:'column', lg:'row'},
                            justifyContent:{xs:'start', lg:'space-between'}
                        }}
                    >
                        <Typography variant={'h6'} color={theme.palette.text.secondary}>
                            Przekaż 1 % aby pomóc zwierzętom
                        </Typography>
                        <Typography variant={'h6'} color={theme.palette.text.secondary}>
                            KRS: 0000000000
                        </Typography>
                    </Box>
                    <Typography variant={"body1"} color={theme.palette.text.secondary}>
                        Zachęcamy i prosimy o przekazywanie 1% podatku na Stowarzyszenie Zwierzyniec Św. Franciszka
                    </Typography>

                </Box>
                <Box
                    width={'7rem'}
                    height={'7rem'}
                    sx={{
                        backgroundImage:`url(${hands})`,
                        backgroundSize:'contain',
                        backgroundRepeat:'no-repeat',
                        width:{xs:'20rem',md:'10rem',lg:'7rem'},
                        height:{xs:'12rem',md:'10rem',lg:'7rem'},
                    }}
                />
            </Box>
            <Box
                display={"flex"}
                py={5}
                sx={{
                    flexDirection:{xs:'column', lg:'row'}
                }}
            >
                <Box
                    display={"flex"}
                    boxSizing={"border-box"}
                    sx={{
                        bgcolor:theme.palette.background.secondary,
                        width:{xs:'100%', lg:'50%'},
                        height:{xs:'fit-content', lg:'30rem'},
                        justifyContent:'space-evenly',
                        flexDirection:'column',
                        alignItems:'center',
                        p:3
                    }}
                >
                    <Typography textAlign={"center"} variant={"h5"} color={theme.palette.text.primary}>
                        Kim jesteśmy i czym się zajmujemy?
                    </Typography>
                    <Typography textAlign={"center"} variant={"h6"} color={theme.palette.text.primary}>
                        Jesteśmy placówką zajmującą się porzuconymi zwierzętami. W naszych progach możesz poznać wielu przyjaciół, tych bardziej futrzatych jak i tych mniej. Bardzo zależy nam na dobru zwierząt i ich przyszłości, dlatego robimy wszystko co w naszej mocy by im pomóc.
                        Mimo to schronisko jest jedynie miejscem tymczasowym i liczymy że naszym pupilom
                        uda się znaleźc nowy dom.
                    </Typography>

                </Box>
                <Box
                    display={"flex"}
                    sx={{
                        width:{xs:'100%', lg:'50%'},
                        height:{xs:'14rem', sm:'24rem', lg:'30rem'},
                        flexDirection:{xs:'column', md:'row', lg:'column'}
                    }}
                >
                    <Box
                        sx={{
                            backgroundImage:`url(${dogAbout1})`,
                            backgroundSize:'cover',
                            backgroundRepeat:'no-repeat',
                            backgroundPosition:'center',
                            width:{xs:'100%', lg:'100%'},
                            height:{xs:'100%', lg:'50%'}
                        }}
                    />
                    <Box
                        sx={{
                            backgroundImage:`url(${dogAbout2})`,
                            backgroundSize:'cover',
                            backgroundRepeat:'no-repeat',
                            backgroundPosition:'center',
                            width:'100%',
                            height:{xs:'none', lg:'50%'}
                        }}
                    />


                </Box>

            </Box>
        </Container>
    )
}

export default Home