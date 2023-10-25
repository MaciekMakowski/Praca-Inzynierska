import {
  Box,
  MenuItem,
  Select,
  TextField,
  Typography,
  useTheme,
  InputLabel,
  FormControl,
  SelectChangeEvent,
  Button,
  Modal,
  IconButton,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import dayjs, { Dayjs } from "dayjs";
import CloseIcon from "@mui/icons-material/Close";
import { AnimalType } from "../../utils/types/basicTypes";
type AddAdoptionModalProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  petInfo?: AnimalType;
};

const AddAdoptionModal = (props: AddAdoptionModalProps) => {
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
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            gap: "1rem",
          }}
        >
          <Typography variant="h5" color={theme.palette.text.primary}>
            Dodawanie nowej adopcji
          </Typography>
          <IconButton onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Box>
            <Typography variant="h6" color={theme.palette.text.primary}>
              Dane adoptującego
            </Typography>
            <Box
              sx={{
                display: "flex",
                gap: "1rem",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                  width: "250px",
                }}
              >
                <TextField
                  variant="outlined"
                  label="Numer"
                  name="number"
                  type="number"
                  color="primary"
                  //onChange={handleTextChange}
                />
                <TextField
                  disabled
                  variant="outlined"
                  label="Imię"
                  name="name"
                  color="primary"
                  //onChange={handleTextChange}
                />
                <TextField
                  disabled
                  variant="outlined"
                  label="Nazwisko"
                  name="lastName"
                  color="primary"
                  // onChange={handleTextChange}
                />
                <TextField
                  disabled
                  variant="outlined"
                  label="Płeć"
                  name="sex"
                  color="primary"
                />
                <TextField
                  disabled
                  variant="outlined"
                  label="Pesel"
                  name="pesel"
                  color="primary"
                  // onChange={handleTextChange}
                />
                <TextField
                  disabled
                  variant="outlined"
                  label="Data urodzenia"
                  name="birthDate"
                  color="primary"
                />
                </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                  width: "250px",
                }}
              >
                <Button
                  variant="outlined"
                  color="primary"
                  fullWidth
                  size="large"
                  sx={{
                    height: "100%",
                  }}
                >
                  Szukaj
                </Button>
                <TextField
                  disabled
                  variant="outlined"
                  label="Numer telefonu"
                  name="phoneNumber"
                  type="number"
                  color="primary"
                  //onChange={handleTextChange}
                />
                <TextField
                  disabled
                  variant="outlined"
                  label="E-mail"
                  name="email"
                  color="primary"
                  // onChange={handleTextChange}
                />
                <TextField
                  disabled
                  variant="outlined"
                  label="Miasto"
                  name="city"
                  color="primary"
                  //onChange={handleTextChange}
                />
                <TextField
                  disabled
                  variant="outlined"
                  label="Kod pocztowy"
                  name="postCode"
                  color="primary"
                  //onChange={handleTextChange}
                />
                <TextField
                  disabled
                  variant="outlined"
                  label="Adres"
                  name="address"
                  color="primary"
                  sx={{
                    marginTop: "5px",
                  }}
                  //onChange={handleTextChange}
                />
              </Box>
            </Box>
          </Box>
          <Box>
            <Typography variant="h6" color={theme.palette.text.primary}>
              Dane zwierzęcia
            </Typography>
            <Box
              sx={{
                display: "flex",
                gap: "1rem",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                  width: "250px",
                }}
              >
                <TextField
                  variant="outlined"
                  label="Numer"
                  name="number"
                  type="number"
                  color="primary"
                  disabled={props.petInfo && true}
                  value={props.petInfo?.number}
                  //onChange={handleTextChange}
                />
                <TextField
                  disabled
                  variant="outlined"
                  label="Imię"
                  name="name"
                  color="primary"
                  value={props.petInfo?.name}
                  // onChange={handleTextChange}
                />
                <TextField
                  disabled
                  variant="outlined"
                  label="Płeć"
                  name="sex"
                  color="primary"
                  value={props.petInfo?.sex}
                  // onChange={handleTextChange}
                />
                <TextField
                  disabled
                  variant="outlined"
                  label="Data urodzenia"
                  name="birthDate"
                  color="primary"
                  value={props.petInfo?.birthDate}
                  //onChange={handleTextChange}
                />
                <TextField
                  disabled
                  variant="outlined"
                  label="Rasa"
                  name="race"
                  color="primary"
                  value={props.petInfo?.race}
                  //onChange={handleTextChange}
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                  width: "250px",
                }}
              >
                <Button
                  variant="outlined"
                  color="primary"
                  fullWidth
                  size="large"
                  sx={{
                    height: "100%",
                  }}
                  disabled={props.petInfo && true}
                >
                  Szukaj zwierzęcia
                </Button>
                <TextField
                  disabled
                  variant="outlined"
                  label="Gatunek"
                  name="species"
                  color="primary"
                  value={props.petInfo?.species}
                  //onChange={handleTextChange}
                />
                <TextField
                  disabled
                  variant="outlined"
                  label="Waga"
                  name="weight"
                  color="primary"
                  value={props.petInfo?.weight}
                  // onChange={handleTextChange}
                />
                <TextField
                  disabled
                  variant="outlined"
                  label="Data Urodzin"
                  name="birthDate"
                  color="primary"
                  value={props.petInfo?.birthDate}
                  //onChange={handleTextChange}
                />
                <TextField
                  disabled
                  variant="outlined"
                  label="Miejsce znalezienia"
                  name="findPlace"
                  color="primary"
                  value={props.petInfo?.findPlace}
                  //onChange={handleTextChange}
                />
              </Box>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            width: "100%",
          }}
        >
          <Button
            variant="contained"
            sx={{
              width: "fit-content",
            }}
          >
            Dodaj
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default AddAdoptionModal;
