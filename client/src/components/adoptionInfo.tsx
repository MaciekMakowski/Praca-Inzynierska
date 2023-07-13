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
            height={'20rem'}
            sx={{
                flexDirection: props.side === 'right' ? 'row' : props.side === 'left' ? 'row-reverse' : 'row',
            }}
        >
            <Box
                bgcolor={theme.palette.background.light}
                boxSizing={"border-box"}
                display={"flex"}
                flexDirection={"column"}
                gap={2}
                width={'70%'}
                alignItems={"center"}
                justifyContent={"center"}
                px={4}
            >
                <Typography variant={"subtitle1"} fontWeight={"bold"} color={theme.palette.text.secondary}>
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
                    borderRadius:props.side === 'right' ? '0px 10px 10px 0px' : props.side === 'left' ? '10px 0px 0px 10px' : '0px 10px 10px 0px',
                    height:'100%',
                    width:"40rem"
                }}
            />


        </Box>
    )
}

export default AdoptionInfo