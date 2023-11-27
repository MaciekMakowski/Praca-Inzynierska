import { Box, Button, Modal, Typography, useTheme } from "@mui/material";

import { AnimalType } from "../../../utils/types/basicTypes";
import { ConfirmModalProps } from "../../../utils/types/propsTypes";
import { updateAnimal } from "../../../utils/services/puts";

const ChangeStatusConfirmModal = (props: ConfirmModalProps) => {
  const theme = useTheme();
  const handleClose = () => props.setOpen(false);

  const changeStatus = async () => {
      const newAnimal:AnimalType ={
        ...props.animal,
        attributes:{
          ...props.animal.attributes,
          toAdoption: !props.animal.attributes.toAdoption,
        }
      }
      return newAnimal;
  };

  const sendChangeStatus = () => {
    changeStatus().then((res) => {
        updateAnimal(res).then((res) => {
          if (res) {
            props.setRefresh(true);
            handleClose();
          }
        });
    });
  };
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
        <Typography
          variant="h6"
          textAlign={"center"}
          color={theme.palette.text.primary}
        >
          Czy na pewno chcesz zmienić status zwierzęcia?
        </Typography>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Button variant="contained" onClick={() => sendChangeStatus()}>
            Tak
          </Button>
          <Button variant="outlined" onClick={handleClose}>
            Nie
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};
export default ChangeStatusConfirmModal;
