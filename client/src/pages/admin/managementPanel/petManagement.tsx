import {
  Box,
  ImageList,
  Typography,
  useTheme,
  Button,
  Grid,
  IconButton,
} from "@mui/material";
import shadows from "@mui/material/styles/shadows";
import EditIcon from "@mui/icons-material/Edit";
import { AnimalType } from "../../../utils/types/basicTypes";
import PetManagementList from "../../../components/managementPanel/petManagementList";
import BorderAllIcon from "@mui/icons-material/BorderAll";
import CoronavirusIcon from "@mui/icons-material/Coronavirus";
import AddHomeIcon from "@mui/icons-material/AddHome";
import { AllInbox } from "@mui/icons-material";
import ManagementButton from "../../../components/managementPanel/managementButton";
import PetManagementImages from "../../../components/managementPanel/petManagementImages";
import PetManagementDesc from "../../../components/managementPanel/petManagementDesc";
import PetManagementInfo from "../../../components/managementPanel/petManagementInfo";

const data: AnimalType = {
  number: 1234,
  name: "Puszek",
  findPlace: "Las Bartąg",
  race: "Kundel",
  weight: 6.42,
  sex: "Samiec",
  species: "Pies",
  birthDate: "20-09-2022",
};

const PetManagement = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        minWidth: "1700px",
        width: "100%",
        height: "100%",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        paddingX: "1rem",
        paddingBottom: "1rem",
        justifyContent: "flex-start",
        gap: "1rem",
      }}
    >
      <Box>
        <Typography variant="h5" color={theme.palette.text.primary}>
          Profil zwierzęcia: Puszek
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "start",
          gap: "1rem",
        }}
      >
        <Box
          sx={{
            display: "flex",
            width: "100%",
            gap: "1rem",
          }}
        >
          <Box
            sx={{
              width: "50%",
            }}
          >
            <Box
              sx={{
                height: "400px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                gap: "1rem",
              }}
            >
              <PetManagementInfo />
              <PetManagementDesc />
            </Box>
          </Box>
          <PetManagementImages />
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          height: "50%",
          gap: "1rem",
        }}
      >
        <Box
          sx={{
            display: "flex",
            gap: "1rem",
            width: "50%",
            height: "100%",
          }}
        >
          <PetManagementList title="Historia Izolacji" />
          <PetManagementList title="Historia Chorób" />
        </Box>
        <Box
          sx={{
            width: "50%",
            height: "100%",
            textAlign: "center",
            boxSizing: "border-box",
            display: "flex",
            flexDirection: "column",
            padding: "1rem",
            gap: "1rem",
            borderRadius: "1rem",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
              gap: "1rem",
            }}
          >
            <ManagementButton
              name="Rozpocznij Adopcję"
              ico={AddHomeIcon}
              disabled={false}
            />
            <ManagementButton
              name="Dodaj Izolacje"
              ico={BorderAllIcon}
              disabled={false}
            />
            <ManagementButton
              name="Zakończ Izolacje"
              ico={BorderAllIcon}
              disabled={true}
            />
            <ManagementButton
              name="Dodaj Chorobę"
              ico={CoronavirusIcon}
              disabled={false}
            />
            <ManagementButton
              name="Zakończ Chorobę"
              ico={CoronavirusIcon}
              disabled={true}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default PetManagement;
