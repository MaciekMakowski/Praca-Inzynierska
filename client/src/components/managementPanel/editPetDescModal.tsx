import {
    Box,
    Button,
    IconButton,
    Modal,
    TextField,
    Typography,
    useTheme
} from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";
import { EditPetModalProps } from "../../utils/types/basicTypes";

const EditPetDescModal = (props:EditPetModalProps) => {
    const theme = useTheme();
    const handleClose = () => props.setOpen(false);
    const desc = typeof props.data === "string" ? props.data : "";

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
            minWidth:'600px',
            boxSizing: "border-box",
            padding: "1rem",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            border: `${theme.palette.primary.main} 4px solid}`,
            borderRadius: [3],
          }}
        >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            gap: "1rem",
          }}
        >
          <Typography variant="h5" color={theme.palette.text.primary}>
            Edytuj opis
          </Typography>
          <IconButton onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </Box>
           <TextField
            multiline
            label="Desc"
            variant="outlined"
            rows={9}
            value={desc}
            focused={desc.length > 0}
           >

           </TextField>
          
          <Button variant="contained">Zabisz</Button>
        </Box>
      </Modal>
    );
  };

export default EditPetDescModal