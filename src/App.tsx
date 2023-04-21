import "./styles.css";
import { useState } from "react";
import {
  Alert,
  Box,
  Button,
  createTheme,
  ThemeProvider,
  CircularProgress,
  Typography,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody
} from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#FCD15A",
      contrastText: "#1D1D24"
    }
  }
});

export default function App() {
  const [loading, setLoading] = useState(false);
  const [displayTable, setdisplayTable] = useState(false);
  const [emailSentSuccess, setemailSentSuccess] = useState(false);

  const handleLoadAddresses = async (event: any) => {
    setLoading(true);
    await new Promise((f) => setTimeout(f, 2000));
    setLoading(false);
    setdisplayTable(true);
  };
  const handleSendMessage = async (event: any) => {
    setLoading(true);
    await new Promise((f) => setTimeout(f, 2000));
    setLoading(false);
    setemailSentSuccess(true);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box className="my-box">
        <Typography component="h1" variant="h5" textAlign="center">
          Welcome on iExec sandbox
        </Typography>
        <Typography variant="body2" textAlign="center">
          This example empathise what can be done with the web3mail SDK method
        </Typography>
        <Button
          sx={{ display: "block", margin: "20px auto" }}
          onClick={handleLoadAddresses}
          variant="contained"
        >
          Load authorized addresses
        </Button>
        {loading && (
          <CircularProgress
            sx={{ display: "block", margin: "20px auto" }}
          ></CircularProgress>
        )}

        {displayTable && (
          <Table
            sx={{ maxWidth: 200, marginLeft: "auto", marginRight: "auto" }}
            aria-label="simple table"
          >
            <TableHead sx={{ border: 0, borderBottom: "none" }}>
              <TableRow sx={{ border: 0, borderBottom: "none" }}>
                <TableCell
                  sx={{ border: 0, borderBottom: "none", fontWeight: 600 }}
                >
                  ETH Address
                </TableCell>
                <TableCell
                  sx={{ border: 0, borderBottom: "none", fontWeight: 600 }}
                >
                  Action
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow key={1} sx={{ border: 0, borderBottom: "none" }}>
                <TableCell component="th" scope="row">
                  0xhj8hs...98jhshd
                </TableCell>
                <TableCell align="right">
                  <Button
                    className="ButtonSendM"
                    sx={{}}
                    onClick={handleSendMessage}
                  >
                    Send Message
                  </Button>
                </TableCell>
              </TableRow>
              <TableRow key={1} sx={{ border: 0, borderBottom: "none" }}>
                <TableCell component="th" scope="row">
                  0xhj8hs...98jhshd
                </TableCell>
                <TableCell align="right">
                  <Button
                    className="ButtonSendM"
                    sx={{}}
                    onClick={handleSendMessage}
                  >
                    Send Message
                  </Button>
                </TableCell>
              </TableRow>
              <TableRow key={1} sx={{ border: 0, borderBottom: "none" }}>
                <TableCell component="th" scope="row">
                  0xhj8hs...98jhshd
                </TableCell>
                <TableCell align="right">
                  <Button
                    className="ButtonSendM"
                    sx={{}}
                    onClick={handleSendMessage}
                  >
                    Send Message
                  </Button>
                </TableCell>
              </TableRow>
              <TableRow key={1} sx={{ border: 0, borderBottom: "none" }}>
                <TableCell component="th" scope="row">
                  0xhj8hs...98jhshd
                </TableCell>
                <TableCell align="right">
                  <Button
                    className="ButtonSendM"
                    sx={{}}
                    onClick={handleSendMessage}
                  >
                    Send Message
                  </Button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        )}
        {emailSentSuccess && (
          <Alert sx={{ mt: 3, mb: 2 }} severity="success">
            An email has been sent to the user{" "}
          </Alert>
        )}
      </Box>
    </ThemeProvider>
  );
}
