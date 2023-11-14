import {
  Box,
  Button,
  Grid,
  Pagination,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import { useEffect, useState } from "react";

import DiseaseListItem from "./diseaseListItem";
import { DiseaseType } from "../../utils/types/basicTypes";
import { ListProps } from "../../utils/types/propsTypes";
import { getDiseases } from "../../utils/services/gets";

const DiseaseList = (props:ListProps) => {
  const theme = useTheme();
  const [diseasesList, setDiseasesList] = useState<DiseaseType[]>([]);

  useEffect(() => {
    if(props.refreshList)
    getDiseases().then((res) => {
      setDiseasesList(res);
      props.setRefreshList(false);
    });
  }, [props.refreshList]);

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.background.adminField,
        flexGrow: 1,
        height: "100%",
        textAlign: "center",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        padding: "1rem",
        gap: "1rem",
        borderRadius: "1rem",
        boxShadow: theme.shadows[3],
        minWidth: { xs: "100%", lg: "550px" },
      }}
    >
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          gap: "1rem",
        }}
      >
        <Box
          sx={{
            display: "flex",
            gap: "1rem",
          }}
        >
          <Button variant="contained">Szukaj</Button>
          <TextField size="small" label="Wyszukaj" />
        </Box>
      </Box>
      <Grid
        container
        spacing={0}
        sx={{
          width: { xs: "100%", lg: "100%" },
        }}
      >
        <Grid item xs={2}>
          <Typography
            variant="subtitle1"
            color={theme.palette.primary.main}
            fontWeight={600}
          >
            Nazwa
          </Typography>
        </Grid>
        <Grid item xs={6} lg={7.2}>
          <Typography
            variant="subtitle1"
            color={theme.palette.primary.main}
            fontWeight={600}
          >
            Objawy
          </Typography>
        </Grid>
        <Grid item xs={3.2} lg={2.2}></Grid>
      </Grid>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          height: "85%",
          maxHeight: { xs: "40vh", lg: "85%" },
          overflowY: "auto",
        }}
      >
        {diseasesList.map((disease, i) => {
          return (
            <DiseaseListItem key={i} color={i % 2 == 0} disease={disease} />
          );
        })}
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "end",
        }}
      >
        <Typography variant="subtitle1" color={theme.palette.text.primary}>
          <Pagination count={10} size="small" />
        </Typography>
      </Box>
    </Box>
  );
};

export default DiseaseList;
