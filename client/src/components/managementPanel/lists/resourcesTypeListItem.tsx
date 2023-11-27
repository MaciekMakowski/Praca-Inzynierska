import { Grid, Typography, useTheme } from "@mui/material";

import { ResourceTypeType } from "../../../utils/types/basicTypes";

type ResourceTypeListItemProps = {
  color: boolean;
  data:ResourceTypeType
};

const ResourceTypeListItem = (props: ResourceTypeListItemProps) => {
  const theme = useTheme();

  return (
    <Grid
      container
      spacing={0}
      sx={{
        border: props.color ? `1px solid ${theme.palette.primary.main}` : "",
        borderRadius: "0.3rem",
        boxSizing: "border-box",
        paddingY: "0.5rem",
        alignItems: "center",
        backgroundColor: props.color ? "" : theme.palette.background.light,
      }}
    >
      <Grid item xs={4} lg={3}>
        <Typography
          variant="subtitle1"
          color={
            props.color
              ? theme.palette.primary.main
              : theme.palette.text.secondary
          }
        >
          {props.data.id}
        </Typography>
      </Grid>
      <Grid item xs={8} lg={9}>
        <Typography
          variant="subtitle1"
          color={
            props.color
              ? theme.palette.primary.main
              : theme.palette.text.secondary
          }
        >
          {props.data.attributes.name}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default ResourceTypeListItem;
