import { Box, Typography, colors, useTheme } from "@mui/material";

import dogAbout1 from "../img/home/dogAbout1.png";
import { useState } from "react";

const AnimialTile = (props: any) => {
  const theme = useTheme();
  const [size, setSize] = useState(1);
  return (
    <Box
        onMouseEnter={() => {
            setSize(1.1);
        }}
        onMouseLeave={() => {
            setSize(1);
        }}
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "250px",
        backgroundColor: theme.palette.secondary.main,
        transition: "all 0.5s ease-in-out",
        borderRadius: "1rem",
        color: theme.palette.text.secondary,
        "&:hover": {
            cursor: "pointer",
            backgroundColor: theme.palette.secondary.light,
            color: theme.palette.text.primary,
          },
      }}
    >
      <Box
        sx={{
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            height: "125px",
            width: "250px",
            backgroundImage: `url(${dogAbout1})`,
            backgroundSize: "contain",
            transition: "all 0.5s ease-in-out",
            transform: `scale(${size})`,
          }}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          boxSizing: "border-box",
          padding: "1rem",
          flexDirection: "column",
        }}
      >
        <Typography variant="subtitle1" fontWeight={600} >
          Puszek
        </Typography>
        <Box
          sx={{
            display: "flex",
            gap: "0.5rem",
          }}
        >
          <Typography variant="caption">
            Samiec,
          </Typography>
          <Typography variant="caption" >
            8 lat,
          </Typography>
          <Typography variant="caption" >
            4 kg
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default AnimialTile;
