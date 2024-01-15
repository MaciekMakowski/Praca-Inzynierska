import { Box, Button, Typography, useTheme } from "@mui/material";
import { useEffect, useState } from "react";

import { useParams } from "react-router";
import Loader from "../../../components/loader";
import EditDiseaseModal from "../../../components/managementPanel/modals/editDiseaseModal";
import { getDisease } from "../../../utils/services/gets";
import { DiseaseType } from "../../../utils/types/basicTypes";

const DiseaseDetails = () => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [disease, setDisease] = useState<DiseaseType | null>(null);
  const [refresh, setRefresh] = useState(false);
  const { diseaseId } = useParams();
  let splitString: JSX.Element[] = [];
  if (disease) {
    const formattedString = JSON.stringify(
      disease.attributes.treatment,
      null,
      2
    ).replace(/\\n/g, "\n");

    splitString = formattedString.split("\n").map((line, index) => (
      <span key={index}>
        {line}
        <br />
      </span>
    ));
  }

  useEffect(() => {
    if (diseaseId && refresh)
      getDisease(diseaseId).then((res) => {
        setDisease(res);
        setRefresh(false);
      });
  }, [diseaseId, refresh]);

  useEffect(() => {
    if (diseaseId)
      getDisease(diseaseId).then((res) => {
        setDisease(res);
      });
  }, []);

  return (
    <>
      {disease === null ? (
        <Loader />
      ) : (
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
                width: "50%",
                gap: "1rem",
              }}
            >
              <Typography
                variant="h6"
                color={theme.palette.text.primary}
                fontWeight={600}
              >
                Nazwa choroby:
                <Typography variant="body1">
                  {" "}
                  {disease.attributes.name}
                </Typography>
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
                <Typography variant="body1"> {splitString}</Typography>
              </Typography>
              <Box>
                <Button variant="contained" onClick={() => setOpen(true)}>
                  Edytuj
                </Button>
              </Box>
            </Box>
          </Box>
          <EditDiseaseModal
            open={open}
            setOpen={setOpen}
            data={disease}
            setRefresh={setRefresh}
          />
        </>
      )}
    </>
  );
};

export default DiseaseDetails;
