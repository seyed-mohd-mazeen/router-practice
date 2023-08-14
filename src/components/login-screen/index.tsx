import { Button, Grid, TextField } from "@mui/material";

import { useNavigate } from "react-router-dom";
import { useImmer } from "use-immer";
import Logo from "../../Images/login-logo.png";

export function LoginScreen() {
  const navigate = useNavigate();

  const [state, setState] = useImmer({
    username: "",
    password: "",
    error: { nameError: false, passError: false },
    hint: "",
  });

  function checkValidation() {
    // checking validation for the fields
    if (state.username.length < 1) {
      setState((draft) => {
        draft.error.nameError = true;
      });
    } else {
      setState((draft) => {
        draft.error.nameError = false;
      });
    }

    if (state.password.length < 1) {
      setState((draft) => {
        draft.error.passError = true;
      });
    } else {
      setState((draft) => {
        draft.error.passError = false;
      });
    }

    if (state.username && state.password === "admin") {
      navigate("/home");
    }
  }
  console.log(state.username);

  return (
    <Grid
      container
      xs={12}
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        background: "#2f3542",
        textAlign: "center",
        height: "100vh",
      }}
    >
      <Grid item style={{ margin: "5px" }}>
        <img src={Logo} alt="logo" height={150} />
      </Grid>
      <Grid width={300} item style={{ margin: "5px" }}>
        <TextField
          label="Username"
          id="outlined-size-small"
          size="small"
          variant="filled"
          fullWidth
          color="info"
          error={state.error.nameError}
          onChange={(e) =>
            setState((draft) => {
              draft.username = e.target.value;
            })
          }
          InputProps={{
            style: {
              color: "#fff",
            },
          }}
          InputLabelProps={{
            style: {
              color: "#487eb0",
            },
          }}
        />
      </Grid>
      <Grid width={300} item style={{ margin: "5px" }}>
        <TextField
          label="Password"
          id="outlined-size-small"
          size="small"
          variant="filled"
          type="password"
          fullWidth
          error={state.error.passError}
          onChange={(e) =>
            setState((draft) => {
              draft.password = e.target.value;
            })
          }
          InputProps={{
            style: {
              color: "#fff",
            },
          }}
          InputLabelProps={{
            style: {
              color: "#487eb0",
            },
          }}
        />
      </Grid>
      <Grid width={250} item style={{ margin: "5px" }}>
        <Button
          variant="contained"
          fullWidth
          size="large"
          onClick={checkValidation}
          sx={{
            borderRadius: "20px",
            background: "#487eb0",
          }}
        >
          Submit
        </Button>
      </Grid>
      <Grid width={100} item style={{ margin: "5px" }}>
        {state.password !== "admin" && (
          <Button
            variant="contained"
            fullWidth
            size="small"
            onClick={() => {
              setState((draft) => {
                draft.hint = 'Enter Any Username, Password is "admin" ';
              });
            }}
            sx={{
              borderRadius: "20px",
              background: "#487eb0",
            }}
          >
            Show Hint
          </Button>
        )}
      </Grid>
      {state.hint}
    </Grid>
  );
}
