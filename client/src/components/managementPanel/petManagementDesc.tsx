import { Box, IconButton, Typography, useTheme } from "@mui/material";

import EditIcon from "@mui/icons-material/Edit";
import EditPetDescModal from "./editPetDescModal";
import { PetManagementProps } from "../../utils/types/basicTypes";
import shadows from "@mui/material/styles/shadows";
import { useState } from "react";

const PetManagementDesc = (props:PetManagementProps) => {
  const [descOpen, setDescOpen] = useState(false);
  const theme = useTheme();
  const [data, setData] = useState(props.data ? props.data : {
    status: "Brak danych",
    isIsolated: false,
    isIll: false,
    desc: "Brak danych"
  });

  return (
    <Box
      sx={{
        boxSizing: "border-box",
        height: {xs:"100%", md:"100%", xl:"60%"},
        width:"100%",
        display: "flex",
        backgroundColor: theme.palette.background.adminField,
        borderRadius: "1rem",
        padding: "1rem",
        boxShadow: shadows[3],
      }}
    >
      <Box
        sx={{
          width: {xs:"30%", md:'20%'},
          display: "flex",
          flexDirection: "column",
          gap: "0.3rem",
        }}
      >
        <Box>
          <Typography
            variant="body1"
            fontWeight={600}
            color={theme.palette.text.primary}
          >
            Status:
          </Typography>
          <Typography variant="body1" color={theme.palette.text.primary}>
            {data.status}
          </Typography>
        </Box>
        <Box>
          <Typography
            variant="body1"
            fontWeight={600}
            color={theme.palette.text.primary}
          >
            Izolowany:
          </Typography>
          <Typography variant="body1" color={theme.palette.text.primary}>
            {data.isIsolated ? "Tak" : "Nie"}
          </Typography>
        </Box>
        <Box>
          <Typography
            variant="body1"
            fontWeight={600}
            color={theme.palette.text.primary}
          >
            Powód izolacji:
          </Typography>
          <Typography variant="body1" color={theme.palette.text.primary}>
            Brak
          </Typography>
        </Box>
        <Box>
          <Typography
            variant="body1"
            fontWeight={600}
            color={theme.palette.text.primary}
          >
            Chory:
          </Typography>
          <Typography variant="body1" color={theme.palette.text.primary}>
            {data.isIll ? "Tak" : "Nie"}
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          width: {xs:"70%",md:"80%"},
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Typography
            variant="subtitle2"
            color={theme.palette.text.primary}
            fontWeight={600}
          >
            Opis
          </Typography>
          <IconButton size="small" onClick={() => setDescOpen(true)}>
            <EditIcon />
          </IconButton>
        </Box>
        <Typography variant="caption" textOverflow={"ellipsis"}>
          {data.desc}
        </Typography>
      </Box>
      <EditPetDescModal open={descOpen} setOpen={setDescOpen} data={props.data}/>
    </Box>
  );
};

export default PetManagementDesc;
