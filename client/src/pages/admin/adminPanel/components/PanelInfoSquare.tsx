import { Box, Button, Typography, useTheme } from "@mui/material"


type dataType = {
    id:number,
    name:string,
}

type PanelInfoSquareProps = {
    title:string
    data: dataType[]
}

const PanelInfoSquare = (props:PanelInfoSquareProps) => {
    const theme = useTheme()
    return (
        <Box
            sx={{width:'250px', height:'250px', backgroundColor:theme.palette.background.light}}
        >
            <Typography textAlign={'center'} variant="h6" color={theme.palette.text.secondary}>
                {props.title}
            </Typography>
            <Box sx={{
                    boxSizing:'border-box',
                    gap:'1rem',
            }}>
                <Box
                    sx={{
                        display:'flex', 
                        justifyContent:'flex-start', 
                        alignItems:'center',
                        gap:'1rem',
                        paddingX:'1rem',
                    }}
                >
                    <Typography 
                    variant="subtitle2" 
                    sx={{
                        width:'30px',
                        color:theme.palette.text.secondary
                     }}
                    >
                        Id
                    </Typography>
                    <Typography variant="subtitle1" color={theme.palette.text.secondary}>
                        Imię
                    </Typography>
                </Box>
                {props.data.map((item,index) => {
                    if(index < 6){
                        return(
                            <Box
                                sx={{
                                    display:'flex', 
                                    justifyContent:'flex-start', 
                                    alignItems:'center',
                                    gap:'1rem',
                                    paddingX:'1rem',
                                    background: index % 2 === 0 ? theme.palette.background.light : '',
                                }}
                            >
                                <Typography 
                                variant="subtitle2"
                                sx={{
                                    width:'30px',
                                    color:theme.palette.text.secondary
                                 }}
                                 >
                                    #{item.id}
                                </Typography>
                                <Typography variant="subtitle1" color={theme.palette.text.secondary}>
                                    {item.name}
                                </Typography>
                            </Box>
                        )
                    }else{
                        null
                    }
                    
                })}
            </Box>
            <Button 
            variant="contained"
            sx={{width:'100%'}}
            >Sprawdź wszystkie</Button>
        </Box>
    )
}
export default PanelInfoSquare