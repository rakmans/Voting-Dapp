import { Box, IconButton, Typography, useTheme } from "@mui/material";
import {
    UilLinkedin,
    UilInstagram,
    UilTelegram,
    UilWallet,
} from "@iconscout/react-unicons";
import rakmans from "./rakmans.svg";
import { copyToClipboard } from "../../utils";

const Footer = () => {
    const theme = useTheme();
    return (
        <>
            <Box
                sx={{
                    m: "auto",
                    mt: "1%",
                }}>
                <Box
                    component='a'
                    target='_blank'
                    href='https://rakmans.github.io/'
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        pt: "4vh",
                    }}>
                    <Box
                        component='img'
                        src={rakmans}
                        sx={{
                            m: "auto",
                            width: 80,
                        }}
                    />
                </Box>
                <Box sx={{ textAlign: "center", mt: "1vh", pb: "2vh" }}>
                    <IconButton
                        sx={{ mr: "2.5vw" }}
                        target='_blank'
                        href='https://www.linkedin.com/in/rakmans/'>
                        <UilLinkedin
                            color={
                                theme.palette.mode === "dark"
                                    ? "#faf69c"
                                    : "#FFD700"
                            }
                            size='3vw'
                        />
                    </IconButton>
                    <IconButton sx={{ mr: "1.25vw" }}>
                        <UilInstagram
                            color={
                                theme.palette.mode === "dark"
                                    ? "#faf69c"
                                    : "#FFD700"
                            }
                            size='3vw'
                        />
                    </IconButton>
                    <Typography
                        component='a'
                        target='_blank'
                        href='https://rakmans.github.io/'
                        color={
                            theme.palette.mode === "dark"
                                ? "#90caf9"
                                : "#0d47a1"
                        }
                        sx={{
                            m: "auto",
                            mt: "2vh",
                            fontSize: "2vw",
                            fontWeight: "700",
                            textDecoration: "none",
                        }}>
                        RAKMANS
                    </Typography>
                    <IconButton
                        sx={{ ml: "1.25vw" }}
                        target='_blank'
                        href='https://t.me/rakmans_support'>
                        <UilTelegram
                            size='3vw'
                            color={
                                theme.palette.mode === "dark"
                                    ? "#faf69c"
                                    : "#FFD700"
                            }
                        />
                    </IconButton>
                    <IconButton
                        sx={{ ml: "2.5vw" }}
                        onClick={() =>
                            copyToClipboard(
                                "0x8dedDf9068B594310b8914079CA41CE1cb5Bf6D0"
                            )
                        }>
                        <UilWallet
                            color={
                                theme.palette.mode === "dark"
                                    ? "#faf69c"
                                    : "#FFD700"
                            }
                            size='3vw'
                        />
                    </IconButton>
                </Box>
            </Box>
        </>
    );
};

export default Footer;
