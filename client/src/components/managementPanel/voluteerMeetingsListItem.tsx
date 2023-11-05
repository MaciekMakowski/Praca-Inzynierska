import { Button, Grid, Typography, useTheme } from "@mui/material";

const VolunteerMeetingsListItem = (props: any) => {
    const theme = useTheme();

    return(
        <Grid
      container
      spacing={0}
      sx={{
        width: { xs: "100%", lg: "100%" },
        border: props.color ? `1px solid ${theme.palette.primary.main}` : "",
        borderRadius: "0.3rem",
        boxSizing: "border-box",
        paddingY: "0.5rem",
        alignItems: "center",
        backgroundColor: props.color ? "" : theme.palette.background.light,
      }}
    >
        <Grid item xs={3}>
        <Typography
          variant="subtitle1"
          color={
            props.color
              ? theme.palette.primary.main
              : theme.palette.text.secondary
          }
          textAlign={"center"}
        >
          20-03-2021
        </Typography>
      </Grid>
      <Grid item xs={2}>
        <Typography
          variant="subtitle1"
          color={
            props.color
              ? theme.palette.primary.main
              : theme.palette.text.secondary
          }
          textAlign={"center"}
        >
          14:20
        </Typography>
      </Grid>
      <Grid item xs={4}>
        <Typography
          variant="subtitle1"
          color={
            props.color
              ? theme.palette.primary.main
              : theme.palette.text.secondary
          }
          textAlign={"center"}
        >
          Piotr Grzęszczyk
        </Typography>
      </Grid>
      <Grid item xs={3}>
            <Button>Przejdź</Button>
          </Grid>
        
    </Grid>
    )
}

export default VolunteerMeetingsListItem;