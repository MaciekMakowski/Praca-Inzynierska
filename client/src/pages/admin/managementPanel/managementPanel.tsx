import ManagementWindow from "./components/menagmentWindow";
import { Box } from "@mui/material";
const ManagmentPanel = () => {

    return(
        <Box
            sx={{
                width:'100%',
                height:'100%',
                boxSizing:'border-box',
                padding:'1rem',
                display:'flex',
                flexWrap:'wrap',
                justifyContent:'space-around',
            }}
        >
            <ManagementWindow 
                title="Zwierzęta"
            />
            <ManagementWindow 
                title="Zwierzęta"
            />
            <ManagementWindow 
                title="Zwierzęta"
            />
            <ManagementWindow 
                title="Zwierzęta"
            />
            <ManagementWindow 
                title="Zwierzęta"
            />
            <ManagementWindow 
                title="Zwierzęta"
            />
        </Box>
    )
}

export default ManagmentPanel; 