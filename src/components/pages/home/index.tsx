import { Grid, Typography } from "@mui/material";
import { Header } from "../../header";

export function Home() {
  return (
    <Grid container flexDirection={"column"}>
      <Header />
      <Grid
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          background: "#2f3542",
          textAlign: "center",
          height: "94.4vh",
        }}
        alignItems={"center"}
      >
        <Typography variant="button" style={{ margin: "0", fontSize: "50px" }}>
          Hello
          <span style={{ color: "#487eb0" }}> NAME !</span>
        </Typography>
      </Grid>
    </Grid>
  );
}
