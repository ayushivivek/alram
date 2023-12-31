import Link from "next/link";
import { useRouter } from "next/router";
import * as React from "react";
import { styled } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import MuiDrawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Container from "@mui/material/Container";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import AvTimerIcon from "@mui/icons-material/AvTimer";
import TimerIcon from "@mui/icons-material/Timer";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import TimelapseIcon from "@mui/icons-material/Timelapse";
import { quickset, resentTime } from "../uttils";
import moment1 from "moment-timezone";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Head from "next/head";

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    minHeight: "100vh",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(11),
      },
    }),
  },
}));

export default function Layout({
  children,
  toggleTheme,
  mode,
  handleDigital,
  digit,
}) {
  const ll = JSON.parse(
    typeof window !== "undefined" && localStorage.getItem("digital")
  );
  const timeZones = moment1.tz.names();
  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open1 = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const toggleDrawer = () => {
    setOpen(!open);
  };
  const router = useRouter();

  React.useEffect(() => {
    localStorage.setItem("myObject", JSON.stringify(quickset));
    localStorage.setItem("timeZone", JSON.stringify(timeZones.splice(0, 20)));
    localStorage.setItem("resentTime", JSON.stringify(resentTime));
  }, []);

  return (
    <>
      <Head>
        <title>Dashboard</title>
        <meta name="dashboard" content="Dashboard page" />
      </Head>

      <div
        className="min-h-screen flex flex-col"
        style={{
          backgroundColor: "var(--background)",
          color: "var(--text)",
        }}
      >
        <Box sx={{ display: "flex" }}>
          <CssBaseline />
          <AppBar position="absolute" open={open} style={{ position: "fixed" }}>
            <Toolbar
              sx={{
                pr: "24px", // keep right padding when drawer closed
              }}
            >
              <IconButton
                edge="start"
                color="inherit"
                aria-label="open drawer"
                onClick={toggleDrawer}
                sx={{
                  marginRight: "36px",
                  ...(open && { display: "none" }),
                }}
              >
                <MenuIcon />
              </IconButton>
              <Typography
                component="h1"
                variant="h6"
                color="inherit"
                noWrap
                sx={{ flexGrow: 1 }}
              >
                Alarm Clock
              </Typography>
              <div className="modedes">
                <Box>
                  digital font
                  <FormControlLabel
                    sx={{ ml: 1 }}
                    control={
                      <Switch
                        checked={digit}
                        onChange={handleDigital}
                        color="success"
                        value="dynamic-class-name"
                      />
                    }
                  />
                </Box>
                <Box>
                  {mode} mode
                  <IconButton
                    sx={{ ml: 1 }}
                    onClick={toggleTheme}
                    color="inherit"
                  >
                    {mode === "dark" ? (
                      <Brightness7Icon />
                    ) : (
                      <Brightness4Icon />
                    )}
                  </IconButton>
                </Box>
              </div>
              <div className="modemob">
                <KeyboardArrowDownIcon
                  aria-controls={open1 ? "basic-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open1 ? "true" : undefined}
                  onClick={handleClick}
                />
                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open1}
                  onClose={handleClose}
                  MenuListProps={{
                    "aria-labelledby": "basic-button",
                  }}
                >
                  <MenuItem>
                    <Box>
                      digital font
                      <FormControlLabel
                        sx={{ ml: 1 }}
                        control={
                          <Switch
                            checked={digit}
                            onChange={handleDigital}
                            color="success"
                            value="dynamic-class-name"
                          />
                        }
                      />
                    </Box>
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    <Box>
                      {mode} mode
                      <IconButton
                        sx={{ ml: 1 }}
                        onClick={toggleTheme}
                        color="inherit"
                      >
                        {mode === "dark" ? (
                          <Brightness7Icon />
                        ) : (
                          <Brightness4Icon />
                        )}
                      </IconButton>
                    </Box>
                  </MenuItem>
                </Menu>
              </div>
            </Toolbar>
          </AppBar>
          <Drawer variant="permanent" open={open}>
            <Toolbar
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
                px: [1],
              }}
            >
              <IconButton onClick={toggleDrawer}>
                <ChevronLeftIcon />
              </IconButton>
            </Toolbar>
            <Divider />
            {/* <List component="nav"> */}
            <ul className="icon_list_wrp">
              <li className="m-2">
                <Link href={"/"}>
                  <a
                    className={`flex p-2 bg-blue-200 rounded hover:bg-blue-400 cursor-pointer ${
                      router.asPath === "/" &&
                      "bg-blue-600 text-white justify-start"
                    }`}
                  >
                    <ListItemButton>
                      <ListItemIcon>
                        <AccessAlarmIcon />
                      </ListItemIcon>
                      <ListItemText primary={"Alarm"} />
                    </ListItemButton>
                  </a>
                </Link>
              </li>
              <li className="m-2">
                <Link href={"/time"}>
                  <a
                    className={`flex p-2 bg-blue-200 rounded hover:bg-blue-400 cursor-pointer ${
                      router.asPath === "/time" && "bg-blue-600 text-white"
                    }`}
                  >
                    <ListItemButton>
                      <ListItemIcon>
                        <AvTimerIcon />
                      </ListItemIcon>
                      <ListItemText primary={"Time"} />
                    </ListItemButton>
                  </a>
                </Link>
              </li>
              <li className="m-2">
                <Link href={"/stopwatch"}>
                  <a
                    className={`flex p-2 bg-blue-200 rounded hover:bg-blue-400 cursor-pointer ${
                      router.asPath === "/stopwatch" && "bg-blue-600 text-white"
                    }`}
                  >
                    <ListItemButton>
                      <ListItemIcon>
                        <TimerIcon />
                      </ListItemIcon>
                      <ListItemText primary={"Stop Watch"} />
                    </ListItemButton>
                  </a>
                </Link>
              </li>
              <li className="m-2">
                <Link href={"/timer"}>
                  <a
                    className={`flex p-2 bg-blue-200 rounded hover:bg-blue-400 cursor-pointer ${
                      router.asPath === "/timer" && "bg-blue-600 text-white"
                    }`}
                  >
                    <ListItemButton>
                      <ListItemIcon>
                        <TimelapseIcon />
                      </ListItemIcon>
                      <ListItemText primary={"Timer"} />
                    </ListItemButton>
                  </a>
                </Link>
              </li>
            </ul>
          </Drawer>
          <Box sx={{ width: "100%" }} component="main">
            <Toolbar />
            <Container
              maxWidth="lg"
              sx={{
                pt: 4,
                pb: 4,
                maxHeight: "calc(100vh - 64px)",
                overflow: "auto",
                maxWidth: "100% !important",
              }}
            >
              {children}
            </Container>
          </Box>
        </Box>
      </div>
    </>
  );
}
