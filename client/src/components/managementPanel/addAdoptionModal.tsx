import { AnimalType, PersonType } from "../../utils/types/basicTypes";
import {
  Box,
  Button,
  IconButton,
  Modal,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import { useEffect, useState } from "react";

import { AddAdoptionProps } from "../../utils/types/propsTypes";
import CloseIcon from "@mui/icons-material/Close";
import { createAdoption } from "../../utils/services/posts";
import dayjs from "dayjs";
import { getPerson } from "../../utils/services/gets";
import { handleTextChange } from "../../utils/functions/handlers";

const emptyPerson: PersonType = {
  id: 0,
  attributes: {
    name: "",
    lastName: "",
    birthDate: dayjs().format("YYYY-MM-DD"),
    sex: "",
    phoneNumber: 0,
    email: "",
    city: "",
    postCode: "",
    address: "",
    pesel: 0,
  },
};
const AddAdoptionModal = (props: AddAdoptionProps) => {
  const theme = useTheme();
  const handleClose = () => props.setOpen(false);
  const [person, setPerson] = useState<PersonType>(emptyPerson);
  const [animal, setAnimal] = useState<AnimalType>();

  const textChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPerson({ ...person, id: parseInt(event.target.value) });
  };

  const findPerson = () => {
    if (person) {
      getPerson("guest", person.id.toString()).then((res) => {
        if (res) setPerson(res);
      });
    }
  };

  const sendForm = () => {
    if (person && animal) {
      createAdoption(animal.id, person.id).then((res) => {
        if (res) {
          handleClose();
          setPerson(emptyPerson);
          props.setRefresh(true)
        }
      });
    }
  };

  useEffect(() => {
    setAnimal(props.data);
  }, [props.data]);

  return (
    <Modal open={props.open} onClose={handleClose}>
      <Box
        sx={{
          backgroundColor: theme.palette.background.adminField,
          position: "absolute",
          maxHeight: "80vh",
          overflowY: "auto",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          width: { xs: "90%", xl: "60%" },
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
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
            }}
          >
            <Typography variant="h6" color={theme.palette.text.primary}>
              Adoptujący
            </Typography>
            <Box
              sx={{
                display: "flex",
                gap: "1rem",
                flexDirection: { xs: "column", md: "row" },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                  width: { xs: "100%", md: "50%" },
                }}
              >
                <TextField
                  variant="outlined"
                  label="Numer"
                  name="id"
                  type="number"
                  color="primary"
                  value={person?.id}
                  onChange={textChange}
                />
                <Button
                  variant="outlined"
                  color="primary"
                  fullWidth
                  size="large"
                  sx={{
                    height: "100%",
                  }}
                  onClick={() => findPerson()}
                >
                  Szukaj
                </Button>
                <TextField
                  disabled
                  variant="outlined"
                  label="Imię"
                  name="name"
                  color="primary"
                  value={person?.attributes.name}
                />
                <TextField
                  disabled
                  variant="outlined"
                  label="Nazwisko"
                  name="lastName"
                  color="primary"
                  value={person?.attributes.lastName}
                />
                <TextField
                  disabled
                  variant="outlined"
                  label="Płeć"
                  name="sex"
                  color="primary"
                  value={person?.attributes.sex}
                />
                <TextField
                  disabled
                  variant="outlined"
                  label="Pesel"
                  name="pesel"
                  color="primary"
                />
                <TextField
                  disabled
                  variant="outlined"
                  label="Data urodzenia"
                  name="birthDate"
                  color="primary"
                  value={person?.attributes.birthDate}
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                  width: { xs: "100%", md: "50%" },
                }}
              >
                <TextField
                  disabled
                  variant="outlined"
                  label="Numer telefonu"
                  name="phoneNumber"
                  type="number"
                  color="primary"
                  value={person?.attributes.phoneNumber}
                />
                <TextField
                  disabled
                  variant="outlined"
                  label="E-mail"
                  name="email"
                  color="primary"
                  value={person?.attributes.email}
                />
                <TextField
                  disabled
                  variant="outlined"
                  label="Miasto"
                  name="city"
                  color="primary"
                  value={person?.attributes.city}
                />
                <TextField
                  disabled
                  variant="outlined"
                  label="Kod pocztowy"
                  name="postCode"
                  color="primary"
                  value={person?.attributes.postCode}
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
                  value={person?.attributes.address}
                />
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              marginLeft: "1rem",
            }}
          >
            <Typography variant="h6" color={theme.palette.text.primary}>
              Zwierzę
            </Typography>
            <Box
              sx={{
                display: "flex",
                gap: "1rem",
                flexDirection: { xs: "column", md: "row" },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                  width: { xs: "100%", md: "50%" },
                }}
              >
                <TextField
                  variant="outlined"
                  label="Numer"
                  name="number"
                  type="number"
                  color="primary"
                  disabled={animal && true}
                  value={animal?.id}
                  //onChange={handleTextChange}
                />
                <Button
                  variant="outlined"
                  color="primary"
                  fullWidth
                  size="large"
                >
                  Szukaj
                </Button>
                <TextField
                  disabled
                  variant="outlined"
                  label="Płeć"
                  name="sex"
                  color="primary"
                  value={animal?.attributes.sex}
                  // onChange={handleTextChange}
                />
                <TextField
                  disabled
                  variant="outlined"
                  label="Data urodzenia"
                  name="birthDate"
                  color="primary"
                  value={animal?.attributes.birthDate}
                  //onChange={handleTextChange}
                />
                <TextField
                  disabled
                  variant="outlined"
                  label="Rasa"
                  name="race"
                  color="primary"
                  value={animal?.attributes.race}
                  //onChange={handleTextChange}
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                  width: { xs: "100%", md: "50%" },
                }}
              >
                <TextField
                  disabled
                  variant="outlined"
                  label="Gatunek"
                  name="species"
                  color="primary"
                  value={animal?.attributes.species}
                  //onChange={handleTextChange}
                />
                <TextField
                  disabled
                  variant="outlined"
                  label="Waga"
                  name="weight"
                  color="primary"
                  value={animal?.attributes.weight}
                  // onChange={handleTextChange}
                />
                <TextField
                  disabled
                  variant="outlined"
                  label="Wiek"
                  name="age"
                  color="primary"
                  value={dayjs().diff(animal?.attributes.birthDate, "year")}
                  //onChange={handleTextChange}
                />
                <TextField
                  disabled
                  variant="outlined"
                  label="Miejsce znalezienia"
                  name="findPlace"
                  color="primary"
                  value={animal?.attributes.findPlace}
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
            onClick={() => sendForm()}
          >
            Rozpocznij adopcję
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default AddAdoptionModal;
