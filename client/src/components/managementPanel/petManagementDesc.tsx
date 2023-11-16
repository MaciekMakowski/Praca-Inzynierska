import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { useEffect, useState } from "react";

import { AnimalType } from "../../utils/types/basicTypes";
import EditIcon from "@mui/icons-material/Edit";
import EditPetDescModal from "./editPetDescModal";
import ReactMarkdown from "react-markdown";
import shadows from "@mui/material/styles/shadows";

type PetManagementDescProps = {
  data: AnimalType
  setRefresh: React.Dispatch<React.SetStateAction<boolean>>
};

const PetManagementDesc = (props:PetManagementDescProps) => {
  const [descOpen, setDescOpen] = useState(false);
  const theme = useTheme();


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
            {props.data.attributes.toAdoption ? "Do adopcji" : "Nie do adopcji"}
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
            {props.data.attributes.isIsolated ? "Tak" : "Nie"}
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
            {props.data.attributes.isIll ? "Tak" : "Nie"}
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
          <ReactMarkdown>
                      {props.data.attributes.description}
          </ReactMarkdown>

        </Typography>
      </Box>
      <EditPetDescModal open={descOpen} setOpen={setDescOpen} animal={props.data} setRefresh={props.setRefresh}/>
    </Box>
  );
};

export default PetManagementDesc;
