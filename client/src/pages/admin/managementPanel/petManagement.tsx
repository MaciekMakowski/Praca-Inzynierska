import { AnimalInfoType, AnimalType, DiseaseType, IsolationType, PetDiseaseType } from "../../../utils/types/basicTypes";
import { Box, Typography, useTheme } from "@mui/material";
import { getAnimal, getAnimalDiseases, getAnimalInfo, getAnimalIsolations, getDiseases } from "../../../utils/services/gets";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";

import AddAdoptionModal from "../../../components/managementPanel/addAdoptionModal";
import AddHomeIcon from "@mui/icons-material/AddHome";
import AddIsolationModal from "../../../components/managementPanel/addPetIsolationModal";
import AddPetDiseaseModal from "../../../components/managementPanel/addPetDiseaseModal";
import BlockIcon from "@mui/icons-material/Block";
import BorderAllIcon from "@mui/icons-material/BorderAll";
import ChangeStatusConfirmModal from "../../../components/managementPanel/changeStatusConfirmModal";
import CoronavirusIcon from "@mui/icons-material/Coronavirus";
import ManagementButton from "../../../components/managementPanel/managementButton";
import PetManagementDesc from "../../../components/managementPanel/petManagementDesc";
import PetManagementImages from "../../../components/managementPanel/petManagementImages";
import PetManagementInfo from "../../../components/managementPanel/petManagementInfo";
import PetManagementList from "../../../components/managementPanel/petManagementList";

const PetManagement = () => {
  const [animalInfoData, setAnimalInfoData] = useState<AnimalInfoType | null>(null);
  const [adoptionOpen, setAdoptionOpen] = useState(false);
  const [addIsolationOpen, setAddIsolationOpen] = useState(false);
  const [addDiseaseOpen, setAddDiseaseOpen] = useState(false);
  const [changeStatusOpen, setChangeStatusOpen] = useState(false);
  const [refresh, setRefresh] = useState(true);
  const theme = useTheme();
  const { petId } = useParams();


  const getAll = () => {
    if (petId) {
      getAnimalInfo(petId).then((res) => {
        if(res)
        setAnimalInfoData(res);
      });
    }
  }

  useEffect(() => {
    if(refresh){
      getAll();
      setRefresh(false);
    }
  }, [petId, refresh]);
  return (
    <>
      {animalInfoData === null ? (
        <>Loading...</>
      ) : (
        <>
          <Box height={"10%"}>
            <Typography
              variant="h5"
              fontWeight={600}
              color={theme.palette.text.primary}
              textAlign={"center"}
            >
              Profil zwierzęcia: {animalInfoData.animal.attributes.name}
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
                    <PetManagementInfo
                      data={animalInfoData.animal}
                      setRefresh={setRefresh}
                    />
                    <PetManagementDesc
                      data={animalInfoData.animal}
                      setRefresh={setRefresh}
                    />
                  </Box>
                </Box>
                <PetManagementImages animalId={animalInfoData.animal.id} images={animalInfoData.animal.attributes.images} setRefresh={setRefresh}/>
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
                <PetManagementList
                  title="Historia Izolacji"
                  type="isolation"
                  data={animalInfoData.isolations}
                />
                <PetManagementList
                  title="Historia Chorób"
                  type="disease"
                  data={animalInfoData.petDiseases}
                />
              </Box>
              <Box
                sx={{
                  width: { xs: "100%", xl: "30%" },
                  height: "100%",
                  textAlign: "center",
                  boxSizing: "border-box",
                  display: "flex",
                  flexDirection: {xs:"column", sm:"row", xl:"column"},
                  padding: "1rem",
                  gap: "1rem",
                  borderRadius: "1rem",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-around",
                    width: {xs:'100%',},
                    gap: "1rem",
                  }}
                >
                  <ManagementButton
                    name="Rozpocznij Adopcję"
                    ico={AddHomeIcon}
                    disabled={animalInfoData.animal.attributes.toAdoption ? animalInfoData.animal.attributes.adopted ? true : false : true}
                    foo={() => setAdoptionOpen(true)}
                  />
                  <ManagementButton
                    name="Dodaj Izolacje"
                    ico={BorderAllIcon}
                    disabled={animalInfoData.animal.attributes.isIsolated}
                    foo={() => setAddIsolationOpen(true)}
                  />
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-around",
                    width: "100%",
                    gap: "1rem",
                  }}
                >
                  <ManagementButton
                    name={
                      animalInfoData.animal.attributes.toAdoption
                        ? "Zablokuj adopcje"
                        : "Odblokuj adopcje"
                    }
                    ico={BlockIcon}
                    disabled={false}
                    foo={() => setChangeStatusOpen(true)}
                  />
                  <ManagementButton
                    name="Dodaj Chorobę"
                    ico={CoronavirusIcon}
                    disabled={animalInfoData.animal.attributes.isIll}
                    foo={() => setAddDiseaseOpen(true)}
                  />
                </Box>
              </Box>
            </Box>
            <AddAdoptionModal
              setOpen={setAdoptionOpen}
              open={adoptionOpen}
              data={animalInfoData.animal}
              setRefresh={setRefresh}
            />
            <AddIsolationModal
              setOpen={setAddIsolationOpen}
              open={addIsolationOpen}
              animal={animalInfoData.animal}
              setRefresh={setRefresh}
            />
            <AddPetDiseaseModal
              setOpen={setAddDiseaseOpen}
              open={addDiseaseOpen}
              animal={animalInfoData.animal}
              setRefresh={setRefresh}
              diseases={animalInfoData.diseases}
            />
            <ChangeStatusConfirmModal
              setOpen={setChangeStatusOpen}
              open={changeStatusOpen}
              petid={animalInfoData.animal.id}
              animal={animalInfoData.animal}
              setAnimal={setAnimalInfoData}
              setRefresh={setRefresh}
            />
          </Box>
        </>
      )}
    </>
  );
};

export default PetManagement;
