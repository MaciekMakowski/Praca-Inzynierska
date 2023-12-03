import { Box, Typography, useTheme } from "@mui/material";
import { PersonType, VisitType } from "../../../utils/types/basicTypes";
import { getPerson, getPersonVisits } from "../../../utils/services/gets";
import { useEffect, useState } from "react";

import AddMeetingModal from "../../../components/managementPanel/modals/addMeetingModal";
import AddVisitModal from "../../../components/managementPanel/modals/addVisitModal";
import EditPersonModal from "../../../components/managementPanel/modals/editPersonModal";
import EndVisitModal from "../../../components/managementPanel/modals/endVisitModal";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import EventNoteIcon from "@mui/icons-material/EventNote";
import FaceRetouchingNaturalIcon from "@mui/icons-material/FaceRetouchingNatural";
import GuestVisitHistory from "../../../components/managementPanel/lists/guestVisitHistory";
import Loader from "../../../components/loader";
import ManagementButton from "../../../components/managementPanel/managementButton";
import PersonDataTable from "../../../components/managementPanel/personDataTable";
import PersonOffIcon from "@mui/icons-material/PersonOff";
import VolunteerMeetingsList from "../../../components/managementPanel/lists/volunteerMeetingsList";
import { useParams } from "react-router";

const PersonDetails = () => {
  const theme = useTheme();
  const { type, id } = useParams();
  const [refresh, setRefresh] = useState(false);
  const [personData, setPersonData] = useState<PersonType>();
  const [visits, setVisits] = useState<VisitType[]>([]);
  const [editPerson, setEditPerson] = useState(false);
  const [addVisit, setAddVisit] = useState(false);
  const [refreshVisits, setRefreshVisits] = useState(false);
  const [isInShelter, setIsInShelter] = useState(false);
  const [endVisit, setEndVisit] = useState(false);
  const [activeVisit, setActiveVisit] = useState<VisitType | null>(null);
  const [meeting, setMeeting] = useState(false);
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
    if (id && (type === "guest" || type === "volunteer"))
      getPersonVisits(+id, type).then((res) => {
        if (res) setVisits(res);
        setRefreshVisits(false);
      });
  }, [id, type, refreshVisits]);

  useEffect(() => {
    setIsInShelter(visits.some((visit) => visit.attributes.exitTime === null));
    setActiveVisit(
      visits.find((visit) => visit.attributes.exitTime === null) || null
    );
  }, [visits]);

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
            <PersonDataTable {...personData} />
            <Box
              sx={{
                height: "85%",
                display: "flex",
                gap: "1rem",
                flexDirection: { xs: "column", lg: "row" },
              }}
            >
              <GuestVisitHistory
                id={personData.id}
                type={type}
                refresh={refreshVisits}
                visits={visits}
              />
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
                    disabled={isInShelter}
                    foo={() => setAddVisit(true)}
                  />
                  <ManagementButton
                    name="Zarejestruj wyjście"
                    ico={PersonOffIcon}
                    disabled={!isInShelter}
                    foo={() => setEndVisit(true)}
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
                      foo={() => setMeeting(true)}
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
          <AddVisitModal
            open={addVisit}
            setOpen={setAddVisit}
            type={type}
            setRefresh={setRefreshVisits}
            person={personData}
          />
          {activeVisit ? (
            <EndVisitModal
              open={endVisit}
              setOpen={setEndVisit}
              type={type}
              setRefresh={setRefreshVisits}
              person={personData}
              visit={activeVisit}
            />
          ) : null}
          {meeting ? (
            <AddMeetingModal
              open={meeting}
              setOpen={setMeeting}
              person={personData}
            />
          ) : null}
        </>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default PersonDetails;
