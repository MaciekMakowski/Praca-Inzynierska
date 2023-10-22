import {
  Button,
  Typography,
  Box,
  useTheme,
  SvgIconTypeMap,
  SvgIcon,
} from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { createElement } from "react";

type ManagementButtonProps = {
  name: string;
  ico: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
  disabled: boolean;
};

const ManagementButton = (props: ManagementButtonProps) => {
  const theme = useTheme();

  return (
    <Button
      variant="outlined"
      sx={{
        width: "120px",
        height: "120px",
        color: props.disabled
          ? theme.palette.error.main
          : theme.palette.text.primary,
        borderColor: props.disabled
          ? theme.palette.error.main
          : theme.palette.text.primary,
      }}
      disabled={props.disabled}
    >
      <Box
        sx={{
          width: "100%",
          height: "100%",
        }}
      >
        <Typography
          variant="subtitle2"
          sx={{
            color: props.disabled
              ? theme.palette.error.main
              : theme.palette.text.primary,
          }}
        >
          {props.name}
        </Typography>
        <SvgIcon
          sx={{
            width: "50px",
            height: "50px",
          }}
        >
          {createElement(props.ico)}
        </SvgIcon>
      </Box>
    </Button>
  );
};

export default ManagementButton;
