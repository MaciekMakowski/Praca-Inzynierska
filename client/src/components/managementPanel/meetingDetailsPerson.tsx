import { Box, Typography, useTheme } from "@mui/material";

type MeetingDetailsPersonProps = {
  title: string;
  name: string;
  lastName: string;
  email: string;
  phoneNumber: number;
  pesel: number;
  birthDate: string;
  sex: string;
  city: string;
  postCode: string;
  address: string;
};

const MeetingDetailsPerson = (props: MeetingDetailsPersonProps) => {
  const theme = useTheme();

  return (
    <Box>
      <Typography
        variant="h6"
        color={theme.palette.text.primary}
        fontWeight={600}
      >
        {props.title}
      </Typography>
      <Typography
        variant="subtitle1"
        color={theme.palette.text.primary}
        fontWeight={600}
      >
        Imię:{" "}
        <Typography variant="body1" display={"inline"}>
          {props.name}
        </Typography>
      </Typography>
      <Typography
        variant="subtitle1"
        color={theme.palette.text.primary}
        fontWeight={600}
      >
        Nazwisko: {""}
        <Typography variant="body1" display={"inline"}>
          {props.lastName}
        </Typography>
      </Typography>
      <Typography
        variant="subtitle1"
        color={theme.palette.text.primary}
        fontWeight={600}
      >
        PESEL:{" "}
        <Typography variant="body1" display={"inline"}>
          {props.pesel}
        </Typography>
      </Typography>
      <Typography
        variant="subtitle1"
        color={theme.palette.text.primary}
        fontWeight={600}
      >
        E-mail:{" "}
        <Typography variant="body1" display={"inline"}>
          {props.email}
        </Typography>
      </Typography>
      <Typography
        variant="subtitle1"
        color={theme.palette.text.primary}
        fontWeight={600}
      >
        Numer telefonu:{" "}
        <Typography variant="body1" display={"inline"}>
          {props.phoneNumber}
        </Typography>
      </Typography>
      <Typography
        variant="subtitle1"
        color={theme.palette.text.primary}
        fontWeight={600}
      >
        Miasto:{" "}
        <Typography variant="body1" display={"inline"}>
          {props.city}
        </Typography>
      </Typography>
      <Typography
        variant="subtitle1"
        color={theme.palette.text.primary}
        fontWeight={600}
      >
        Kod pocztowy:{" "}
        <Typography variant="body1" display={"inline"}>
          {props.postCode}
        </Typography>
      </Typography>
      <Typography
        variant="subtitle1"
        color={theme.palette.text.primary}
        fontWeight={600}
      >
        Adres:{" "}
        <Typography variant="body1" display={"inline"}>
          {props.address}
        </Typography>
      </Typography>
    </Box>
  );
};

export default MeetingDetailsPerson;
