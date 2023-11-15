import { Box, Typography, useTheme } from "@mui/material";
import { SetStateAction, useEffect, useState } from "react";

import AddAdoptionModal from "../../../components/managementPanel/addAdoptionModal";
import AddHomeIcon from "@mui/icons-material/AddHome";
import AddIsolationModal from "../../../components/managementPanel/addPetIsolationModal";
import AddPetDiseaseModal from "../../../components/managementPanel/addPetDiseaseModal";
import { AnimalType } from "../../../utils/types/basicTypes";
import BlockIcon from "@mui/icons-material/Block";
import BorderAllIcon from "@mui/icons-material/BorderAll";
import ChangeStatusConfirmModal from "../../../components/managementPanel/changeStatusConfirmModal";
import CoronavirusIcon from "@mui/icons-material/Coronavirus";
import ManagementButton from "../../../components/managementPanel/managementButton";
import PetManagementDesc from "../../../components/managementPanel/petManagementDesc";
import PetManagementImages from "../../../components/managementPanel/petManagementImages";
import PetManagementInfo from "../../../components/managementPanel/petManagementInfo";
import PetManagementList from "../../../components/managementPanel/petManagementList";
import { getAnimal } from "../../../utils/services/gets";
import { useParams } from "react-router";

const PetManagement = () => {
  const [animalData, setAnimalData] = useState<AnimalType | null>(null);
  const [adoptionOpen, setAdoptionOpen] = useState(false);
  const [addIsolationOpen, setAddIsolationOpen] = useState(false);
  const [endIsolationOpen, setEndIsolationOpen] = useState(false);
  const [addDiseaseOpen, setAddDiseaseOpen] = useState(false);
  const [endDiseaseOpen, setEndDiseaseOpen] = useState(false);
  const [changeStatusOpen, setChangeStatusOpen] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const theme = useTheme();
  const {petId} = useParams();

  useEffect(() => {
    if(petId && refresh)
    getAnimal(petId).then((res) => {
      setAnimalData(res);
      setRefresh(false)
    });
  }, [petId, refresh]);

  useEffect(() => {
    if(petId)
    getAnimal(petId).then((res) => {
      setAnimalData(res);
    });
  }, []);
  return (    
    <> 
    { 
    animalData === null ? <>Loading...</> :
    <>
      <Box height={"10%"}>
        <Typography
          variant="h5"
          fontWeight={600}
          color={theme.palette.text.primary}
          textAlign={"center"}
        >
          Profil zwierzęcia: {animalData?.attributes.name}
        </Typography>
      </Box>
      <Box
        sx={{
          height: "90%",
          display: "flex",
          justifyContent: "start",
          flexDirection: "column",
          width: "100%",
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
                width: { xs: "100%", xl: "50%" },
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
                <PetManagementInfo data={animalData} setRefresh={setRefresh}/>
                <PetManagementDesc data={animalData} setRefresh={setRefresh}/>
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
            flexDirection: { xs: "column", xl: "row" },
          }}
        >
          <Box
            sx={{
              maxHeight: { xs: "fit-content", lg: "45vh" },
              display: "flex",
              gap: "1rem",
              width: { xs: "100%", xl: "70%" },
              height: "100%",
              flexDirection: { xs: "column", lg: "row" },
            }}
          >
            <PetManagementList title="Historia Izolacji" type="isolation" />
            <PetManagementList title="Historia Chorób" type="disease" />
          </Box>
          <Box
            sx={{
              width: { xs: "100%", xl: "30%" },
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
                disabled={animalData.attributes.adopted ? true : false}
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
                name={animalData.attributes.toAdoption ? "Zablokuj adopcje" : "Odblokuj adopcje"}
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
          data={animalData}
          setRefresh={setRefresh}
        />
        <AddIsolationModal
          setOpen={setAddIsolationOpen}
          open={addIsolationOpen}
          data={animalData}
          setRefresh={setRefresh}
        />
        <AddPetDiseaseModal
          setOpen={setAddDiseaseOpen}
          open={addDiseaseOpen}
          data={animalData}
          setRefresh={setRefresh}
        />
          <ChangeStatusConfirmModal
          setOpen={setChangeStatusOpen}
          open={changeStatusOpen}
          petid={animalData.id}
          animal={animalData}
          setAnimal={setAnimalData}
          setRefresh={setRefresh}
        />
        
      </Box>
      </>}
    </>
  );
};

export default PetManagement;
