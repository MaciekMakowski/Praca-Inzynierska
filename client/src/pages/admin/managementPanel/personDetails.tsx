import { Box, Grid, Typography, useTheme } from "@mui/material";
import { useEffect, useState } from "react";

import EditPersonModal from "../../../components/managementPanel/modals/editPersonModal";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import EventNoteIcon from "@mui/icons-material/EventNote";
import FaceRetouchingNaturalIcon from "@mui/icons-material/FaceRetouchingNatural";
import GuestVisitHistory from "../../../components/managementPanel/lists/guestVisitHistory";
import ManagementButton from "../../../components/managementPanel/managementButton";
import PersonOffIcon from "@mui/icons-material/PersonOff";
import { PersonType } from "../../../utils/types/basicTypes";
import VolunteerMeetingsList from "../../../components/managementPanel/lists/volunteerMeetingsList";
import { getPerson } from "../../../utils/services/gets";
import shadows from "@mui/material/styles/shadows";
import { useParams } from "react-router";

const PersonDetails = () => {
  const theme = useTheme();
  const { type, id } = useParams();
  const [refresh, setRefresh] = useState(false);
  const [personData, setPersonData] = useState<PersonType>();
  const [editPerson, setEditPerson] = useState(false);

  const getAll = () => {
    if (id && type) {
      getPerson(type, id).then((res) => {
        if (res) {
          setPersonData(res);
        }
      });
    }
  };

  useEffect(() => {
    if (refresh) getAll();
    setRefresh(false);
  }, [id, refresh]);

  useEffect(() => {
    getAll();
  }, []);

  return (
    <>
      {personData && (type === "volunteer" || type === "guest") ? (
        <>
          <Box height={"10%"}>
            <Typography
              variant="h4"
              fontWeight={600}
              color={theme.palette.text.primary}
            >
              Profil {type == "guest" ? "gościa" : "wolontariusza"} o id {id}
            </Typography>
          </Box>

          <Box
            sx={{
              height: "90%",
              display: "flex",
              justifyContent: "start",
              flexDirection: "column",
              gap: "1rem",
              width: "100%",
            }}
          >
            <Box
              sx={{
                display: "flex",
                backgroundColor: theme.palette.background.adminField,
                padding: "1rem",
                boxSizing: "border-box",
                justifyContent: "space-around",
                boxShadow: shadows[3],
                flexDirection: { xs: "column", md: "row" },
              }}
            >
              <Box>
                <Typography
                  variant="body1"
                  fontWeight={600}
                  color={theme.palette.text.primary}
                >
                  Imię
                </Typography>
                <Typography
                  variant="body1"
                  textAlign={{ xs: "start", md: "center" }}
                  color={theme.palette.text.primary}
                >
                  {personData.attributes.name}
                </Typography>
              </Box>
              <Box>
                <Typography
                  variant="body1"
                  fontWeight={600}
                  color={theme.palette.text.primary}
                >
                  Nazwisko
                </Typography>
                <Typography
                  variant="body1"
                  textAlign={{ xs: "start", md: "center" }}
                  color={theme.palette.text.primary}
                >
                  {personData.attributes.lastName}
                </Typography>
              </Box>
              <Box>
                <Typography
                  variant="body1"
                  fontWeight={600}
                  color={theme.palette.text.primary}
                >
                  Płeć
                </Typography>
                <Typography
                  variant="body1"
                  textAlign={{ xs: "start", md: "center" }}
                  color={theme.palette.text.primary}
                >
                  {personData.attributes.sex}
                </Typography>
              </Box>
              <Box>
                <Typography
                  variant="body1"
                  fontWeight={600}
                  color={theme.palette.text.primary}
                >
                  Data urodzin
                </Typography>
                <Typography
                  variant="body1"
                  textAlign={{ xs: "start", md: "center" }}
                  color={theme.palette.text.primary}
                >
                  {personData.attributes.birthDate}
                </Typography>
              </Box>
              <Box>
                <Typography
                  variant="body1"
                  fontWeight={600}
                  color={theme.palette.text.primary}
                >
                  Number telefonu
                </Typography>
                <Typography
                  variant="body1"
                  textAlign={{ xs: "start", md: "center" }}
                  color={theme.palette.text.primary}
                >
                  {personData.attributes.phoneNumber}
                </Typography>
              </Box>
              <Box>
                <Typography
                  variant="body1"
                  fontWeight={600}
                  color={theme.palette.text.primary}
                >
                  Email
                </Typography>
                <Typography
                  variant="body1"
                  textAlign={{ xs: "start", md: "center" }}
                  color={theme.palette.text.primary}
                >
                  {personData.attributes.email}
                </Typography>
              </Box>
              <Box>
                <Typography
                  variant="body1"
                  fontWeight={600}
                  color={theme.palette.text.primary}
                >
                  PESEL
                </Typography>
                <Typography
                  variant="body1"
                  textAlign={{ xs: "start", md: "center" }}
                  color={theme.palette.text.primary}
                >
                  {personData.attributes.pesel}
                </Typography>
              </Box>
              <Box>
                <Typography
                  variant="body1"
                  fontWeight={600}
                  color={theme.palette.text.primary}
                >
                  Miasto
                </Typography>
                <Typography
                  variant="body1"
                  textAlign={{ xs: "start", md: "center" }}
                  color={theme.palette.text.primary}
                >
                  {personData.attributes.city}
                </Typography>
              </Box>
              <Box>
                <Typography
                  variant="body1"
                  fontWeight={600}
                  color={theme.palette.text.primary}
                >
                  Kod pocztowy
                </Typography>
                <Typography
                  variant="body1"
                  textAlign={{ xs: "start", md: "center" }}
                  color={theme.palette.text.primary}
                >
                  {personData.attributes.postCode}
                </Typography>
              </Box>
              <Box>
                <Typography
                  variant="body1"
                  fontWeight={600}
                  color={theme.palette.text.primary}
                >
                  Adres
                </Typography>
                <Typography
                  variant="body1"
                  textAlign={{ xs: "start", md: "center" }}
                  color={theme.palette.text.primary}
                >
                  {personData.attributes.address}
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                height: "85%",
                display: "flex",
                gap: "1rem",
                flexDirection: { xs: "column", lg: "row" },
              }}
            >
              <GuestVisitHistory />
              {type == "guest" ? null : <VolunteerMeetingsList />}
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: { xs: "row", lg: "column" },
                    justifyContent: "space-around",
                    gap: "1rem",
                  }}
                >
                  <ManagementButton
                    name="Zarejestruj wejście"
                    ico={EventNoteIcon}
                    disabled={false}
                    foo={() => null}
                  />
                  <ManagementButton
                    name="Zarejestruj wyjście"
                    ico={PersonOffIcon}
                    disabled
                    foo={() => null}
                  />
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: { xs: "row", lg: "column" },
                    justifyContent: "space-around",
                    gap: "1rem",
                  }}
                >
                  <ManagementButton
                    name="Edytuj informacje"
                    ico={FaceRetouchingNaturalIcon}
                    disabled={false}
                    foo={() => setEditPerson(true)}
                  />
                  {type == "guest" ? null : (
                    <ManagementButton
                      name="Zapisz na spotkanie"
                      ico={EventAvailableIcon}
                      disabled={false}
                      foo={() => null}
                    />
                  )}
                </Box>
              </Box>
            </Box>
          </Box>
          <EditPersonModal
            open={editPerson}
            setOpen={setEditPerson}
            person={personData}
            type={type}
            setRefresh={setRefresh}
          />
        </>
      ) : (
        <>Loading...</>
      )}
    </>
  );
};

export default PersonDetails;
