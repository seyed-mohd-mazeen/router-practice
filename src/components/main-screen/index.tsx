import { Grid } from "@mui/material";
import { Header } from "../header";

export function MainScreen() {
  return (
    <Grid container flexDirection={"column"}>
      <Grid>
        <Header />
      </Grid>
    </Grid>
  );
}
