import { Box, Button, IconButton, Modal, Typography, useTheme } from "@mui/material";
import { Dispatch, SetStateAction } from "react";

import CloseIcon from "@mui/icons-material/Close";
import { Image } from "../../utils/types/basicTypes";
import { deleteImageFromAnimal } from "../../utils/services/posts";

type DeleteImageModalProps = {
    open: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>;
    image: Image;
    setRefresh: Dispatch<SetStateAction<boolean>>;
}

const DeleteImageModal = (props: DeleteImageModalProps) => {
    const theme = useTheme();
    const handleClose = () => props.setOpen(false);

    const deleteImage = () => {
        const formData = new FormData();
        deleteImageFromAnimal(formData, props.image.id).then((res) => {
            if(res){
                handleClose();
                props.setRefresh(true);
            }
        })
    }    

    return(
        <Modal open={props.open} onClose={handleClose}>
        <Box
          sx={{
            backgroundColor: theme.palette.background.adminField,
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            width: "30%",
            minWidth:{xs:'90%', lg:"600px"},
            boxSizing: "border-box",
            display: "flex",
            flexDirection: "column",
            padding: "1rem",
            gap: "1rem",
            border: `${theme.palette.primary.main} 4px solid}`,
            borderRadius: [3],
          }}
        >
        <Box
          sx={{
            position:'absolute',
            justifyContent: "end",
            right: 15,
            top:15,
          }}
        >
          <IconButton onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </Box>
        <Typography variant="h6" color={theme.palette.text.primary}>
            Czy na pewno chcesz usunąć zdjęcie?
        </Typography>
        <Box 
            sx={{
                display:'flex',
                justifyContent:'space-between',
            }}
        >
            <Button variant="outlined" onClick={handleClose}>Nie</Button>
            <Button variant="contained" onClick={() => deleteImage()}>Tak</Button>
        </Box>
        </Box>
      </Modal>
    )
}

export default DeleteImageModal;