import {
    Box,
    useTheme,
    Modal,
  } from "@mui/material";
  import CloseIcon from "@mui/icons-material/Close";
  import { AnimalType } from "../../utils/types/basicTypes";
import AddAnimalForm from "./addAnimalForm";
  type AddAdoptionModalProps = {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    data: AnimalType;
  };
  
  const EditPetInfoModal = (props: AddAdoptionModalProps) => {
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
            width: "60%",
            boxSizing: "border-box",
            padding: "1rem",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            border: `${theme.palette.primary.main} 4px solid}`,
            borderRadius: [3],
          }}
        >
            <AddAnimalForm />
        
        </Box>
      </Modal>
    );
  };
  
  export default EditPetInfoModal;
  