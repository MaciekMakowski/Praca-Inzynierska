import {
    Box,
    Button,
    Modal,
    Typography,
    useTheme,
} from "@mui/material";

import { ConfirmModalProps } from "../../utils/types/basicTypes";

const ChangeStatusConfirmModal = (props:ConfirmModalProps) => {
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
          width: "fit-content",
          boxSizing: "border-box",
          padding: "1rem",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          border: `${theme.palette.primary.main} 4px solid}`,
          borderRadius: [3],
        }}
      >
        <Typography variant="h6" textAlign={'center'} color={theme.palette.text.primary}> 
            Czy na pewno chcesz zmienić status zwierzęcia?
            </Typography>

        <Box
            sx={{
                display: "flex",
                justifyContent: "space-between",
            }}
        >
            <Button variant="contained">Tak</Button>
            <Button variant="outlined">Nie</Button>
        </Box>
      </Box>
    </Modal>
  );
};
export default ChangeStatusConfirmModal;
