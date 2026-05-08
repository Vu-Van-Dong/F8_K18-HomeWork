import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

interface Props {
    timeLeft: number;
    onSubmit: () => void;
}

function HeaderBar({ timeLeft, onSubmit }: Props) {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;

    const timeText = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;

    return (
        <AppBar position="static">
            <Toolbar className="header">
                <Box>
                    <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                        Ôn Thi GPLX
                    </Typography>
                    <Typography variant="body2">Đề thi ngẫu nhiên số 1</Typography>
                </Box>

                <Box className="headerRight">
                    <Box className="timer">
                        <AccessTimeIcon fontSize="small" />
                        {timeText}
                    </Box>

                    <Button variant="contained" color="success" onClick={onSubmit}>
                        Nộp bài
                    </Button>
                </Box>
            </Toolbar>
        </AppBar>
    );
}

export default HeaderBar;