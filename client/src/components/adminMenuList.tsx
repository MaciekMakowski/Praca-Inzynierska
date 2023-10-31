import { Box, SvgIcon, Typography, useTheme } from "@mui/material";

import { menuList } from "../utils/mockups/adminMenu";
import { navigateTo } from "../utils/functions/navigators";
import { useNavigate } from "react-router";

type AdminMenuListProps = {
    primary:Boolean;
};

const AdminMenuList = (props:AdminMenuListProps) => {
    const theme = useTheme();
    const navigate = useNavigate();
    const color = props.primary ? theme.palette.primary.main : theme.palette.text.secondary;

    return(
    <>
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
                sx={{ color: color }}
              />
              <Typography
                variant="h6"
                sx={{
                  color: color,
                  cursor: "pointer",
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
                        navigateTo(navigate,`/admin${item.path}${subItem.path}`)
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
    </>
    )
}

export default AdminMenuList;