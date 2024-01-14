import { Box, Typography, useTheme } from "@mui/material";

import dayjs from "dayjs";
import { useState } from "react";
import { useNavigate } from "react-router";
import placeholder from "../img/animals/placeholder.jpg";
import { navigateTo } from "../utils/functions/navigators";
import { ImageUrl } from "../utils/services/url";
import { AnimalType } from "../utils/types/basicTypes";

type AnimalTileProps = {
  animal: AnimalType;
};
const AnimialTile = (props: AnimalTileProps) => {
  const theme = useTheme();
  const navigate = useNavigate();
  const [size, setSize] = useState(1);

  const returnAge = () => {
    const age =
      dayjs(props.animal.attributes.birthDate).diff(dayjs(), "year") * -1;
    if (age < 2) {
      return `${age} rok`;
    } else if (age > 1 && age < 5) {
      return `${age} lata`;
    } else if (age >= 5) {
      return `${age} lat`;
    }
  };

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
      onClick={() => navigateTo(navigate, `/ourAnimals/${props.animal.id}`)}
    >
      <Box
        sx={{
          overflow: "hidden",
        }}
      >
        <Box
          component="img"
          sx={{
            height: "125px",
            width: "250px",
            transition: "all 0.5s ease-in-out",
            transform: `scale(${size})`,
          }}
          src={
            props.animal.attributes.images
              ? `${ImageUrl}${props.animal.attributes.images[0].url}`
              : placeholder
          }
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
        <Typography variant="subtitle1" fontWeight={600}>
          {props.animal.attributes.name}
        </Typography>
        <Box
          sx={{
            display: "flex",
            gap: "0.5rem",
          }}
        >
          <Typography variant="caption">
            {props.animal.attributes.sex}
          </Typography>
          <Typography variant="caption">{returnAge()}</Typography>
          <Typography variant="caption">
            {props.animal.attributes.weight} kg
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default AnimialTile;
