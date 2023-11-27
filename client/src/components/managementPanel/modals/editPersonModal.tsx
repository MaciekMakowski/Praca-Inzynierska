import {
  Box,
  Button,
  IconButton,
  Modal,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";

import AddPersonForm from "../forms/addPersonForm";
import CloseIcon from "@mui/icons-material/Close";
import { PersonType } from "../../../utils/types/basicTypes";

type EditPersonModalProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  person: PersonType;
  type: "volunteer" | "guest";
  setRefresh: React.Dispatch<React.SetStateAction<boolean>>;
};

const EditPersonModal = (props: EditPersonModalProps) => {
  const theme = useTheme();
  const handleClose = () => props.setOpen(false);

  const sendForm = () => {};

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
          minWidth: { xs: "90%", lg: "600px" },
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
          border: `${theme.palette.primary.main} 4px solid}`,
          borderRadius: [3],
        }}
      >
        <Box
          sx={{
            width: "100%",
            justifyContent: "space-between",
            gap: "1rem",
            position: "relative",
          }}
        >
          <IconButton
            sx={{
              position: "absolute",
              right: 0,
            }}
            onClick={handleClose}
          >
            <CloseIcon />
          </IconButton>
        </Box>
        <AddPersonForm
          peronData={props.person}
          title="Edytuj wolontariusza"
          isNew={false}
          setRefresh={props.setRefresh}
          type={`${props.type}s`}
          setOpen={props.setOpen}
          buttonText="Zaktualizuj"
        />
      </Box>
    </Modal>
  );
};

export default EditPersonModal;
