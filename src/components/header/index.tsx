import { Button, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import Logo from "../../Images/avatar.png";
import { useNavigate } from "react-router-dom";

export function Header() {
  const navigate = useNavigate();

  const navItems = ["Home", "About", "Contact", "Services", "Sign Out"];

  function LogOff(val: string) {
    if (val === "Sign Out") {
      navigate("/");
    }
  }

  return (
    <Grid
      container
      height={60}
      alignItems={"center"}
      style={{ background: "#2f3640" }}
    >
      <Grid
        item
        xs={2}
        display={"flex"}
        flexDirection={"row"}
        alignItems={"center"}
      >
        <Link to={`/home`}>
          <img src={Logo} className="App-logo" alt="logo" />
        </Link>
      </Grid>
      <Grid item xs={10} textAlign={"right"}>
        {navItems.map((val) => {
          return (
            <Button
              variant="contained"
              sx={{
                marginRight: "10px",
                borderRadius: "20px",
                background: "#487eb0",
              }}
              onClick={() => LogOff(val)}
            >
              <Link
                to={`/${val.replace(" ", "-").toLowerCase()}`}
                style={{
                  color: "#fff",
                  textDecoration: "none",
                }}
              >
                {val}
              </Link>
            </Button>
          );
        })}
      </Grid>
    </Grid>
  );
}
