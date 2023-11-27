import {
    Box,
    IconButton,
    Modal,
    useTheme
} from "@mui/material";

import AddAnimalForm from "../forms/addAnimalForm";
import CloseIcon from "@mui/icons-material/Close";
import {EditPetModalProps} from "../../../utils/types/propsTypes";

const EditPetInfoModal = (props: EditPetModalProps) => {
    const theme = useTheme();
    const handleClose = () => props.setOpen(false);
  
    return (
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
            <AddAnimalForm  data={props.animal} isNew={false} setRefresh={props.setRefresh} setOpen={props.setOpen}/>
        
        </Box>
      </Modal>
    );
  };
  
  export default EditPetInfoModal;
  