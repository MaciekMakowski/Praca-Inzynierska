import {
  Box,
  Container,
  Pagination,
  Typography,
  useTheme,
} from "@mui/material";

import { AnimalType } from "../utils/types/basicTypes";
import AnimalsFilter from "../components/animalsFilter";
import AnimialTile from "../components/animalTile";
import back from "../img/home/back.png";
import { paginationRangeValue } from "../utils/services/pagination";
import shadows from "@mui/material/styles/shadows";
import { useState } from "react";

const OurAnimals = () => {
  const theme = useTheme();
  const [pageCount, setPageCount] = useState<number>(1);
  const [page, setPage] = useState<number>(1);
  const [animalList, setAnimalList] = useState<AnimalType[] | null>(null);
  const changePage = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  return (
    <>
      <Container
        sx={{
          backgroundImage: `url(${back})`,
          backgroundSize: "contain",
        }}
      >
        <Box
          sx={{
            padding: "2rem",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
            }}
          >
            <Typography
              variant="h4"
              fontWeight={600}
              color={theme.palette.text.primary}
              textAlign={"center"}
            >
              Nasi podopieczni
            </Typography>
            <AnimalsFilter />
            <Box
              sx={{
                backgroundColor: theme.palette.background.adminField,
                padding: "1rem",
                boxShadow: shadows[3],
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  gap: "1rem",
                  flexWrap: "wrap",
                  justifyContent: "center",
                }}
              >
                <AnimialTile />
                <AnimialTile />
                <AnimialTile />
                <AnimialTile />
                <AnimialTile />
                <AnimialTile />
                <AnimialTile />
                <AnimialTile />
                <AnimialTile />
                <AnimialTile />
                <AnimialTile />
                <AnimialTile />
                <AnimialTile />
                <AnimialTile />
                <AnimialTile />
                <AnimialTile />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "end",
                }}
              >
                <Typography
                  variant="subtitle1"
                  color={theme.palette.text.primary}
                >
                  <Pagination
                    count={pageCount}
                    page={page}
                    onChange={changePage}
                    size="small"
                  />
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default OurAnimals;
