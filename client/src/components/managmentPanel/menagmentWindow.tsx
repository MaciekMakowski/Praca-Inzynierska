import { Box, Typography, useTheme } from "@mui/material";

type ManagementWindowProps = {
    title: string;
}

const ManagementWindow = (props: ManagementWindowProps) => {
    const theme = useTheme();

    return(
        <>
            <Box
                sx={{
                    width:'30%',
                    height:'45%',
                    backgroundColor: theme.palette.text.secondary,
                    display:'flex',
                    flexDirection:'column',
                }}
            >
                <Typography variant="h5" component="h2" sx={{color: theme.palette.text.primary, textAlign:'center'}}>
                    {props.title}
                </Typography>

            </Box>
        </>
    )
}

export default ManagementWindow;