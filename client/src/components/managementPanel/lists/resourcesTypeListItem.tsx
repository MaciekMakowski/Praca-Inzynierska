import { Accordion, AccordionDetails, AccordionSummary, Grid, Typography, useTheme } from "@mui/material";

import { ResourceTypeType } from "../../../utils/types/basicTypes";

type ResourceTypeListItemProps = {
  color: boolean;
  data:ResourceTypeType
};

const ResourceTypeListItem = (props: ResourceTypeListItemProps) => {
  const theme = useTheme();

  return (
    <Accordion
    sx={{
      border: props.color ? `1px solid ${theme.palette.primary.main}` : "",
      borderRadius: "0.3rem",
      boxSizing: "border-box",
      paddingX: 0,
      alignItems: "center",
      backgroundColor: props.color ? "" : theme.palette.background.light,
    }}
    >
      <AccordionSummary
        sx={{
          padding: 0,
        }}
      >
      <Grid
      container
      spacing={0}
    >
      <Grid item xs={3} lg={2}>
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
      <Grid item xs={9} lg={10}>
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
      </AccordionSummary>
      <AccordionDetails>
        <Typography variant="subtitle1" fontWeight={600} textAlign={'start'} color={
                  props.color
                    ? theme.palette.primary.main
                    : theme.palette.text.secondary
                }>
          Podkategorie:
        </Typography>
        {props.data.attributes.subtypes ? props.data.attributes.subtypes.map((subtype) => {
          return(
              <Typography
                textAlign={"start"}
                variant="subtitle2"
                color={
                  props.color
                    ? theme.palette.primary.main
                    : theme.palette.text.secondary
                }
              >
                {subtype.attributes.name}
              </Typography>
        )}): <></>}
      </AccordionDetails>
    </Accordion>
  );
};

export default ResourceTypeListItem;
