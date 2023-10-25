import {
  Box,
  Typography,
  useTheme,
} from "@mui/material";
import PetManagementList from "../../../components/managementPanel/petManagementList";
import BorderAllIcon from "@mui/icons-material/BorderAll";
import CoronavirusIcon from "@mui/icons-material/Coronavirus";
import AddHomeIcon from "@mui/icons-material/AddHome";
import ManagementButton from "../../../components/managementPanel/managementButton";
import PetManagementImages from "../../../components/managementPanel/petManagementImages";
import PetManagementDesc from "../../../components/managementPanel/petManagementDesc";
import PetManagementInfo from "../../../components/managementPanel/petManagementInfo";
import { useState } from "react";
import AddAdoptionModal from "../../../components/managementPanel/addAdoptionModal";
import { PetManagementProps } from "../../../utils/types/basicTypes";
import AddIsolationModal from "../../../components/managementPanel/addIsolationModal";
import ChangePetStatus from "../../../components/managementPanel/changePetStatus";

const PetManagement = (props:PetManagementProps) => {
  const [adoptionOpen, setAdoptionOpen] = useState(false);
  const [addIsolationOpen, setAddIsolationOpen] = useState(false);
  const [endIsolationOpen, setEndIsolationOpen] = useState(false);
  const [addDiseaseOpen, setAddDiseaseOpen] = useState(false);
  const [endDiseaseOpen, setEndDiseaseOpen] = useState(false);

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
          Profil zwierzęcia: {props.data.name}
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
              <PetManagementInfo data={props.data}/>
              <PetManagementDesc data={props.data}/>
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
              disabled={props.data.status === "Do Adopcji" ? true : false}
              foo={() => setAdoptionOpen(true)}
            />
            <ManagementButton
              name="Dodaj Izolacje"
              ico={BorderAllIcon}
              disabled={false}
              foo={() => setAddIsolationOpen(true)}
            />
            <ManagementButton
              name="Status Izolacji"
              ico={BorderAllIcon}
              disabled={true}
              foo={() => setEndIsolationOpen(true)}
            />
            <ManagementButton
              name="Dodaj Chorobę"
              ico={CoronavirusIcon}
              disabled={false}
              foo={() => setAddDiseaseOpen(true)}
            />
            <ManagementButton
              name="Status Choroby"
              ico={CoronavirusIcon}
              disabled={true}
              foo={() => setEndDiseaseOpen(true)}
            />
            
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
              gap: "1rem",
            }}
          >
            <ChangePetStatus/>
          </Box>
        </Box>
      </Box>
      <AddAdoptionModal setOpen={setAdoptionOpen} open={adoptionOpen} data={props.data}/>
      <AddIsolationModal setOpen={setAddIsolationOpen} open={addIsolationOpen} data={props.data}/>
    </Box>
  );
};

export default PetManagement;
