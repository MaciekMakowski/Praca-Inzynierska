import { Button, useTheme } from "@mui/material";

type filter = {
  name: string;
  type: string;
  options: string[];
  value: string;
};

type FilterComponentProps = {
  filters: filter[];
};

const FilterComponent = () => {
  const theme = useTheme();

  return <Button variant="outlined">Filtruj</Button>;
};
export default FilterComponent;
