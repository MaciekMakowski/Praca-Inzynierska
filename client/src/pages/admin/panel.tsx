import { Box } from "@mui/material"
import AdminMenu from "../../components/adminMenu"

const Panel = () => {

    return(
        <>
            <Box
                sx={{width:'100%', height:'100vh'}}
            >
                <AdminMenu/>

            </Box>
        </>
    )
}

export default Panel