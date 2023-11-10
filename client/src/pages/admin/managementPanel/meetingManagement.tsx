import { Box, Typography, useTheme } from "@mui/material";

import MeetingList from "../../../components/managementPanel/mettingList";

const MeetingManagement = () => {
    const theme = useTheme();
    return(
        <>
      <Box>
        <Typography
          variant="h4"
          fontWeight={600}
          textAlign={"center"}
          color={theme.palette.text.primary}
        >
          Zarządzanie Spotkaniami
        </Typography>
      </Box>
      <Box
        sx={{
          height: "90%",
          display: "flex",
          justifyContent: "start",
          flexDirection: { xs: "column", md: "row" },
          width: "100%",
        }}
      >
        <MeetingList />
      </Box>
    </>
    )
}

export default MeetingManagement;