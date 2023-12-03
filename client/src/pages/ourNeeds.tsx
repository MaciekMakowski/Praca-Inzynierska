import { Box, Container, useTheme } from "@mui/material";

import ImageComponent from "../components/imageComponent";
import Typography from "@mui/material/Typography";
import back from "../img/home/back.png";
import { flushSync } from "react-dom";
import needsImg from "../img/needs/needsImg.png";

const needs = [
  "karma mokra i sucha dla psów i kotów oraz szczeniąt i kociąt (lepiej kupić mniej a lepszej jakości)",
  "specjalistyczna karma weterynaryjna dla psów i kotów",
  "przysmaki dla psów i kotów",
  "smycze, obroże, szelki, ubranka dla zwierząt",
  "koce, ręczniki, poszewki, czyli cienkie płaskie rzeczy, a w okresie jesienno-zimowym również poduszki i kołdry (tylko i wyłącznie ze sztucznym wypełnieniem)",
  "akcesoria dla zwierząt np. zabawki, drapaki, legowiska, kuwety, transportery i miski.",
];

const OurNeeds = () => {
  const theme = useTheme();

  return (
    <Container
      sx={{
        backgroundImage: `url(${back})`,
        backgroundSize: "contain",
      }}
    >
      <Box py={3}>
        <Box
          display={"flex"}
          flexDirection={"column"}
          bgcolor={theme.palette.background.secondary}
          boxSizing={"border-box"}
          p={3}
          gap={3}
        >
          <Box
            display={"flex"}
            sx={{
              flexDirection: { xs: "column", lg: "row" },
            }}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Box
              sx={{
                width: { xs: "100%", lg: "50%" },
              }}
            >
              <Typography
                variant={"h6"}
                color={theme.palette.text.primary}
                fontWeight={"bold"}
              >
                Darowizny
              </Typography>
              <Typography variant={"body1"} color={theme.palette.text.primary}>
                Nasze zwierzęta same nie poproszą o pomoc, ale my możemy zrobić
                to w ich imieniu. Staramy się jak możemy, ale bez Waszej pomocy
                i darów z dobrego serca dbanie o ich los byłoby o wiele, wiele
                trudniejsze. Dlatego prosimy o wszelkiego rodzaju darowizny jak:
              </Typography>
              <Typography
                variant={"subtitle1"}
                fontWeight={"bold"}
                color={theme.palette.text.primary}
              >
                1. Dary w naturze czyli:
              </Typography>
              {needs.map((need, index) => {
                return (
                  <Typography
                    key={index}
                    variant={"body1"}
                    color={theme.palette.text.primary}
                  >
                    - {need},
                  </Typography>
                );
              })}
            </Box>
            <Box
              sx={{
                width: { xs: "100%", lg: "50%" },
                display:'flex',
                justifyContent:'center',
                alignItems:'center'

              }}
            >
              <ImageComponent
                src={needsImg}
                alt={"needs"}
                sx={{
                  mt: { xs: 3, md: 0 },
                  minWidth: { xs: "15rem", sm: "30rem", lg: "35rem" },
                  minHeight: { xs: "10rem", sm: "20rem", lg: "20rem" },
                }}
              />
            </Box>
          </Box>
          <Box display={"flex"} flexDirection={"column"} gap={3}>
            <Typography variant={"h6"} color={theme.palette.text.primary}>
              NIE PRZYJMUJEMY: MATERACY, KOŁDER I PODUSZEK Z PIERZEM, JEDZENIA
              LUDZKIEGO, UBRAŃ, PORWANYCH I ZNISZCZONYCH RZECZY.
            </Typography>
            <Typography variant={"body1"} color={theme.palette.text.primary}>
              <Typography variant={"subtitle1"} fontWeight={"bold"}>
                {" "}
                2. Wpłata darowizny pieniężnej na konto:{" "}
              </Typography>
              Darowizny pieniężne zasilają nasz skromny budżet i dzięki nim
              możemy lepiej dbać o zwierzęta. Darowizny można wpłacać na konto:
              nr konta: 21 1020 3541 0000 5402 0291 6203 z dopiskiem: na
              potrzeby schroniska.
            </Typography>
            <Typography variant={"body1"} color={theme.palette.text.primary}>
              <Typography variant={"subtitle1"} fontWeight={"bold"}>
                {" "}
                3. Zostań domem tymczasowym:
              </Typography>
              Cały czas szukamy domów tymczasowych dla naszych podopiecznych. Co
              to jest w ogóle dom tymczasowy? Jest to dom, w którym zwierzę
              przebywa przez pewien czas, aż do znalezienia dla niego domu
              stałego. Domy tymczasowe są ratunkiem dla zwierząt, które bardzo
              źle znoszą pobyt w schronisku, które sobie nie radzą, są starsze,
              schorowane lub bardzo młode i potrzebują całodziennej opieki.
              Jeśli jesteś osobą, która chciałaby stać się takim domem
              tymczasowym dla któregoś z naszych podopiecznych- zachęcamy do
              kontaktu. Co ważne, w przypadku chorych zwierząt koszty leczenia
              pokrywa Fundacja Schronisko.{" "}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};
export default OurNeeds;
