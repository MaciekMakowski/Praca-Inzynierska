import {
  Box,
  Button,
  IconButton,
  Modal,
  Typography,
  useTheme,
} from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";
import { Dispatch, SetStateAction } from "react";
import {
  approveAdoptionSignOrPay,
  changeAdoptionStatus,
} from "../../../utils/services/puts";
type ConfirmAdoptionChangeProps = {
  setOpen: Dispatch<SetStateAction<boolean>>;
  open: boolean;
  adoptionId: number;
  type:
    | "accept"
    | "reject"
    | "signContract"
    | "confirmPayment"
    | "confirmPickup";
};

const ConfirmAdoptionChange = (props: ConfirmAdoptionChangeProps) => {
  const theme = useTheme();
  const handleClose = () => props.setOpen(false);

  const sendForm = () => {
    if (props.type === "accept") {
      changeAdoptionStatus(props.adoptionId, "W trakcie").then((res) => {
        if (res) {
          props.setOpen(false);
          window.location.reload();
        }
      });
    }
    if (props.type === "reject") {
      changeAdoptionStatus(props.adoptionId, "Anulowana").then((res) => {
        if (res) {
          props.setOpen(false);
          window.location.reload();
        }
      });
    }
    if (props.type === "signContract") {
      approveAdoptionSignOrPay(props.adoptionId, "contractSigned").then(
        (res) => {
          if (res) {
            props.setOpen(false);
            window.location.reload();
          }
        }
      );
    }
    if (props.type === "confirmPayment") {
      approveAdoptionSignOrPay(props.adoptionId, "adoptionFeePaid").then(
        (res) => {
          if (res) {
            props.setOpen(false);
            window.location.reload();
          }
        }
      );
    }
    if (props.type === "confirmPickup") {
      changeAdoptionStatus(props.adoptionId, "Zakończona").then((res) => {
        if (res) {
          props.setOpen(false);
          window.location.reload();
        }
      });
    }
  };

  const returnContent = () => {
    if (props.type === "accept") {
      return (
        <>
          <Typography variant="h5" color={theme.palette.text.primary}>
            Czy na pewno chcesz zaakceptować adopcje?
          </Typography>
          <Typography variant="body1" color={theme.palette.text.primary}>
            Po zaakceptowaniu adopcji, zwierzę zostanie przekazane do adopcji.
          </Typography>
        </>
      );
    }
    if (props.type === "reject") {
      return (
        <>
          <Typography variant="h5" color={theme.palette.text.primary}>
            Czy na pewno chcesz odrzucić adopcje?
          </Typography>
          <Typography variant="body1" color={theme.palette.text.primary}>
            Po odrzuceniu adopcji, zwierzę pozostanie w schronisku.
          </Typography>
        </>
      );
    }
    if (props.type === "signContract") {
      return (
        <>
          <Typography
            textAlign={"center"}
            variant="h5"
            color={theme.palette.text.primary}
          >
            Czy na pewno chcesz podpisać umowę?
          </Typography>
          <Typography variant="body1" color={theme.palette.text.primary}>
            Jest to nieodwracalna operacja. Po podpisaniu umowy, wymagana będzie
            opłata adopcyjna.
          </Typography>
        </>
      );
    }
    if (props.type === "confirmPayment") {
      return (
        <>
          <Typography
            textAlign={"center"}
            variant="h5"
            color={theme.palette.text.primary}
          >
            Czy na pewno chcesz potwierdzić opłatę adopcyjną?
          </Typography>
          <Typography variant="body1" color={theme.palette.text.primary}>
            Po potwierdzeniu opłaty adopcyjnej, zwierzę zostanie przekazane do
            adopcji.
          </Typography>
        </>
      );
    }
    if (props.type === "confirmPickup") {
      return (
        <>
          <Typography
            textAlign={"center"}
            variant="h5"
            color={theme.palette.text.primary}
          >
            Czy na pewno chcesz potwierdzić odebranie zwierzęcia?
          </Typography>
          <Typography variant="body1" color={theme.palette.text.primary}>
            Po potwierdzeniu odebrania zwierzęcia, adopcja zostanie zakończona.
          </Typography>
        </>
      );
    }
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
          width: { xs: "90%", md: "60%", lg: "40%", xl: "30%" },
          minWidth: "300px",
          boxSizing: "border-box",
          padding: "1rem",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          border: `${theme.palette.primary.main} 4px solid}`,
          borderRadius: [3],
        }}
      >
        <Box>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "end",
              gap: "1rem",
            }}
          >
            <IconButton onClick={handleClose}>
              <CloseIcon />
            </IconButton>
          </Box>
          <Box>{returnContent()}</Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Button variant="outlined" onClick={handleClose}>
            Anuluj
          </Button>
          <Button variant="contained" onClick={() => sendForm()}>
            Potwierdź
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default ConfirmAdoptionChange;
