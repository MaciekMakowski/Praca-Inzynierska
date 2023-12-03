import { Box, Button, Typography, useTheme } from "@mui/material";

type HomeButtonProps = {
  title: string;
  image: string;
  foo: () => void;
};

const HomeButton = (props: HomeButtonProps) => {
  const theme = useTheme();

  return (
    <Button
        onClick={props.foo}
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        boxSizing: "border-box",
        p: 3,
        bgcolor: theme.palette.secondary.main,
        width: { xs: "10rem", sm: "12rem" },
        height: { xs: "10rem", sm: "12rem" },
        cursor: "pointer",
        ':hover':{
            bgcolor: theme.palette.secondary.light
        }
      }}
    >
      <Box
        sx={{
          backgroundImage: `url(${props.image})`,
          backgroundSize: "cover",
          width: { xs: "3rem", sm: "5rem" },
          height: { xs: "3rem", sm: "5rem" },
        }}
      />
      <Typography
        textAlign={"center"}
        variant={"h6"}
        color={theme.palette.text.secondary}
      >
        {props.title}
      </Typography>
    </Button>
  );
};

export default HomeButton;
