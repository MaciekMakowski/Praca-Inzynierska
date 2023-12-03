import {Box, Typography, useTheme} from "@mui/material";

import ImageComponent from "../components/imageComponent";

type AdoptionInfoProps = {
    title:string,
    text:string,
    img:string,
    side:string
}

const AdoptionInfo = (props:AdoptionInfoProps) => {
    const theme = useTheme()

    return(
        <Box
            display={"flex"}
            width={'100%'}
            sx={{
                flexDirection:{xs:'column', md: props.side === 'right' ? 'row' : props.side === 'left' ? 'row-reverse' : 'row'},
                height:{xs:'', md:'20rem'}
            }}
        >
            <Box
                bgcolor={theme.palette.background.light}
                boxSizing={"border-box"}
                display={"flex"}
                flexDirection={"column"}
                gap={2}
                alignItems={"center"}
                justifyContent={"center"}
                px={4}
                py={2}
                sx={{
                    width:{xs:'100%', md:'70%'}
                }}
            >
                <Typography textAlign={"center"} variant={"subtitle1"} fontWeight={"bold"} color={theme.palette.text.secondary}>
                    {props.title}
                </Typography>
                <Typography variant={"body1"} color={theme.palette.text.secondary} textAlign={'center'}>
                    {props.text}
                </Typography>
            </Box>
            <ImageComponent
                src={props.img}
                alt={props.title}
                sx={{
                    borderRadius:{xs:'0px 0px 10px 10px', lg:props.side === 'right' ? '0px 10px 10px 0px' : props.side === 'left' ? '10px 0px 0px 10px' : '0px 10px 10px 0px'},
                    height:{xs:'300px', md:'100%'},
                    width:{xs:'100%', md:'35rem'}
                }}
            />


        </Box>
    )
}

export default AdoptionInfo