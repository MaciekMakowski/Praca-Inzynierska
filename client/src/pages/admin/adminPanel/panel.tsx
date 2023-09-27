
import { Box, Typography, useTheme  } from "@mui/material"
import PanelInfoSquare from "./components/PanelInfoSquare"

const fakeData = [
    {
        id:1,
        name:'Azor'
    },
    {
        id:2,
        name:'Pimpek'
    },
    {
        id:3,
        name:'Szyszek'
    },
    {
        id:4,
        name:'Azor'
    },
    {
        id:5,
        name:'Pimpek'
    },
    {
        id:6,
        name:'Szyszek'
    },
]

const Panel = () => {
    const theme = useTheme()
    return(
        <Box
            sx={{
                width:'calc(100% - 200px)',
                 height:'100vh',
                 boxSizing:'border-box',
                 paddingY:'2rem',
                 paddingX:'4rem',
                 display:'flex',
                 flexDirection:'column',
                }}
        >
            <Box 
                sx={{
                    display:'flex',
                    width:'100%',
                    height:'30%',
                    justifyContent:'space-between',
                    alignItems:'center',
                }}>
                    <PanelInfoSquare title="Zakończone izolacje" data={fakeData}/>
                    <PanelInfoSquare title="Zakończone Choroby" data={fakeData}/>
                    <PanelInfoSquare title="Zasoby bliskie zużycia" data={fakeData}/>
                    <PanelInfoSquare title="Pracownicy na dziś" data={fakeData}/>
                    <PanelInfoSquare title="Wolontariusze na dziś" data={fakeData}/>

            </Box>

        </Box>
    )
}

export default Panel