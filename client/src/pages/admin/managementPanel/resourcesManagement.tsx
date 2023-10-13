import { Box, Typography, useTheme } from "@mui/material";
import AddResourceForm from "../../../components/managmentPanel/addResourceForm";
import ResourcesList from "../../../components/managmentPanel/resourcesList";
import AddResourceTypeForm from "../../../components/managmentPanel/addResourceTypeForm";
import DeleteResourceType from "../../../components/managmentPanel/deleteResourceType";
import ResourcesTypeList from "../../../components/managmentPanel/resourcesTypeList";


const ResourcesManagement = () => {
    const theme = useTheme()

    return(
        <Box
        sx={{
            minWidth:'1700px',
            height:'100%',
            boxSizing:'border-box',
            display:'flex',
            flexWrap:'wrap',
            justifyContent:'space-around',
            flexDirection:'column',
            paddingX:'1rem'
        }}
    >
        <Box>
            <Typography variant="h4" textAlign={'start'} color={theme.palette.text.primary}>
                Zarządzanie zasobami
            </Typography>
        </Box>
        <Box 
            sx={{
                height:'90%',
                display:'flex',
                justifyContent:'start',
                gap:'1rem',
            }}
        >  
            <Box
                sx={{
                    display:'flex',
                    flexDirection:'column',
                    gap:'1rem',
                }}
            >
                <AddResourceForm/>
            </Box>
            <Box
                sx={{
                    display:'flex',
                    flexDirection:'column',
                    gap:'1rem',
                }}
            >
                <AddResourceTypeForm/>
                <DeleteResourceType/>
                <ResourcesTypeList/>
            </Box>
            <ResourcesList/>
        </Box>
    </Box>
    )
}

export default ResourcesManagement