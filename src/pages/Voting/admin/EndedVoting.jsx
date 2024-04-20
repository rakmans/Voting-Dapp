import { Typography, Card } from "@mui/material";
import { UilSmileBeam } from "@iconscout/react-unicons";
import { useContext } from "react";
import VotingContext from "../../../context/VotingContext";

const EndedVoting = () => {
    const { data } = useContext(VotingContext);
    return (
        <Card
            sx={{
                width: "48%",
                m: "auto",
                mt: 12,
                mb: 6,
                borderRadius: 11,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
            }}>
            <UilSmileBeam
                color='#f84d53'
                size='125'
                style={{ marginTop: 25 }}
            />
            <Typography variant='h3' mt={2} color='secondary'>
                voting is ended
            </Typography>
            <Typography variant='h6' mt={2}>
                {data.voteWinner} was winner of voting.
            </Typography>
        </Card>
    );
};

export default EndedVoting;
