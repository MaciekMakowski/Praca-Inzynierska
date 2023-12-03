import {
  Box,
  Button,
  Container,
  Divider,
  Typography,
  useTheme,
} from "@mui/material";

import EastIcon from "@mui/icons-material/East";
import HomeButton from "../components/homeButton";
import ImageComponent from "../components/imageComponent";
import WestIcon from "@mui/icons-material/West";
import back from "../img/home/back.png";
import behavior from "../img/home/behavior.png";
import bookImg from "../img/home/book.png";
import dogAbout1 from "../img/home/dogAbout1.png";
import dogAbout2 from "../img/home/dogAbout2.png";
import dogCircle from "../img/home/dogCircle.png";
import dogHand from "../img/home/dogHand.png";
import dogIco from "../img/home/icoDog.png";
import dogMain from "../img/home/dog.png";
import hands from "../img/home/hands.png";
import heartIco from "../img/home/icoHeart.png";
import homeIco from "../img/home/icoHouse.png";
import { navigateTo } from "../utils/functions/navigators";
import questMark from "../img/home/question.png";
import sup1 from "../img/home/sup1.png";
import sup2 from "../img/home/sup2.png";
import sup3 from "../img/home/sup3.png";
import sup4 from "../img/home/sup4.png";
import sup5 from "../img/home/sup5.png";
import timeImg from "../img/home/time.png";
import tree from "../img/home/tree.png";
import { useNavigate } from "react-router";

