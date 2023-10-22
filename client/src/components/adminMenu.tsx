import { Box, useTheme, Typography, SvgIcon } from "@mui/material";
import { menuList } from "../utils/mockups/adminMenu";
import { useNavigate } from "react-router";

const AdminMenu = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        minWidth: "200px",
        height: "100%",
        backgroundColor: theme.palette.primary.main,
        boxSizing: "border-box",
        padding: "1rem",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
      }}
    >
      {menuList.map((item, index) => {
        return (
          <Box key={index}>
            <Box
              display={"flex"}
              gap={"0.5rem"}
              justifyContent={"flex-start"}
              alignItems={"center"}
            >
              <SvgIcon
                component={item.ico}
                sx={{ color: theme.palette.text.secondary }}
              />
              <Typography
                variant="h6"
                sx={{
                  color: theme.palette.text.secondary,
                  cursor: "pointer",
                }}
                onClick={() => navigate(`/admin${item.path}`)}
              >
                {item.name}
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem",
                marginLeft: "2rem",
              }}
            >
              {item.subList &&
                item.subList.length > 0 &&
                item.subList.map((subItem, subIndex) => {
                  return (
                    <Typography
                      key={subIndex}
                      variant="subtitle1"
                      sx={{
                        color: theme.palette.text.secondary,
                        cursor: "pointer",
                      }}
                      onClick={() =>
                        navigate(`/admin${item.path}${subItem.path}`)
                      }
                    >
                      {subItem.name}
                    </Typography>
                  );
                })}
            </Box>
          </Box>
        );
      })}
    </Box>
  );
};

export default AdminMenu;
