import { Box, IconButton, Typography, useTheme } from "@mui/material";
import shadows from "@mui/material/styles/shadows";
import EditIcon from "@mui/icons-material/Edit";
import { PetManagementProps } from "../../utils/types/basicTypes";

const PetManagementDesc = (props:PetManagementProps) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        height: "60%",
        display: "flex",
        backgroundColor: theme.palette.background.adminField,
        borderRadius: "1rem",
        padding: "0.5rem",
        boxShadow: shadows[3],
      }}
    >
      <Box
        sx={{
          width: "20%",
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
            {props.data.status}
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
            {props.data.isIsolated ? "Tak" : "Nie"}
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
            {props.data.isIll ? "Tak" : "Nie"}
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          width: "80%",
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
          <IconButton size="small">
            <EditIcon />
          </IconButton>
        </Box>
        <Typography variant="caption">
          {props.data.desc}
        </Typography>
      </Box>
    </Box>
  );
};

export default PetManagementDesc;
