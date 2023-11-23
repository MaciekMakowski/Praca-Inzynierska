import {
    Box,
    Typography,
    useTheme,
} from "@mui/material";

import dogAbout1 from "../img/home/dogAbout1.png";

const AnimialTile = (props: any) => {
    const theme = useTheme();
    return(
        <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        width:'250px',
                        backgroundColor: theme.palette.secondary.light,
                        borderRadius: "1rem",
                    }}
                >
                    <Box
                        sx={{
                            overflow: "hidden",
                        }}
                    >
                    <Box
                        sx={{
                            height: "125px",
                            width: "250px",
                            backgroundImage: `url(${dogAbout1})`,
                            backgroundSize: "contain",
                            '&:hover':{
                                transform: "scale(1.1)",
                                transition: "all 0.5s ease-in-out",
                                cursor: "pointer",
                            }
                        }}
                    />

                    </Box>
                    <Box
                        sx={{
                            display: "flex",
                            boxSizing: "border-box",
                            padding: "1rem",
                            flexDirection: "column",
                        }}
                    >
                         <Typography
                            variant="subtitle1"
                            color={theme.palette.text.secondary}
                        >
                            Puszek
                        </Typography>
                        <Box
                            sx={{
                                display: "flex",
                                gap: "0.5rem",
                        }}
                        >
                            <Typography
                            variant="caption"
                            color={theme.palette.text.secondary}
                        >
                            Samiec,
                        </Typography>
                        <Typography
                            variant="caption"
                            color={theme.palette.text.secondary}
                        >
                            8 lat,
                        </Typography>
                        <Typography
                            variant="caption"
                            color={theme.palette.text.secondary}
                        >
                             4 kg
                        </Typography>
                        

                        </Box>
                    </Box>

                </Box>
    )
}

export default AnimialTile;