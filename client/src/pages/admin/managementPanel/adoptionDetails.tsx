import { Box, Button, Typography, useTheme } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";

import CancelIcon from "@mui/icons-material/Cancel";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import shadows from "@mui/material/styles/shadows";
import Loader from "../../../components/loader";
import ManagementButton from "../../../components/managementPanel/managementButton";
import ConfirmAdoptionChange from "../../../components/managementPanel/modals/confirmAdoptionChange";
import { navigateTo } from "../../../utils/functions/navigators";
import { getAdoption } from "../../../utils/services/gets";
import { AdoptionType } from "../../../utils/types/basicTypes";

const AdoptionDetails = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const { adoptionId } = useParams();
  const [adoption, setAdoption] = useState<AdoptionType | null>(null);
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [rejectOpen, setRejectOpen] = useState(false);

  useEffect(() => {
    if (adoptionId) {
      getAdoption(adoptionId).then((res) => {
        if (res) {
          setAdoption(res);
        }
      });
    }
  }, [adoptionId]);

  return (
    <>
      {!adoption ? (
        <Loader />
      ) : (
        <>
          <Typography
            variant="h5"
            fontWeight={600}
            color={theme.palette.text.primary}
          >
            Szczegóły Adopcji
          </Typography>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              height: "90%",
              gap: "1rem",
              flexDirection: { xs: "column", md: "row" },
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                height: "fit-content",
                backgroundColor: theme.palette.background.adminField,
                padding: "1rem",
                borderRadius: "1rem",
                boxShadow: shadows[3],
              }}
            >
              <Typography
                variant="h6"
                fontWeight={600}
                color={theme.palette.text.primary}
              >
                Założenie Wniosku
              </Typography>
              <Typography variant="body1" color={theme.palette.text.primary}>
                Data złożenia:
                <span style={{ fontWeight: 600 }}>
                  {adoption.attributes.date}
                </span>
              </Typography>
              <Box>
                <Typography variant="body1" color={theme.palette.text.primary}>
                  Osoba Składająca Wniosek:{" "}
                  <span style={{ fontWeight: 600 }}>
                    {adoption.attributes.guest.attributes.name}{" "}
                    {adoption.attributes.guest.attributes.lastName}
                  </span>
                  <Typography variant="body2">
                    Numer osoby składającej wniosek:{" "}
                    <span style={{ fontWeight: 600 }}>
                      {adoption.attributes.guest.id}
                    </span>
                  </Typography>
                </Typography>
                <Button
                  onClick={() =>
                    navigateTo(
                      navigate,
                      `/admin/management/personDetails/guest/${adoption.attributes.guest.id}`
                    )
                  }
                >
                  Przejdz do profilu
                </Button>
              </Box>
              <Box>
                <Typography variant="body1" color={theme.palette.text.primary}>
                  Wniosek dotyczy zwierzęcia:{" "}
                  <span style={{ fontWeight: 600 }}>
                    {adoption.attributes.animal.attributes.name}
                  </span>
                  <Typography variant="body2">
                    Numer zwierzęcia:{" "}
                    <span style={{ fontWeight: 600 }}>
                      {adoption.attributes.animal.id}
                    </span>
                  </Typography>
                </Typography>
                <Button
                  onClick={() =>
                    navigateTo(
                      navigate,
                      `/admin/management/animals/${adoption.attributes.animal.id}`
                    )
                  }
                >
                  Przejdz do profilu
                </Button>
              </Box>

              <Typography variant="body1" color={theme.palette.text.primary}>
                Status:{" "}
                <span style={{ fontWeight: 600 }}>
                  {adoption.attributes.status}
                </span>
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "row", md: "column" },
                justifyContent: { xs: "space-between", md: "start" },
                gap: "1rem",
              }}
            >
              <ManagementButton
                name={"Zaakaceptuj adopcje"}
                ico={CheckCircleOutlineIcon}
                foo={() => setConfirmOpen(true)}
                disabled={adoption.attributes.status !== "Oczekująca"}
              />
              <ManagementButton
                name={"Odrzuć adopcje"}
                ico={CancelIcon}
                foo={() => setRejectOpen(true)}
                disabled={adoption.attributes.status !== "Oczekująca"}
              />
            </Box>
          </Box>
          <ConfirmAdoptionChange
            open={confirmOpen}
            setOpen={setConfirmOpen}
            type="accept"
            adoptionId={adoption.id}
          />
          <ConfirmAdoptionChange
            open={rejectOpen}
            setOpen={setRejectOpen}
            type="reject"
            adoptionId={adoption.id}
          />
        </>
      )}
    </>
  );
};

export default AdoptionDetails;
