import {
    CssBaseline,
    Fab,
    Container,
    AppBar,
    Box,
    Toolbar,
    useTheme,
    Typography,
} from "@mui/material";
import { UilAngleUp } from "@iconscout/react-unicons";

import { ScrollTop, ElevationScroll } from "../../utils/index";
import { Mode, rakmans } from "./index";
import WalletConnect from "../../components/WalletConnectButton";

const Appbar = () => {
    const theme = useTheme();

    return (
        <>
            <CssBaseline />
            <ElevationScroll>
                <AppBar
                    className='appBar'
                    sx={{
                        width: "100%",
                        p: 0.5,
                        backdropFilter: "blur(3px)",
                        borderBottom:
                            theme.palette.mode === "dark"
                                ? "3px solid #40679E"
                                : "",
                        WebkitBackdropFilter: "blur(3px)",
                        zIndex: 9,
                    }}>
                    <Container maxWidth='xl'>
                        <Toolbar disableGutters>
                            <Box
                                component='a'
                                target='_blank'
                                href='https://rakmans.github.io/'
                                sx={{
                                    mr: 2,
                                    display: "flex",
                                    flexGrow: 1,
                                    fontSize: "30px",
                                    textDecoration:"none",
                                    color:"white"
                                }}>
                                <Box
                                    component='img'
                                    src={rakmans}
                                    alt='logo'
                                    width={50}
                                />
                                <Typography
                                    variant='h4'
                                    mt={0.9}
                                    ml={1}
                                    display={{ md: "block", xs: "none" }}>
                                    Rakmans
                                </Typography>
                            </Box>
                            <Box
                                sx={{ flexGrow: { xs: 1, sm: 0 } }}
                                display={"flex"}>
                                <WalletConnect />
                            </Box>
                            <Mode />
                        </Toolbar>
                    </Container>
                </AppBar>
            </ElevationScroll>
            <Box id='back-to-top-anchor' />
            <ScrollTop>
                <Fab color='primary' size='small'>
                    <UilAngleUp />
                </Fab>
            </ScrollTop>
        </>
    );
};

export default Appbar;
