import { AppBar, Toolbar, Typography } from "@mui/material";

function HeaderBar() {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                    Order Dashboard
                </Typography>
            </Toolbar>
        </AppBar>
    );
}

export default HeaderBar;