const Home = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  const supporters = [sup1, sup2, sup3, sup4, sup5];

  return (
    <Container
      sx={{
        backgroundImage: `url(${back})`,
        backgroundSize: "contain",
        px: { xs: 0, lg: 2 },
      }}
    >
      <Box
        py={5}
        display={"flex"}
        sx={{
          flexDirection: { xs: "column", lg: "row" },
        }}
      >
        <ImageComponent
          src={dogMain}
          alt={"dog"}
          sx={{
            width: { xs: "100%", lg: "50%" },
            height: { xs: "15rem", lg: "25rem" },
          }}
        />
        <Box
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          sx={{
            height: { xs: "fit-content", lg: "25rem" },
            width: { xs: "100%", lg: "60%" },
          }}
          p={3}
          boxSizing={"border-box"}
          height={"25rem"}
          width={"60%"}
          bgcolor={"#fff"}
          gap={3}
        >
          <Typography
            sx={{
              textAlign: "center",
              width: { xs: "100%", lg: "60%" },
            }}
            variant="h3"
            color={theme.palette.text.primary}
          >
            Schronisko dla zwierząt w Olsztynie
          </Typography>
          <Typography
            textAlign={"center"}
            variant={"h5"}
            color={theme.palette.text.primary}
          >
            Nas i nasze zwierzęta wspierają marki
          </Typography>
          <Box display={"flex"} justifyContent={"space-evenly"}>
            {supporters.map((supp) => {
              return (
                <ImageComponent
                  src={supp}
                  alt={"dog"}
                  sx={{
                    width: { xs: "3rem", lg: "5rem" },
                    height: { xs: "3rem", lg: "5rem" },
                  }}
                />
              );
            })}
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          backgroundColor: theme.palette.secondary.main,
          display: "flex",
          alignItems: "end",
        }}
      >
        <Box
          p={3}
          flexGrow={1}
          height={"100%"}
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"end"}
          color={theme.palette.text.secondary}
        >
          <Box
            display={"flex"}
            sx={{
              flexDirection: { xs: "column", lg: "row" },
              justifyContent: { xs: "start", lg: "space-between" },
            }}
          >
            <Typography variant={"h6"}>
              Przekaż 1 % aby pomóc zwierzętom
            </Typography>
            <Typography variant={"h6"}>KRS: 0000000000</Typography>
          </Box>
          <Typography variant={"body1"}>
            Zachęcamy i prosimy o przekazywanie 1% podatku na Stowarzyszenie
            Zwierzyniec Św. Franciszka
          </Typography>
        </Box>
        <ImageComponent
          src={hands}
          alt={"dog"}
          sx={{
            width: { xs: "20rem", md: "10rem", lg: "7rem" },
            height: { xs: "12rem", md: "10rem", lg: "7rem" },
            my: { xs: "auto", md: 0 },
          }}
        />
      </Box>
      <Box
        display={"flex"}
        py={5}
        sx={{
          flexDirection: { xs: "column", lg: "row" },
        }}
      >
        <Box
          display={"flex"}
          boxSizing={"border-box"}
          sx={{
            bgcolor: theme.palette.background.secondary,
            width: { xs: "100%", lg: "50%" },
            height: { xs: "fit-content", lg: "30rem" },
            justifyContent: "space-evenly",
            flexDirection: "column",
            alignItems: "center",
            p: 3,
          }}
        >
          <Typography
            textAlign={"center"}
            variant={"h5"}
            color={theme.palette.text.primary}
          >
            Kim jesteśmy i czym się zajmujemy?
          </Typography>
          <Typography
            textAlign={"center"}
            variant={"h6"}
            color={theme.palette.text.primary}
          >
            Jesteśmy placówką zajmującą się porzuconymi zwierzętami. W naszych
            progach możesz poznać wielu przyjaciół, tych bardziej futrzatych jak
            i tych mniej. Bardzo zależy nam na dobru zwierząt i ich przyszłości,
            dlatego robimy wszystko co w naszej mocy by im pomóc. Mimo to
            schronisko jest jedynie miejscem tymczasowym i liczymy że naszym
            pupilom uda się znaleźc nowy dom.
          </Typography>
        </Box>
        <Box
          display={"flex"}
          sx={{
            width: { xs: "100%", lg: "50%" },
            height: { xs: "14rem", sm: "24rem", lg: "30rem" },
            flexDirection: { xs: "column", md: "row", lg: "column" },
          }}
        >
          <ImageComponent
            src={dogAbout1}
            alt={"dog"}
            sx={{
              width: "100%",
              height: { xs: "100%", lg: "50%" },
            }}
          />
          <ImageComponent
            src={dogAbout2}
            alt={"dog"}
            sx={{
              width: "100%",
              height: { xs: "none", lg: "50%" },
              display: { xs: "none", lg: "block" },
            }}
          />
        </Box>
      </Box>

      <Box display={"flex"} justifyContent={"center"} width={"100%"}>
        <Box
          display={"flex"}
          justifyContent={"space-evenly"}
          border={`2px solid ${theme.palette.secondary.main}`}
          borderRadius={5}
          width={"75%"}
          boxSizing={"border-box"}
          p={3}
          bgcolor={theme.palette.background.secondary}
          sx={{
            flexDirection: { xs: "column", md: "row" },
            gap: { xs: 3, lg: 0 },
          }}
        >
          <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
            <ImageComponent
              src={dogIco}
              alt={"dog"}
              sx={{
                width: { xs: "2rem", lg: "4rem" },
                height: { xs: "2rem", lg: "4rem" },
              }}
            />
            <Typography variant={"h6"} color={theme.palette.text.primary}>
              32
            </Typography>
            <Typography variant={"h6"} color={theme.palette.text.primary}>
              Zwierząt do adopcji
            </Typography>
          </Box>
          <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
            <ImageComponent
              src={heartIco}
              alt={"dog"}
              sx={{
                width: { xs: "2rem", lg: "4rem" },
                height: { xs: "2rem", lg: "4rem" },
              }}
            />
            <Typography variant={"h6"} color={theme.palette.text.primary}>
              40
            </Typography>
            <Typography variant={"h6"} color={theme.palette.text.primary}>
              Adopcji w tym roku
            </Typography>
          </Box>
          <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
            <ImageComponent
              src={homeIco}
              alt={"dog"}
              sx={{
                width: { xs: "2rem", lg: "4rem" },
                height: { xs: "2rem", lg: "4rem" },
              }}
            />
            <Typography variant={"h6"} color={theme.palette.text.primary}>
              40
            </Typography>
            <Typography variant={"h6"} color={theme.palette.text.primary}>
              Przyjętych w tym roku
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box
        mt={5}
        display={"flex"}
        width={"100%"}
        sx={{
          flexDirection: { xs: "column", lg: "row" },
          justifyContent: { xs: "space-evenly" },
          gap: 3,
        }}
      >
        <Box
          display={"flex"}
          alignItems={"space-between"}
          sx={{
            width: { xs: "100%", lg: "fit-content" },
            flexDirection: { xs: "row", lg: "column" },
            justifyContent: "space-evenly",
          }}
        >
          <HomeButton
            title={"Zanim adoptujesz"}
            image={questMark}
            foo={() => navigateTo(navigate, "/adoption")}
          />
          <HomeButton
            title={"Warunki adopcji"}
            image={dogHand}
            foo={() => navigateTo(navigate, "/adoption")}
          />
        </Box>
        <Box
          display={"flex"}
          boxSizing={"border-box"}
          p={3}
          sx={{
            width: { xs: "100%", lg: "60%" },
            height: "40rem",
            bgcolor: theme.palette.background.secondary,
            alignItems: "center",
            flexDirection: "column",
            justifyContent: "center",
          }}
          gap={3}
        >
          <ImageComponent
            src={tree}
            alt={"dog"}
            sx={{
              width: { xs: "13rem", md: "25rem" },
              height: { xs: "13rem", md: "25rem" },
            }}
          />
          <Typography
            sx={{
              width: { xs: "100%", md: "75%" },
              textAlign: "center",
            }}
            variant={"h4"}
            color={theme.palette.text.primary}
          >
            Dziękujemy wolontariuszom i zapraszamy do pomocy więcej informacji w
            zakładce kontakt
          </Typography>
        </Box>
        <Box
          display={"flex"}
          alignItems={"space-between"}
          sx={{
            width: { xs: "100%", lg: "fit-content" },
            flexDirection: { xs: "row", lg: "column" },
            justifyContent: "space-evenly",
          }}
        >
          <HomeButton
            title={"Adopcja tymczasowa"}
            image={timeImg}
            foo={() => null}
          />
          <HomeButton
            title={"Poradnik właściciela"}
            image={bookImg}
            foo={() => null}
          />
        </Box>
      </Box>
      <Box
        display={"flex"}
        boxSizing={"border-box"}
        justifyContent={"center"}
        p={3}
      >
        <Button
          variant={"contained"}
          sx={{
            backgroundColor: theme.palette.secondary.main,
          }}
        >
          Poznaj nas
        </Button>
      </Box>
      <Box
        display={"flex"}
        sx={{
          flexDirection: { xs: "column", lg: "row" },
        }}
      >
        <ImageComponent
          src={behavior}
          alt={"dog"}
          sx={{
            height: { xs: "20rem", lg: "36rem" },
            width: { xs: "100%", lg: "40rem" },
          }}
        />
        <Box
          display={"flex"}
          flexDirection={"column"}
          color={theme.palette.text.primary}
          bgcolor={theme.palette.background.secondary}
          sx={{
            width: { xs: "100%", lg: "50%" },
            height: { xs: "fit-content", lg: "36rem" },
          }}
        >
          <Box bgcolor={theme.palette.secondary.main} width={"100%"}>
            <Typography
              textAlign={"center"}
              variant={"h4"}
              color={theme.palette.text.secondary}
            >
              Strefa behawiorysty
            </Typography>
          </Box>
          <Box
            display={"flex"}
            gap={1}
            alignItems={"center"}
            flexDirection={"column"}
            justifyContent={"center"}
            boxSizing={"border-box"}
            px={1}
            py={2}
          >
            <Typography
              textAlign={"center"}
              variant={"subtitle1"}
              fontWeight={"bold"}
            >
              Jak w schronisku behawiorystki uczą psy chodzenia na smyczy
            </Typography>
            <Box
              display={"flex"}
              flexDirection={"row"}
              justifyContent={"center"}
              alignItems={"center"}
              gap={1}
            >
              <Box
                sx={{
                  backgroundImage: `url(${dogCircle})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  minHeight: "64px",
                  minWidth: "64px",
                  display: { xs: "none", sm: "block" },
                }}
              />

              <Typography variant={"caption"}>
                Niektóre psy, które do nas trafiają panicznie boją się smyczy.
                Takie psy trafiają pod opiekę behawiorystek na tzw. Żółte Boksy.
                Na początku nie chodzą na spacery na zewnątrz tylko wychodzą z
                klatek na wybieg. Potem z czasem mają przypinane tzw. przedłużki
                – krótki kawałek smyczy i oswajają się z faktem, że coś im dynda
                przy […]
              </Typography>
            </Box>
          </Box>
          <Divider />
          <Box
            display={"flex"}
            gap={1}
            alignItems={"center"}
            flexDirection={"column"}
            justifyContent={"center"}
            boxSizing={"border-box"}
            px={1}
            py={2}
          >
            <Typography variant={"subtitle1"} fontWeight={"bold"}>
              Jak podać kotu tabletkę?
            </Typography>
            <Box
              display={"flex"}
              flexDirection={"row"}
              justifyContent={"center"}
              alignItems={"center"}
              gap={1}
            >
              <Box
                sx={{
                  backgroundImage: `url(${dogCircle})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  minHeight: "64px",
                  minWidth: "64px",
                  display: { xs: "none", sm: "block" },
                }}
              />

              <Typography variant={"caption"}>
                Jak podać kotu tabletkę? Nikt się nad tym nie zastanawia, dopóki
                nie musi podać kotu tabletki. Z pozoru taka prosta rzecz, a
                potrafi przysporzyć wielu trudności. Obraz dławiącego się
                tabletką, próbującego wyswobodzić się za pomocą pazurów z
                naszego uścisku kota to nic przyjemnego. Tak samo dla
                właściciela jak i dla samego kota jest to moment niezmiernie
                stresujący. Aby uniknąć […]{" "}
              </Typography>
            </Box>
          </Box>
          <Divider />
          <Box
            display={"flex"}
            gap={1}
            alignItems={"center"}
            flexDirection={"column"}
            justifyContent={"center"}
            boxSizing={"border-box"}
            px={1}
            py={2}
          >
            <Typography variant={"subtitle1"} fontWeight={"bold"}>
              Kocia komunikacja – dźwięki
            </Typography>
            <Box
              display={"flex"}
              flexDirection={"row"}
              justifyContent={"center"}
              alignItems={"center"}
              gap={1}
            >
              <Box
                sx={{
                  backgroundImage: `url(${dogCircle})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  minHeight: "64px",
                  minWidth: "64px",
                  display: { xs: "none", sm: "block" },
                }}
              />

              <Typography variant={"caption"}>
                Koty komunikują się z otoczeniem za pomocą sygnałów dźwiękowych,
                zapachowych i mowy ciała. Kocia komunikacja jest bardzo
                rozbudowana i często mylnie rozumiana przez człowieka jako kocia
                złośliwość. Komunikacja werbalnaDzikie dorosłe koty miauczą
                bardzo rzadko, nie potrzebują tego rodzaju komunikatów do
                porozumiewania się między sobą. Miauczenie kota powstaje w
                wyniku socjalizacji z człowiekiem. […]
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box boxSizing={"border-box"} py={3} display={"flex"}>
        {/* <Box
          bgcolor={theme.palette.background.secondary}
          boxSizing={"border-box"}
          p={2}
          width={"100%"}
          display={"flex"}
          justifyContent={"center"}
          flexDirection={"column"}
          gap={2}
        >
          {/* <Box
            display={"flex"}
            sx={{
              justifyContent: "space-between",
            }}
          >
            <WestIcon
              sx={{ display: "block" }}
              color={"primary"}
              fontSize={"large"}
            />
            <Typography
              textAlign={"center"}
              variant={"h5"}
              color={theme.palette.text.primary}
            >
              Wybieram seniora
            </Typography>
            <EastIcon
              sx={{ display: "block" }}
              color={"primary"}
              fontSize={"large"}
            />
          </Box> */}
        {/* <Box
            width={"100%"}
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Box
              display={"flex"}
              justifyContent={"space-evenly"}
              width={"100%"}
              sx={{
                flexDirection: "row",
                flexWrap: { xs: "wrap", lg: "none" },
              }}
            >
              {oldDogs.map((dog) => {
                return (
                  <Box
                    bgcolor={theme.palette.background.light}
                    borderRadius={"0 0 5% 5%"}
                    display={"flex"}
                    sx={{
                      flexDirection: "column",
                      minWidth: "150px",
                      marginBottom: { xs: 3, md: 0 },
                    }}
                  >
                    <Box
                      sx={{
                        backgroundImage: `url(${dog.image})`,
                        backgroundSize: "cover",
                        minHeight: { xs: "7rem", sm: "7rem" },
                        minWidth: { xs: "7rem", sm: "10rem" },
                      }}
                    />
                    <Box
                      display={"flex"}
                      flexDirection={"column"}
                      p={1}
                      boxSizing={"border-box"}
                    >
                      <Typography
                        variant={"subtitle1"}
                        fontWeight={"bold"}
                        color={theme.palette.text.secondary}
                      >
                        {dog.name}
                      </Typography>
                      <Typography
                        variant={"subtitle1"}
                        color={theme.palette.text.secondary}
                      >
                        {dog.sex}
                      </Typography>
                      <Box
                        display={"flex"}
                        sx={{
                          flexDirection: { xs: "column", md: "row" },
                          justifyContent: "space-between",
                        }}
                      >
                        <Typography
                          variant={"subtitle1"}
                          color={theme.palette.text.secondary}
                        >
                          Wiek: {dog.age}
                        </Typography>
                      </Box>
                    </Box>
                    <Button
                      sx={{
                        backgroundColor: theme.palette.primary.main,
                        color: theme.palette.text.secondary,
                        "&:hover": {
                          backgroundColor: theme.palette.primary.dark,
                        },
                      }}
                    >
                      Więcej
                    </Button>
                  </Box>
                );
              })}
            </Box>
          </Box>
        </Box> */}
      </Box>
    </Container>
  );
};

export default Home;
