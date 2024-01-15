import { Box, Button, Typography, useTheme } from "@mui/material";
import { useEffect, useState } from "react";

import { useParams } from "react-router";
import Loader from "../../../components/loader";
import EditIsolationModal from "../../../components/managementPanel/modals/editIsolationModal";
import { getIsolation } from "../../../utils/services/gets";
import { IsolationType } from "../../../utils/types/basicTypes";

const IsolationDetails = () => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [isolationDataDetails, setIsolationDataDetails] =
    useState<IsolationType>();
  const { isolationId } = useParams();
  const [refresh, setRefresh] = useState(false);
  let splitString: JSX.Element[] = [];
  if (isolationDataDetails) {
    const formattedString = JSON.stringify(
      isolationDataDetails.attributes.description,
      null,
      2
    )
      .replace(/\\n/g, "\n")
      .slice(1, -1);

    splitString = formattedString.split("\n").map((line, index) => (
      <span key={index}>
        {line}
        <br />
      </span>
    ));
  }

  useEffect(() => {
    if (isolationId && !refresh)
      getIsolation(isolationId).then((res) => {
        setIsolationDataDetails(res);
      });
  }, [isolationId]);

  useEffect(() => {
    if (refresh && isolationId)
      getIsolation(isolationId).then((res) => {
        setIsolationDataDetails(res);
        setRefresh(false);
      });
  }, [refresh]);

  return (
    <>
      {isolationDataDetails === undefined ? (
        <Loader />
      ) : (
        <>
          <Typography
            variant="h4"
            fontWeight={600}
            color={theme.palette.text.primary}
          >
            Szczegóły izolacji
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
                width: "50%",
              }}
            >
              <Typography
                variant="h6"
                color={theme.palette.text.primary}
                fontWeight={600}
              >
                Izolacja zwierzęcia
                <Typography variant="body1">
                  {" "}
                  {isolationDataDetails.attributes.animal.attributes.name}
                </Typography>
              </Typography>
              <Typography
                variant="subtitle1"
                color={theme.palette.text.primary}
                fontWeight={600}
              >
                Data rozpoczęcia
                <Typography variant="body1">
                  {" "}
                  {isolationDataDetails.attributes.startDate}
                </Typography>
              </Typography>
              <Typography
                variant="subtitle1"
                color={theme.palette.text.primary}
                fontWeight={600}
              >
                Data zakończenia
                <Typography variant="body1">
                  {" "}
                  {isolationDataDetails.attributes.endDate}
                </Typography>
              </Typography>
              <Typography
                variant="subtitle1"
                color={theme.palette.text.primary}
                fontWeight={600}
              >
                Powód
                <Typography variant="body1">
                  {" "}
                  {isolationDataDetails.attributes.reason}
                </Typography>
              </Typography>
              <Typography
                variant="subtitle1"
                color={theme.palette.text.primary}
                fontWeight={600}
              >
                Opis
                <Typography variant="body1"> {splitString}</Typography>
              </Typography>
              <Typography
                variant="subtitle1"
                color={theme.palette.text.primary}
                fontWeight={600}
              >
                Status
                <Typography variant="body1">
                  {" "}
                  {isolationDataDetails.attributes.status}
                </Typography>
              </Typography>
              <Box>
                {isolationDataDetails.attributes.status !== "Zakończona" && (
                  <Button variant="contained" onClick={() => setOpen(true)}>
                    Edytuj
                  </Button>
                )}
              </Box>
            </Box>
          </Box>
          <EditIsolationModal
            setOpen={setOpen}
            open={open}
            data={isolationDataDetails}
            setRefresh={setRefresh}
          />
        </>
      )}
    </>
  );
};

export default IsolationDetails;
