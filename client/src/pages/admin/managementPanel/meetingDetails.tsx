import { Box, Typography, useTheme } from "@mui/material";

import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { GuestData } from "../../../utils/mockups/adminMenu";
import ManagementButton from "../../../components/managementPanel/managementButton";
import MeetingDetailsPerson from "../../../components/managementPanel/meetingDetailsPerson";

const MeetingDetails = () => {
  const theme = useTheme();
  return (
    <>
      <Typography
        variant="h4"
        fontWeight={600}
        color={theme.palette.text.primary}
      >
        Szczegóły spotkania
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: {xs:"column", md:'row'},
          gap: "2rem",
          height: "90%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          <Typography
            variant="subtitle1"
            fontWeight={600}
            color={theme.palette.text.primary}
          >
            Data spotkania:{" "}
            <Typography variant="body1" display={"inline"}>
              20-09-2021
            </Typography>
          </Typography>
          <Typography
            variant="subtitle1"
            fontWeight={600}
            color={theme.palette.text.primary}
          >
            Godzina spotkania:{" "}
            <Typography variant="body1" display={"inline"}>
              14:15
            </Typography>
          </Typography>
          <Box 
          sx={{
            marginX: 'auto',
          }}>
          <ManagementButton name={"Zmień Status"} ico={CalendarMonthIcon} disabled={false} foo={() => {}}/>
          </Box>
        </Box>
        <MeetingDetailsPerson
          title="Dane Gościa"
          name={GuestData.name}
          lastName={GuestData.lastName}
          email={GuestData.email}
          phone={GuestData.phoneNumber}
          pesel={GuestData.pesel}
          city={GuestData.city}
          address={GuestData.address}
          postCode={GuestData.postCode}
          birthDate={GuestData.birthDate}
          sex={GuestData.sex}
        />
        <MeetingDetailsPerson
          title="Dane Wolontariusza"
          name={GuestData.name}
          lastName={GuestData.lastName}
          email={GuestData.email}
          phone={GuestData.phoneNumber}
          pesel={GuestData.pesel}
          city={GuestData.city}
          address={GuestData.address}
          postCode={GuestData.postCode}
          birthDate={GuestData.birthDate}
          sex={GuestData.sex}
        />
      </Box>
    </>
  );
};

export default MeetingDetails;
