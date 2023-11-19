import { AnimalType, DiseaseType, IsolationType, PetDiseaseType } from "../../../utils/types/basicTypes";
import { Box, Typography, useTheme } from "@mui/material";
import { getAnimal, getAnimalDiseases, getAnimalIsolations, getDiseases } from "../../../utils/services/gets";
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
  const [animalData, setAnimalData] = useState<AnimalType | null>(null);
  const [animalIsolations, setAnimalIsolations] = useState<IsolationType[]>([]);
  const [animalDiseases, setAnimalDiseases] = useState<PetDiseaseType[]>([]); 
  const [diseaesList, setDiseasesList] = useState<DiseaseType[]>([]);
  const [adoptionOpen, setAdoptionOpen] = useState(false);
  const [addIsolationOpen, setAddIsolationOpen] = useState(false);
  const [addDiseaseOpen, setAddDiseaseOpen] = useState(false);
  const [changeStatusOpen, setChangeStatusOpen] = useState(false);
  const [refresh, setRefresh] = useState(true);
  const theme = useTheme();
  const { petId } = useParams();


  const getAll = () => {
    if (petId) {
      getAnimal(petId).then((res) => {
        if(res){
                  setAnimalData(res);
        }
      });
      getAnimalIsolations(petId).then((res) => {
        if (res) {
          setAnimalIsolations(res.data);
        }
      });
      getAnimalDiseases(petId).then((res) => {
        if(res){
          setAnimalDiseases(res.data);
        }
      })
      getDiseases(0,0).then((res) => {
        if(res){
          setDiseasesList(res.data);
        }
      })
    }
  }

  useEffect(() => {
    if(refresh)
    getAll();
    setRefresh(false);
  }, [petId, refresh]);

  useEffect(() => {
    getAll();
  }, []);
  return (
    <>
      {animalData === null ? (
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
                    <PetManagementInfo
                      data={animalData}
                      setRefresh={setRefresh}
                    />
                    <PetManagementDesc
                      data={animalData}
                      setRefresh={setRefresh}
                    />
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
                <PetManagementList
                  title="Historia Izolacji"
                  type="isolation"
                  data={animalIsolations}
                  refresh={refresh}
                />
                <PetManagementList
                  title="Historia Chorób"
                  type="disease"
                  data={animalDiseases}
                  refresh={refresh}
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
                    disabled={animalData.attributes.adopted ? true : false}
                    foo={() => setAdoptionOpen(true)}
                  />
                  <ManagementButton
                    name="Dodaj Izolacje"
                    ico={BorderAllIcon}
                    disabled={animalData.attributes.isIsolated}
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
                      animalData.attributes.toAdoption
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
                    disabled={animalData.attributes.isIll}
                    foo={() => setAddDiseaseOpen(true)}
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
              animal={animalData}
              setRefresh={setRefresh}
            />
            <AddPetDiseaseModal
              setOpen={setAddDiseaseOpen}
              open={addDiseaseOpen}
              animal={animalData}
              setRefresh={setRefresh}
              diseases={diseaesList}
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
        </>
      )}
    </>
  );
};

export default PetManagement;
