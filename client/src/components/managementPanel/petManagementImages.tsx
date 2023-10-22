import { Box, Button, ImageList, Typography, useTheme } from "@mui/material";
import shadows from "@mui/material/styles/shadows";
const PetManagementImages = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        width: "50%",
        height: "400px",
        display: "flex",
        flexDirection: "column",
        backgroundColor: theme.palette.background.adminField,
        borderRadius: "1rem",
        padding: "0.5rem",
        boxSizing: "border-box",
        boxShadow: shadows[3],
      }}
    >
      <Typography variant="subtitle1" color={theme.palette.text.primary} p={0}>
        Zdjęcia
      </Typography>
      <ImageList
        sx={{
          boxSizing: "border-box",
          height: "100%",
          m: 0,
        }}
      >
        <Button
          sx={{
            width: "200px",
            height: "100px",
            border: `2px solid ${theme.palette.primary.main}`,
            borderRadius: "0.5rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
          }}
        >
          <Typography variant="h3">+</Typography>
        </Button>
      </ImageList>
    </Box>
  );
};

export default PetManagementImages;
