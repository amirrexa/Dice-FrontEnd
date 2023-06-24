import * as React from "react";
import { Toolbar, Tooltip, IconButton, Button } from "@mui/material";
import {
  InfoOutlined,
  DescriptionOutlined,
  FullscreenExitOutlined,
  FullscreenOutlined,
  VolumeOffOutlined,
  VolumeUpOutlined,
} from "@mui/icons-material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  diceText: {
    color: "white",
    fontSize: 18,
    marginInline: "2px",
  },

  analyticsButton: {
    color: "#818cf6!important",
    backgroundColor: "#1c2233!important",
    marginLeft: "auto!important",
    fontWeight: "700!important",
    textTransform: "none!important",
    "&:hover": {
      backgroundColor: "darkblue!important",
      color: "white!important",
    },
  },

  icon: {
    color: "white!important",
    marginInline: "2px!important",
  },
}));
const CustomInfoBar = () => {
  const classes = useStyles();
  const [isMuted, setIsMuted] = React.useState(false);
  const [isFullscreen, setIsFullscreen] = React.useState(false);

  const toggleMute = () => {
    setIsMuted((prevMuted) => !prevMuted);
  };

  const toggleFullscreen = () => {
    setIsFullscreen((prevScreen) => !prevScreen);
  };

  return (
    <Toolbar>
      <b className={classes.diceText}>Dice</b>
      <Tooltip title="Keep Losing Your Money 🤑💸" placement="bottom">
        <IconButton className={classes.icon}>
          <InfoOutlined />
        </IconButton>
      </Tooltip>
      <IconButton className={classes.icon}>
        <DescriptionOutlined />
      </IconButton>
      <IconButton
        onClick={toggleFullscreen}
        className={classes.icon}
      >
        {isFullscreen ? <FullscreenExitOutlined /> : <FullscreenOutlined />}
      </IconButton>
      <IconButton
        onClick={toggleMute}
        className={classes.icon}
      >
        {isMuted ? <VolumeOffOutlined /> : <VolumeUpOutlined />}
      </IconButton>
      <Button
        variant="contained"
        color="primary"
        className={classes.analyticsButton}
      >
        Analytics
      </Button>
    </Toolbar>
  );
};

export default CustomInfoBar;
