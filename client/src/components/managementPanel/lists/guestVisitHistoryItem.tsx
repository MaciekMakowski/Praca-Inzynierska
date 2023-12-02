import { Grid, Typography, useTheme } from "@mui/material";

import { VisitType } from "../../../utils/types/basicTypes";
import dayjs from "dayjs";

type GuestVisitHistoryItemProps = {
    color: boolean;
    visit: VisitType;
}

const GuestVisitHistoryItem = (props: GuestVisitHistoryItemProps) => {
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
          {props.visit.attributes.date}
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
          {props.visit.attributes.enterTime.slice(0, 5)}
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
          {props.visit.attributes.exitTime.slice(0, 5)}
        </Typography>
      </Grid>
        
    </Grid>
    )
}

export default GuestVisitHistoryItem;