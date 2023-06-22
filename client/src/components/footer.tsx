import {Box, Typography, useTheme} from "@mui/material";
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import PinDropIcon from '@mui/icons-material/PinDrop';
import fbLogo from '../img/footer/fb.png'
import instaLogo from '../img/footer/insta.png'
import tiktokLogo from '../img/footer/tiktok.png'
import ytLogo from '../img/footer/yt.png'

import * as React from "react";
const Footer = () => {
    const theme = useTheme()

    return(
        <Box
            width={'100%'}
            display={"flex"}
            bgcolor={'#003C18'}
            sx={{
                flexDirection:{xs:'column', lg:'row'},
                gap:{xs:3, lg:0}
        }}
            p={3}
            boxSizing={"border-box"}
        >
                <Box
                    display={"flex"}
                    flexDirection={'column'}
                    sx={{
                        width:{xs:'100%', lg:'33%'},
                        alignItems:{xs:'center', lg:'normal'},
                        justifyContent:{xs:"center"}
                    }}

                    gap={3}
                    width={'33%'}
                >
                    <Typography variant={"h6"} color={theme.palette.text.secondary}>
                        Kontakt
                    </Typography>
                    <Box>
                        <Box
                            display={"flex"}
                            alignItems={"center"}
                            gap={1}
                        >
                            <PhoneIcon sx={{color:theme.palette.text.secondary}}/>
                            <Typography variant={"body1"} color={theme.palette.text.secondary}>
                                +48 123 456 789
                            </Typography>
                        </Box>
                        <Box
                            display={"flex"}
                            alignItems={"center"}
                            gap={1}
                        >
                            <EmailIcon sx={{color:theme.palette.text.secondary}}/>
                            <Typography variant={"body1"} color={theme.palette.text.secondary}>
                                schronisko@email.com
                            </Typography>
                        </Box>
                        <Box
                            display={"flex"}
                            alignItems={"center"}
                            gap={1}
                        >
                            <PinDropIcon sx={{color:theme.palette.text.secondary}}/>
                            <Typography variant={"body1"} color={theme.palette.text.secondary}>
                                ul. Słoneczna 5a, Olsztyn
                            </Typography>
                        </Box>
                    </Box>
                </Box>
                <Box
                    display={"flex"}
                    flexDirection={"column"}
                    gap={3}
                    sx={{
                        width:{xs:'100%', lg:'33%'},
                        alignItems:{xs:'center', lg:'center'},
                        justifyContent:{xs:"center"}
                    }}
                >
                    <Typography variant={"h6"} color={theme.palette.text.secondary}>
                       Godziny otwarcia:
                    </Typography>
                    <Box
                        display={"flex"}
                        alignItems={"center"}
                        flexDirection={"column"}
                        gap={1}
                    >
                        <Typography variant={"body1"} color={theme.palette.text.secondary}>
                           Poniedziałek: 8:00 - 18:00
                        </Typography>
                        <Typography variant={"body1"} color={theme.palette.text.secondary}>
                            Wtorek: 8:00 - 18:00
                        </Typography>
                        <Typography variant={"body1"} color={theme.palette.text.secondary}>
                            Środa: 8:00 - 18:00
                        </Typography>
                        <Typography variant={"body1"} color={theme.palette.text.secondary}>
                            Czwartek: 8:00 - 18:00
                        </Typography>
                        <Typography variant={"body1"} color={theme.palette.text.secondary}>
                            Piątek: 8:00 - 18:00
                        </Typography>
                        <Typography variant={"body1"} color={theme.palette.text.secondary}>
                            Sobota: 8:00 - 18:00
                        </Typography>
                        <Typography variant={"body1"} color={theme.palette.text.secondary}>
                            Niedziela: 8:00 - 18:00
                        </Typography>
                    </Box>
            </Box>
            <Box
                display={"flex"}
                flexDirection={"column"}
                alignItems={"end"}
                gap={3}
                sx={{
                    width:{xs:'100%', lg:'33%'},
                    alignItems:{xs:'center', lg:'end'},
                    justifyContent:{xs:"center"}
                }}

            >
                <Box>
                    <Typography variant={"h6"} color={theme.palette.text.secondary}>
                        Sprawdź nas w mediach
                    </Typography>
                    <Box
                        display={"flex"}
                        alignItems={"center"}
                        gap={1}
                        justifyContent={"center"}
                        sx={{flexDirection:{sx:'row', lg:'column'}}}
                    >
                        <Box
                            width={'3rem'}
                            height={'3rem'}
                            sx={{
                                backgroundImage:`url(${fbLogo})`,
                                backgroundSize:'cover'
                            }}
                        />
                        <Box
                            width={'3rem'}
                            height={'3rem'}
                            sx={{
                                backgroundImage:`url(${instaLogo})`,
                                backgroundSize:'cover'
                            }}
                        />
                        <Box
                            width={'3rem'}
                            height={'3rem'}
                            sx={{
                                backgroundImage:`url(${tiktokLogo})`,
                                backgroundSize:'cover'
                            }}
                        />
                        <Box
                            width={'3rem'}
                            height={'3rem'}
                            sx={{
                                backgroundImage:`url(${ytLogo})`,
                                backgroundSize:'cover'
                            }}
                        />
                    </Box>
                </Box>
            </Box>

        </Box>
    )
}
export default Footer