import { Box, IconButton, Typography, useTheme } from "@mui/material";
import {
  UilLinkedin,
  UilInstagram,
  UilTelegram,
  UilWallet,
} from "@iconscout/react-unicons";
import rakmans from "./rakmans.svg";

const Footer = () => {
  const theme = useTheme();
  return (
    <>
      <Box
        sx={{
          m: "auto",
          mt: "1%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            pt: "4vh",
          }}
        >
          <Box
            component="img"
            src={rakmans}
            sx={{
              m: "auto",
              width: 80,
            }}
          />
        </Box>

        <Box sx={{ textAlign: "center", mt: "1vh", pb: "2vh" }}>
          <IconButton sx={{ mr: "2.5vw" }}>
            <UilLinkedin
              color={theme.palette.mode === "dark" ? "#faf69c" : "#FFD700"}
              size="3vw"
            />
          </IconButton>
          <IconButton sx={{ mr: "1.25vw" }}>
            <UilInstagram
              color={theme.palette.mode === "dark" ? "#faf69c" : "#FFD700"}
              size="3vw"
            />
          </IconButton>
          <Typography
            variant="p"
            color={theme.palette.mode === "dark" ? "#90caf9" : "#0d47a1"}
            sx={{
              m: "auto",
              mt: "2vh",

              fontSize: "2vw",
              fontWeight: "700",
            }}
          >
            RAKMANS
          </Typography>
          <IconButton sx={{ ml: "1.25vw" }}>
            <UilTelegram
              size="3vw"
              color={theme.palette.mode === "dark" ? "#faf69c" : "#FFD700"}
            />
          </IconButton>

          <IconButton sx={{ ml: "2.5vw" }}>
            <UilWallet
              color={theme.palette.mode === "dark" ? "#faf69c" : "#FFD700"}
              size="3vw"
            />
          </IconButton>
        </Box>
      </Box>
    </>
  );
};

export default Footer;
