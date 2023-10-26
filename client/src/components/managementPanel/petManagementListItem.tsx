import { Box, Button, Grid, Typography, useTheme } from "@mui/material";

import DiseaseInfoModal from "./diseaseInfoModal";
import { testDiseaseData } from "../../utils/mockups/diagData";
import { useState } from "react";

type PetManagementListItemProps = {
  color: boolean;
  type: "disease" | "isolation"
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
        <DiseaseInfoModal open={open} setOpen={setOpen}  data={testDiseaseData}/>
      )}
      {props.type === "isolation" && (
        <DiseaseInfoModal open={open} setOpen={setOpen}  data={testDiseaseData}/>
      )}
    </Grid>
  );
};

export default PetManagementListItem;
