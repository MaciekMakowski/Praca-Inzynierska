import { Button, Grid, Typography, useTheme } from "@mui/material";

import InfoModal from "./InfoModal";
import { testDiseaseData } from "../../utils/mockups/adminMenu";
import { useState } from "react";

type PetManagementListItemProps = {
  color: boolean;
  type: "disease" | "isolation";
};

const PetManagementListItem = (props: PetManagementListItemProps) => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  return (
    <Grid
      container
      spacing={0}
      sx={{
        border: props.color ? `1px solid ${theme.palette.primary.main}` : "",
        borderRadius: "0.3rem",
        boxSizing: "border-box",
        paddingY: "0.5rem",
        alignItems: "center",
        backgroundColor: props.color ? "" : theme.palette.background.light,
      }}
    >
      <Grid item xs={3}>
        <Typography
          variant="subtitle1"
          color={
            props.color
              ? theme.palette.primary.main
              : theme.palette.text.secondary
          }
        >
          2022-04-24
        </Typography>
      </Grid>
      <Grid item xs={4}>
        <Typography
          variant="subtitle1"
          color={
            props.color
              ? theme.palette.primary.main
              : theme.palette.text.secondary
          }
          textAlign={"center"}
        >
          Angina
        </Typography>
      </Grid>
      <Grid item xs={2}>
        <Typography
          variant="subtitle1"
          color={
            props.color
              ? theme.palette.primary.main
              : theme.palette.text.secondary
          }
          textAlign={"center"}
        >
          Status
        </Typography>
      </Grid>
      <Grid item xs={3}>
        <Button
          sx={{
            color: props.color
              ? theme.palette.primary.main
              : theme.palette.text.secondary,
          }}
          onClick={() => setOpen(true)}
        >
          Przejdź
        </Button>
      </Grid>

      {props.type === "disease" && (
        <InfoModal
          open={open}
          setOpen={setOpen}
          data={testDiseaseData}
          reason="Nazwa choroby"
          desc="Zalecane leczenie"
          buttonText="Zakończ chorobę"
        />
      )}
      {props.type === "isolation" && (
        <InfoModal
          open={open}
          setOpen={setOpen}
          data={testDiseaseData}
          reason="Powód"
          desc="Opis"
          buttonText="Zakończ izolację"
        />
      )}
    </Grid>
  );
};

export default PetManagementListItem;
