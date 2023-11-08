import {
  Box,
  Button,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Modal,
  Select,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import { CategoryList, SubcategoryList, UnitList } from "../../utils/mockups/selects";
import dayjs, { Dayjs } from "dayjs";
import { useEffect, useState } from "react";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import AddResourceForm from "./addResourceForm";
import CloseIcon from "@mui/icons-material/Close";
import { DatePicker } from "@mui/x-date-pickers";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { ResourceType } from "../../utils/types/basicTypes";
import { SelectChangeEvent } from "@mui/material";
import { handleChangeDate } from "../../utils/functions/handlers";
import { handleSelectChange } from "../../utils/functions/handlers";

type EditResourceModalProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  data: ResourceType;
};

const EditResourceModal = (props:EditResourceModalProps) => {
  const theme = useTheme();
  const handleClose = () => props.setOpen(false);


  return (
    <Modal open={props.open} onClose={handleClose}>
      <Box
        sx={{
          backgroundColor: theme.palette.background.adminField,
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          width: { xs: "90%", md: "60%", lg: "40%", xl: "30%" },
          minWidth: "300px",
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          border: `${theme.palette.primary.main} 4px solid}`,
          borderRadius: [3],
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            gap: "1rem",
          }}
        >
          <AddResourceForm data={props.data}/>
          </Box>
      </Box>
    </Modal>
  );
};

export default EditResourceModal;
