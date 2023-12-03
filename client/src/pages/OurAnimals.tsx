import {
  Box,
  Container,
  Pagination,
  Typography,
  useTheme,
} from "@mui/material";
import { useEffect, useState } from "react";

import { AnimalType } from "../utils/types/basicTypes";
import AnimalsFilter from "../components/animalsFilter";
import AnimialTile from "../components/animalTile";
import Loader from "../components/loader";
import back from "../img/home/back.png";
import { getAnimals } from "../utils/services/gets";
import { paginationRangeForAnimals } from "../utils/services/pagination";
import shadows from "@mui/material/styles/shadows";

const OurAnimals = () => {
  const theme = useTheme();
  const [pageCount, setPageCount] = useState<number>(1);
  const [page, setPage] = useState<number>(1);
  const [animalList, setAnimalList] = useState<AnimalType[] | null>(null);
  const changePage = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  useEffect(() => {
    getAnimals(page, paginationRangeForAnimals).then((res) => {
      if (res) {
        setAnimalList(res.data);
        setPageCount(res.meta.pagination.pageCount);
      }
    });
  }, [page]);

  return (
    <>
      <Container
        sx={{
          backgroundImage: `url(${back})`,
          backgroundSize: "contain",
          px: { xs: 0, lg: 2 },
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
                {animalList ? (
                  animalList.map((animal, i) => {
                    return <AnimialTile key={i} animal={animal} />;
                  })
                ) : (
                  <Loader />
                )}
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
