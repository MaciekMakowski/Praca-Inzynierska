import { Modal,Box, useTheme, Typography, IconButton, TextField } from "@mui/material"
import CloseIcon from '@mui/icons-material/Close';
type AddAdoptionModalProps = {
    open:boolean,
    setOpen:React.Dispatch<React.SetStateAction<boolean>>
}

const AddAdoptionModal = (props:AddAdoptionModalProps) => {
    const theme = useTheme();
    const handleClose = () => props.setOpen(false);

    return(
        <Modal
        open={props.open}
        onClose={handleClose}
    >
        <Box
            sx={{
                backgroundColor: theme.palette.background.adminField,
                position:'absolute',
                left:'50%',
                top:'50%',
                transform: 'translate(-50%, -50%)',
                width:'80%',
                height:'80%',
                boxSizing:'border-box',
                padding:'1rem',
                border:`${theme.palette.secondary.main} 4px solid}`,
                borderRadius:[3],
                display:'flex',
                flexDirection:'column',
            }}
        >
            <Box
                sx={{
                    width:'100%',
                    display:'flex',
                    justifyContent:'space-between',
                    gap:'1rem',
                }}
            >
                <Typography variant="h5" color={theme.palette.text.primary}>
                    Dodawanie nowej adopcji
                </Typography>
                <IconButton onClick={handleClose}>
                    <CloseIcon/>
                </IconButton>
            </Box>
            <Box
                sx={{
                    display:'flex',
                }}
            >
                <Box
                    sx={{
                        display:'flex',
                        flexDirection:'column',
                        gap:'1rem',
                    }}
                >
                    <TextField
                        variant="outlined"
                        label="Imię"
                        name="name"
                        color="primary"
                        //onChange={handleTextChange}
                    />
                    <TextField
                        variant="outlined"
                        label="Nazwisko"
                        name="name"
                        color="primary"
                        //onChange={handleTextChange}
                    />
                    <TextField
                        variant="outlined"
                        label="Imię"
                        name="name"
                        color="primary"
                        //onChange={handleTextChange}
                    />
                    <TextField
                        variant="outlined"
                        label="Imię"
                        name="name"
                        color="primary"
                        //onChange={handleTextChange}
                    />

                </Box>

            </Box>
        </Box>

    </Modal>
    )


}

export default AddAdoptionModal