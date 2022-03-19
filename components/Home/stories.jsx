import LOGO from "@/assets/stories.svg";
import { Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import Image from "next/image";
import React from "react";

export default function Stories({ data }) {
  const useStyles = makeStyles(() => ({
    img_gif: {
      height: 200,
      borderRadius: 4,
      cursor: "pointer",
      width: "100%",
      objectFit: "cover",
    },
  }));
  console.log(data);
  const classes = useStyles();
  return (
    <Box mt={2}>
      <Box display="flex">
        <Box width="30px" mr={2}>
          <Image layout="responsive" src={LOGO} alt="logo" />
        </Box>
        <Typography variant="h5" style={{ fontSize: 23, fontWeight: 700 }}>
          Stories
        </Typography>
      </Box>

      {/* <Grid container mt={1} spacing={2}>
        <Grid item xs={6}>
          <img
            src={data[0]?.images.fixed_height.url}
            className={classes.img_gif}
            alt="clip"
            style={{ height: 410 }}
          />
        </Grid>
        <Grid item xs={6}>
          <img
            src={data[1]?.images.fixed_height.url}
            className={classes.img_gif}
            alt="clip"
          />
          <img
            src={data[2]?.images.fixed_height.url}
            className={classes.img_gif}
            alt="clip"
          />
        </Grid>
      </Grid> */}
    </Box>
  );
}
