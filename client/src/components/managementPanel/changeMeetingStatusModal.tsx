import {
  Box,
  Button,
  IconButton,
  MenuItem,
  Modal,
  Select,
  SelectChangeEvent,
  Typography,
  useTheme
} from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";
import { handleSelectChange } from "../../utils/functions/handlers";
import { useState } from "react";

const ChangeMeetingStatusModal = (props:any) => {
    const theme = useTheme();
    const [newStatus, setNewStatus] = useState<string>('')
    const handleClose = () => props.setOpen(false);
    const selectChange =(event: SelectChangeEvent) => {
        handleSelectChange(event, setNewStatus);
      }

    return (
      <Modal open={props.open} onClose={handleClose}>
        <Box
          sx={{
            backgroundColor: theme.palette.background.adminField,
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            width: "30%",
            minWidth: {xs:'90%', lg:"600px"},
            boxSizing: "border-box",
            padding: "1rem",
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
            <Typography variant="h5" color={theme.palette.text.primary}>
              Zmień Status Spotkania
            </Typography>
            <IconButton onClick={() => handleClose()}>
              <CloseIcon />
            </IconButton>
          </Box>
            <Select onChange={selectChange}>
                <MenuItem value={'val1'}>val1</MenuItem>
                <MenuItem value={'val2'}>val2</MenuItem>
                <MenuItem value={'val3'}>val3</MenuItem>
                <MenuItem value={'val4'}>val4</MenuItem>
            </Select>
          <Button variant="contained">Zabisz</Button>
        </Box>
      </Modal>
    );
}

export default ChangeMeetingStatusModal