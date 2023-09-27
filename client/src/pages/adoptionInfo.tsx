import {Box, Typography, useTheme} from "@mui/material";

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
                <Typography variant={"body1"} color={theme.palette.text.secondary}>
                    {props.text}
                </Typography>
            </Box>
            <Box
                sx={{
                    backgroundImage:`url(${props.img})`,
                    backgroundSize:'cover',
                    backgroundPosition:'center',
                    borderRadius:{xs:'0px 0px 10px 10px', lg:props.side === 'right' ? '0px 10px 10px 0px' : props.side === 'left' ? '10px 0px 0px 10px' : '0px 10px 10px 0px'},
                    height:{xs:'300px', md:'100%'},
                    width:{xs:'100%', md:'40rem'}
                }}
            />


        </Box>
    )
}

export default AdoptionInfo