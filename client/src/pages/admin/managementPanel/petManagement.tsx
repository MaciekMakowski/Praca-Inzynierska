import { Box, Typography, useTheme } from "@mui/material";

import AddAdoptionModal from "../../../components/managementPanel/addAdoptionModal";
import AddHomeIcon from "@mui/icons-material/AddHome";
import AddIsolationModal from "../../../components/managementPanel/addPetIsolationModal";
import AddPetDiseaseModal from "../../../components/managementPanel/addPetDiseaseModal";
import BlockIcon from '@mui/icons-material/Block';
import BorderAllIcon from "@mui/icons-material/BorderAll";
import ChangeStatusConfirmModal from "../../../components/managementPanel/changeStatusConfirmModal";
import CoronavirusIcon from "@mui/icons-material/Coronavirus";
import ManagementButton from "../../../components/managementPanel/managementButton";
import PetManagementDesc from "../../../components/managementPanel/petManagementDesc";
import PetManagementImages from "../../../components/managementPanel/petManagementImages";
import PetManagementInfo from "../../../components/managementPanel/petManagementInfo";
import PetManagementList from "../../../components/managementPanel/petManagementList";
import { PetManagementProps } from "../../../utils/types/basicTypes";
import { useState } from "react";

const PetManagement = (props: PetManagementProps) => {
  const [adoptionOpen, setAdoptionOpen] = useState(false);
  const [addIsolationOpen, setAddIsolationOpen] = useState(false);
  const [endIsolationOpen, setEndIsolationOpen] = useState(false);
  const [addDiseaseOpen, setAddDiseaseOpen] = useState(false);
  const [endDiseaseOpen, setEndDiseaseOpen] = useState(false);
  const [changeStatusOpen, setChangeStatusOpen] = useState(false);
  

  const theme = useTheme();
  if (!props.data) return <div></div>;
  return (
    <>
      <Box height={'10%'}>
        <Typography variant="h5" color={theme.palette.text.primary} textAlign={'center'}>
          Profil zwierzęcia: {props.data.name}
        </Typography>
      </Box>
      <Box 
        sx={{
          height:'90%',
          display:'flex',
          justifyContent:'start',
          flexDirection: "column",
          width:'100%'
        }}
      >
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
            flexDirection: { xs: "column", xl: "row" },
          }}
        >
          <Box
            sx={{
              width: {xs:"100%", xl:"50%"},
            }}
          >
            <Box
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                gap: "1rem",
              }}
            >
              <PetManagementInfo data={props.data} />
              <PetManagementDesc data={props.data} />
            </Box>
          </Box>
          <PetManagementImages />
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          gap: "1rem",
          marginTop: "1rem",
          flexDirection: {xs:"column", xl:"row",},
        }}
      >
        <Box
          sx={{
            maxHeight:{xs:"fit-content",lg:"45vh"},
            display: "flex",
            gap: "1rem",
            width: {xs:"100%", xl:"70%"},
            height: "100%",
            flexDirection: {xs:"column", lg:"row",}
            
          }}
        >
          <PetManagementList title="Historia Izolacji" type="isolation" />
          <PetManagementList title="Historia Chorób" type="disease" />
        </Box>
        <Box
          sx={{
            width: {xs:"100%", xl:"30%"},
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
              name="Dodaj Chorobę"
              ico={CoronavirusIcon}
              disabled={false}
              foo={() => setAddDiseaseOpen(true)}
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
            <ManagementButton
              name="Zablokuj adopcje"
              ico={BlockIcon}
              disabled={false}
              foo={() => setChangeStatusOpen(true)}
            />
            <ManagementButton
              name="Status Izolacji"
              ico={BorderAllIcon}
              disabled={true}
              foo={() => setEndIsolationOpen(true)}
            />
            <ManagementButton
              name="Status Choroby"
              ico={CoronavirusIcon}
              disabled={true}
              foo={() => setEndDiseaseOpen(true)}
            />
          </Box>
        </Box>
      </Box>
      <AddAdoptionModal
        setOpen={setAdoptionOpen}
        open={adoptionOpen}
        data={props.data}
      />
      <AddIsolationModal
        setOpen={setAddIsolationOpen}
        open={addIsolationOpen}
        data={props.data}
      />
      <AddPetDiseaseModal
        setOpen={setAddDiseaseOpen}
        open={addDiseaseOpen}
        data={props.data}
        />
        <ChangeStatusConfirmModal
            setOpen={setChangeStatusOpen}
            open={changeStatusOpen}
            petid={props.data.number}
        />
      </Box>
    </>
  );
};

export default PetManagement;
