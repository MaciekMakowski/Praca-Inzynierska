import {
  Box,
  Button,
  Grid,
  Pagination,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import { useEffect, useState } from "react";

import AddAdoptionModal from "../modals/addAdoptionModal";
import AdoptionListItem from "./adoptionListItem";
import { AdoptionType } from "../../../utils/types/basicTypes";
import { ListProps } from "../../../utils/types/propsTypes";
import { getAdoptions } from "../../../utils/services/gets";
import { paginationRangeValue } from "../../../utils/services/pagination";

const AdoptionList = (props:ListProps) => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [adoptionList, setAdotpionList] = useState<AdoptionType[]>([]);
  const [page, setPage] = useState<number>(1);
  const [pageCount, setPageCount] = useState<number>(1);

  const changePage = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };


  useEffect(() => {
    getAdoptions(page, paginationRangeValue).then((res) => {
      if(res){
        setAdotpionList(res.data);
        setPageCount(res.meta.pageCount);
      }
    });
  },[])
  return (
    <Box
      sx={{
        backgroundColor: theme.palette.background.adminField,
        height: "100%",
        textAlign: "center",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        padding: "1rem",
        gap: "1rem",
        borderRadius: "1rem",
        boxShadow: theme.shadows[3],
        width: {xs:'none',md:'100%'},
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
        <Box
          sx={{
            display: "flex",
            gap: "1rem",
          }}
        >
          <Button variant="contained">Szukaj</Button>
          <TextField size="small" label="Wyszukaj" />
        </Box>
        <Box>
          <Button variant="outlined" onClick={() => setOpen(true)}>
            Dodaj
          </Button>
        </Box>
      </Box>
      <Box
          sx={{
            overflowX:'auto',
            overflowY:'clip',
            height:'100%'
          }}
      >
      <Grid width="98%" container spacing={0}
          sx={{
            width: {xs:'800px', sm:'100%'},
          }}
      >
        <Grid item xs={1}>
          <Typography
            variant="subtitle1"
            color={theme.palette.primary.main}
            fontWeight={600}
          >
            Numer
          </Typography>
        </Grid>
        <Grid item xs={2.5}>
          <Typography
            variant="subtitle1"
            color={theme.palette.primary.main}
            fontWeight={600}
          >
            Adoptujący
          </Typography>
        </Grid>
        <Grid item xs={1.5}>
          <Typography
            variant="subtitle1"
            color={theme.palette.primary.main}
            fontWeight={600}
          >
            Zwierzę
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography
            variant="subtitle1"
            color={theme.palette.primary.main}
            fontWeight={600}
          >
            Pracownik
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography
            variant="subtitle1"
            color={theme.palette.primary.main}
            fontWeight={600}
          >
            Data
          </Typography>
        </Grid>
        <Grid item xs={1.5}>
          <Typography
            variant="subtitle1"
            color={theme.palette.primary.main}
            fontWeight={600}
          >
            Status
          </Typography>
        </Grid>
        <Grid item xs={1.5}></Grid>
      </Grid>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          height: {xs:'60vh',md:'100%'},
          width: {xs:'800px', sm:'100%'},
          overflowY:'auto',
        }}
      >
        {adoptionList.map((adoption,i) => {
          return(
            <AdoptionListItem key={i} adoption={adoption} color={i % 2 === 0}/>
          )
        })}
      </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "end",
        }}
      >
        <Typography variant="subtitle1" color={theme.palette.text.primary}>
          <Pagination count={pageCount} page={page} onChange={changePage} size="small" />
        </Typography>
      </Box>
      <AddAdoptionModal open={open} setOpen={setOpen} setRefresh={props.setRefreshList}/>
    </Box>
  );
};

export default AdoptionList;
