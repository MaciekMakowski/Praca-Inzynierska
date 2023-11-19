import { Box, Button, Typography, useTheme } from "@mui/material";

type dataType = {
  id: number;
  name: string;
};

type PanelInfoSquareProps = {
  title: string;
  data: dataType[];
};

const PanelInfoSquare = (props: PanelInfoSquareProps) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        width: {md:"25%",lg:"250px"},
        height: "fit-content",
        backgroundColor: theme.palette.background.adminField,
        marginLeft: { xs: "1rem", xl: "0rem" },
        borderRadius: "10px",
        boxShadow: theme.shadows[4],
      }}
    >
      <Typography
        textAlign={"center"}
        variant="h6"
        color={theme.palette.text.primary}
      >
        {props.title}
      </Typography>
      <Box
        sx={{
          boxSizing: "border-box",
          gap: "1rem",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            gap: "1rem",
            paddingX: "1rem",
          }}
        >
          <Typography
            variant="subtitle2"
            sx={{
              width: "30px",
              color: theme.palette.text.primary,
            }}
          >
            Id
          </Typography>
          <Typography
            sx={{ width: "100%", textAlign: "right" }}
            variant="subtitle1"
            color={theme.palette.text.primary}
          >
            Imię
          </Typography>
        </Box>
        {props.data.map((item, index) => {
          if (index < 6) {
            return (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  gap: "1rem",
                  paddingX: "1rem",
                  background:
                    index % 2 === 0 ? theme.palette.background.light : "",
                }}
              >
                <Typography
                  variant="subtitle2"
                  sx={{
                    width: "30px",
                    color:
                      index % 2 === 0
                        ? theme.palette.text.secondary
                        : theme.palette.text.primary,
                  }}
                >
                  #{item.id}
                </Typography>
                <Typography
                  sx={{ width: "100%", textAlign: "right" }}
                  variant="subtitle1"
                  color={
                    index % 2 === 0
                      ? theme.palette.text.secondary
                      : theme.palette.text.primary
                  }
                >
                  {item.name}
                </Typography>
              </Box>
            );
          } else {
            null;
          }
        })}
      </Box>
      <Button variant="contained" sx={{ width: "100%" }}>
        Sprawdź wszystkie
      </Button>
    </Box>
  );
};
export default PanelInfoSquare;
