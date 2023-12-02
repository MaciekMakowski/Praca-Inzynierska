import {
  Box,
  Button,
  IconButton,
  Modal,
  Typography,
  useTheme,
} from "@mui/material";
import { PersonType, VisitType } from "../../../utils/types/basicTypes";

import CloseIcon from "@mui/icons-material/Close";
import { endVisit } from "../../../utils/services/puts";
import { useState } from "react";

type EndVisitModalProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  type: "volunteer" | "guest";
  setRefresh: React.Dispatch<React.SetStateAction<boolean>>;
  person: PersonType;
  visit: VisitType;
};

const EndVisitModal = (props: EndVisitModalProps) => {
  if (props.visit === null) return null;
  const theme = useTheme();
  const handleClose = () => props.setOpen(false);

  const sendForm = () => {
    const date = new Date();
    const time = `${date.getHours()}:${date.getMinutes()}`;
    endVisit(props.visit, props.type, time).then((res) => {
        if(res)
        props.setRefresh(true);
        handleClose();
    })
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
          minWidth: { xs: "90%", lg: "500px" },
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
          <Typography
            variant="h6"
            sx={{
              textAlign: "center",
              color: theme.palette.primary.main,
            }}
          >
            Czy napewno chcesz zakończyć wizytę?
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            paddingX: "1rem",
            justifyContent: "space-between",
            my: "1rem",
          }}
        >
          <Button
            variant="outlined"
            sx={{
              width: "25%",
            }}
          >
            Nie
          </Button>
          <Button
            variant="contained"
            onClick={sendForm}
            sx={{
              width: "25%",
            }}
          >
            Tak
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default EndVisitModal;
