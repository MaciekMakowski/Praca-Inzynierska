import {
  AnimalType,
  DiseaseInfoProps,
  EditPetModalProps,
} from "../../utils/types/basicTypes";
import {
  Box,
  Button,
  Grid,
  IconButton,
  Modal,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";

const InfoModal = (props: DiseaseInfoProps) => {
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
          width: "50%",
          minWidth: "600px",
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
            Angina zwierzęcia Puszek
          </Typography>
          <IconButton onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </Box>
        <Grid container>
          <Grid container item xs={3} direction={"column"}>
            <Grid item xs={1}>
              <Typography
                variant="subtitle1"
                fontWeight={600}
                color={theme.palette.text.primary}
              >
                {" "}
                Imię:{" "}
              </Typography>
            </Grid>
            <Grid item xs={1}>
              <Typography
                variant="subtitle1"
                color={theme.palette.text.primary}
              >
                {" "}
                Puszek{" "}
              </Typography>
            </Grid>
            <Grid item xs={1}>
              <Typography
                variant="subtitle1"
                fontWeight={600}
                color={theme.palette.text.primary}
              >
                {" "}
                Gatunek:{" "}
              </Typography>
            </Grid>
            <Grid item xs={1}>
              <Typography
                variant="subtitle1"
                color={theme.palette.text.primary}
              >
                {" "}
                Pies{" "}
              </Typography>
            </Grid>
            <Grid item xs={1}>
              <Typography
                variant="subtitle1"
                fontWeight={600}
                color={theme.palette.text.primary}
              >
                {" "}
                Rasa:{" "}
              </Typography>
            </Grid>
            <Grid item xs={1}>
              <Typography
                variant="subtitle1"
                color={theme.palette.text.primary}
              >
                {" "}
                Kundel{" "}
              </Typography>
            </Grid>
            <Grid item xs={1}>
              <Typography
                variant="subtitle1"
                fontWeight={600}
                color={theme.palette.text.primary}
              >
                {" "}
                Wiek:{" "}
              </Typography>
            </Grid>
            <Grid item xs={1}>
              <Typography
                variant="subtitle1"
                color={theme.palette.text.primary}
              >
                16
              </Typography>
            </Grid>
          </Grid>
          <Grid container item xs={5} direction={"column"}>
            <Grid item xs={1}>
              <Typography
                variant="subtitle1"
                fontWeight={600}
                color={theme.palette.text.primary}
              >
                Data rozpoznania:
              </Typography>
            </Grid>
            <Grid item xs={1}>
              <Typography
                variant="subtitle1"
                color={theme.palette.text.primary}
              >
                2022-04-24
              </Typography>
            </Grid>
            <Grid item xs={1}>
              <Typography
                variant="subtitle1"
                fontWeight={600}
                color={theme.palette.text.primary}
              >
                {props.reason}:
              </Typography>
            </Grid>
            <Grid item xs={1}>
              <Typography
                variant="subtitle1"
                color={theme.palette.text.primary}
              >
                Angina
              </Typography>
            </Grid>
            <Grid item xs={1}>
              <Typography
                variant="subtitle1"
                fontWeight={600}
                color={theme.palette.text.primary}
              >
                {props.desc}:
              </Typography>
            </Grid>
            <Grid item xs={1}>
              <Typography
                variant="subtitle1"
                color={theme.palette.text.primary}
              >
                Podawanie leków, przebywanie w ciepłym
              </Typography>
            </Grid>
            <Grid item xs={1}>
              <Typography
                variant="subtitle1"
                fontWeight={600}
                color={theme.palette.text.primary}
              >
                Data zakończenia:
              </Typography>
            </Grid>
            <Grid item xs={1}>
              <Typography
                variant="subtitle1"
                color={theme.palette.text.primary}
              >
                Trwa
              </Typography>
            </Grid>
          </Grid>
          <Grid container item xs={4} spacing={2} direction={"column"}>
            <Grid item xs={2}>
              <Typography
                variant="subtitle1"
                fontWeight={600}
                color={theme.palette.text.primary}
              >
                Status:
              </Typography>
              <Typography
                variant="subtitle1"
                color={theme.palette.text.primary}
              >
                Chory
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Button variant="contained">{props.buttonText}</Button>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Modal>
  );
};

export default InfoModal;
