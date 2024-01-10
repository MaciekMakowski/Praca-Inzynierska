import { Box, SvgIcon, Typography, useTheme } from "@mui/material";

import { useNavigate } from "react-router";
import { navigateTo } from "../utils/functions/navigators";
import { menuList } from "../utils/mockups/adminMenu";

type AdminMenuListProps = {
  primary: Boolean;
};

const AdminMenuList = (props: AdminMenuListProps) => {
  const theme = useTheme();
  const navigate = useNavigate();
  const color = props.primary
    ? theme.palette.primary.main
    : theme.palette.text.secondary;

  return (
    <Box
      sx={{
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
              <SvgIcon component={item.ico} sx={{ color: color }} />
              <Typography
                variant="h6"
                sx={{
                  color: color,
                  cursor: index === 0 ? "pointer" : "default",
                }}
                onClick={() => {
                  if (index === 0) {
                    navigateTo(navigate, `/admin${item.path}`);
                  }
                }}
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
                        color: color,
                        cursor: "pointer",
                        textAlign: "left",
                      }}
                      onClick={() =>
                        navigateTo(
                          navigate,
                          `/admin${item.path}${subItem.path}`
                        )
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

export default AdminMenuList;
