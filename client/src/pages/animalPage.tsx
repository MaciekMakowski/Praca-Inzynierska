import {
  Box,
  Button,
  Container,
  ImageList,
  ImageListItem,
  Typography,
  useTheme,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { AnimalType } from "../utils/types/basicTypes";
import { ImageUrl } from "../utils/services/url";
import Markdown from "react-markdown";
import back from "../img/home/back.png";
import { getAnimal } from "../utils/services/gets";
import { navigateTo } from "../utils/functions/navigators";

const AnimalPage = () => {
  const { id } = useParams<{ id: string }>();
  const [animal, setAnimal] = useState<AnimalType | null>(null);
  const navigate = useNavigate();
  const theme = useTheme();

  useEffect(() => {
    if (id) {
      getAnimal(id).then((res) => {
        if (res) setAnimal(res);
      });
    }
  }, [id]);

  return (
    <>
      {animal ? (
        <Container
          sx={{
            backgroundImage: `url(${back})`,
            backgroundSize: "contain",
            color: theme.palette.text.primary,
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                boxSizing: "border-box",
                padding: "1rem",
                display: "flex",
                width: "100%",
                justifyContent: "center",
                alignItems: "center",
                gap: "1rem",
              }}
            >
              <Typography variant="h4">{animal.attributes.name}</Typography>
              <Typography variant="body1">#{animal.id}</Typography>
              {animal.attributes.toAdoption && (
                <Button
                sx={{
                  width: { xs: "100%", lg: "fit-content" },
                }}
                variant="contained"
                onClick={() =>
                  navigateTo(navigate, `/ourAnimals/adoption/${id}`)
                }
              >
                Adoptuj mnie
              </Button>
              )}
              
            </Box>
            <Box
              sx={{
                boxSizing: "border-box",
                padding: "1rem",
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                width: "100%",
                gap: "1rem",
                backgroundColor: theme.palette.background.adminField,
              }}
            >
              <ImageList cols={1}>
                {animal.attributes.images ? (
                  animal.attributes.images?.map((image) => {
                    return (
                      <ImageListItem
                        sx={{
                          width: { xs: "100%", md: "300px" },
                        }}
                      >
                        <img
                          src={`${ImageUrl}${image.url}`}
                          alt={animal.attributes.name}
                        />
                      </ImageListItem>
                    );
                  })
                ) : (
                  <></>
                )}
              </ImageList>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: { xs: "center", md: "start" },
                  gap: "0.5rem",
                }}
              >
                <Typography variant="h5">Informacje</Typography>
                <Typography
                  variant="subtitle1"
                  fontWeight={600}
                  sx={{
                    display: "flex",
                    textAlign: "center",
                    gap: "0.5rem",
                    alignItems: "center",
                  }}
                >
                  Płeć:
                  <Typography variant="body1">
                    {animal.attributes.sex}
                  </Typography>
                </Typography>
                <Typography
                  variant="subtitle1"
                  fontWeight={600}
                  sx={{
                    gap: "0.5rem",
                    alignItems: "center",
                    textAlign: { xs: "center", md: "start" },
                  }}
                >
                  Data urodzenia:
                  <Typography variant="body1">
                    {animal.attributes.birthDate}
                  </Typography>
                </Typography>
                <Typography
                  variant="subtitle1"
                  fontWeight={600}
                  sx={{
                    display: "flex",
                    textAlign: "center",
                    gap: "0.5rem",
                    alignItems: "center",
                  }}
                >
                  Rasa:
                  <Typography variant="body1">
                    {animal.attributes.race}
                  </Typography>
                </Typography>
                <Typography
                  variant="subtitle1"
                  fontWeight={600}
                  sx={{
                    display: "flex",
                    textAlign: "center",
                    gap: "0.5rem",
                    alignItems: "center",
                  }}
                >
                  Waga:
                  <Typography variant="body1">
                    {animal.attributes.weight} kg
                  </Typography>
                </Typography>
                <Typography
                  variant="subtitle1"
                  fontWeight={600}
                  sx={{
                    gap: "0.5rem",
                    alignItems: "center",
                    textAlign: { xs: "center", md: "start" },
                  }}
                >
                  Miejsce znalezienia:
                  <Typography variant="body1">
                    {animal.attributes.findPlace}
                  </Typography>
                </Typography>
                <Typography
                  variant="subtitle1"
                  fontWeight={600}
                  sx={{
                    gap: "0.5rem",
                    alignItems: "center",
                    textAlign: { xs: "center", md: "start" },
                  }}
                >
                  Data przyjęcia:
                  <Typography variant="body1">
                    {animal.attributes.dateOfAdmission}
                  </Typography>
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                  width: { xs: "100%", md: "50%" },
                }}
              >
                <Box>
                  <Typography variant="h5">Opis</Typography>
                  <Typography variant="body1">
                    <Markdown>{animal.attributes.description}</Markdown>
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Container>
      ) : (
        <>Loading...</>
      )}
    </>
  );
};

export default AnimalPage;
