import { Box, Button, Typography, useTheme } from "@mui/material";
import { useEffect, useState } from "react";

import { DiseaseType } from "../../../utils/types/basicTypes";
import EditDiseaseModal from "../../../components/managementPanel/editDiseaseModal";
import { getDisease } from "../../../utils/services/gets";
import { useParams } from "react-router";

const DiseaseDetails = () => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [disease, setDisease] = useState<DiseaseType | null>(null)
  const [refresh, setRefresh] = useState(false)
  const {diseaseId} = useParams()

  useEffect(() => {
    if(diseaseId && refresh)
    getDisease(diseaseId).then((res) => {
      setDisease(res);
      setRefresh(false)
    });
  }, [diseaseId, refresh]);

  useEffect(() => {
    if(diseaseId)
    getDisease(diseaseId).then((res) => {
      setDisease(res);
      console.log(diseaseId)
    });
  },[])

  return (
    <>
    {disease === null ? <>Loading...</> :
     <>
     <Typography
       variant="h4"
       fontWeight={600}
       color={theme.palette.text.primary}
     >
       Szczegóły choroby
     </Typography>
     <Box
       sx={{
         height: "90%",
       }}
     >
       <Box
         sx={{
           display: "flex",
           flexDirection: "column",
           gap: "1rem",
         }}
       >
         <Typography
           variant="h6"
           color={theme.palette.text.primary}
           fontWeight={600}
         >
           Nazwa choroby:
           <Typography variant="body1"> {disease.attributes.name}</Typography>
         </Typography>
         <Typography
           variant="subtitle1"
           color={theme.palette.text.primary}
           fontWeight={600}
         >
           Objawy:
           <Typography variant="body1">
             {" "}
             {disease.attributes.description}
           </Typography>
         </Typography>
         <Typography
           variant="subtitle1"
           color={theme.palette.text.primary}
           fontWeight={600}
         >
           Zalecane leczenie:
           <Typography variant="body1">
             {" "}
             {disease.attributes.treatment}
           </Typography>
         </Typography>
         <Box>
           <Button variant="contained" onClick={() => setOpen(true)}>
             Edytuj
           </Button>
         </Box>
       </Box>
     </Box>
     <EditDiseaseModal open={open} setOpen={setOpen} data={disease} setRefresh={setRefresh}/>
   </>
     }
    </>
  );
};

export default DiseaseDetails;
