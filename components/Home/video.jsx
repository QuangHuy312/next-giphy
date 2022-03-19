import LOGO from "@/assets/artists.svg";
import { Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import Image from "next/image";
import React from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

export default function Videos({ data }) {
  const useStyles = makeStyles(() => ({
    img_gif: {
      height: 200,
      borderRadius: 4,
      cursor: "pointer",
      width: "100%",
      objectFit: "cover",
    },
    ingoUser: {
      zIndex: 10,
      display: "flex",
      alignItems: "center",
      "& >img": {
        width: 25,
        height: 25,
        objectFit: "cover",
      },
    },

    title: {
      marginLeft: 6,
      "& >h6": {
        fontWeight: 600,
        fontSize: 14,
      },
      "& >p": {
        fontSize: 12,
        padding: 0,
        display: "flex",
        alignItems: "center",
      },
    },
  }));
  const classes = useStyles();
  return (
    <Box mt={2} mb={3}>
      <Box display="flex" justifyContent="space-between">
        <Box display="flex" alignItems="center">
          <Box width="30px" mr={2}>
            <Image layout="responsive" src={LOGO} alt="logo" />
          </Box>
          <Typography variant="h5" style={{ fontSize: 23, fontWeight: 700 }}>
            Clips
          </Typography>
        </Box>
        <Typography
          variant="subtitle2"
          style={{ color: "rgb(166, 166, 166)", cursor: "pointer" }}
        >
          All Clips
        </Typography>
      </Box>

      <Grid container mt={1} spacing={2}>
        <Grid item xs={8}>
          <img
            src={data[0]?.images.fixed_height.url}
            className={classes.img_gif}
            alt="clip"
            style={{ height: 490 }}
          />
          <Typography
            variant="subtitle2"
            style={{ fontSize: 16, fontWeight: 600, marginBottom: 5 }}
          >
            {data[0]?.title}
          </Typography>
          <Box className={classes.ingoUser}>
            {data[0]?.user?.avatar_url && (
              <img src={data[0]?.user?.avatar_url} alt="ingoUser" />
            )}
            <Box className={classes.title}>
              <Typography variant="subtitle2">
                {data[0]?.user?.display_name}{" "}
                {data[0]?.user?.is_verified && (
                  <CheckCircleIcon
                    style={{
                      fontSize: 15,
                      color: "blue",
                      marginLeft: 5,
                    }}
                  />
                )}
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={4}>
          <img
            src={data[1]?.images.fixed_height.url}
            className={classes.img_gif}
            alt="clip"
          />
          <Typography
            variant="subtitle2"
            style={{ fontSize: 16, fontWeight: 600, marginBottom: 5 }}
          >
            {data[1]?.title}
          </Typography>
          <Box className={classes.ingoUser} mb={3}>
            {data[1]?.user?.avatar_url && (
              <img src={data[1]?.user?.avatar_url} alt="ingoUser" />
            )}
            <Box className={classes.title}>
              <Typography variant="subtitle2">
                {data[1]?.user?.display_name}{" "}
                {data[1]?.user?.is_verified && (
                  <CheckCircleIcon
                    style={{
                      //   backgroundColor: "blue",
                      fontSize: 15,
                      color: "blue",
                      marginLeft: 5,
                    }}
                  />
                )}
              </Typography>
            </Box>
          </Box>
          <img
            src={data[2]?.images.fixed_height.url}
            className={classes.img_gif}
            alt="clip"
          />
          <Typography
            variant="subtitle2"
            style={{ fontSize: 16, fontWeight: 600, marginBottom: 5 }}
          >
            {data[2]?.title}
          </Typography>
          <Box className={classes.ingoUser}>
            {data[2]?.user?.avatar_url && (
              <img src={data[2]?.user?.avatar_url} alt="ingoUser" />
            )}
            <Box className={classes.title}>
              <Typography variant="subtitle2">
                {data[2]?.user?.display_name}{" "}
                {data[2]?.user?.is_verified && (
                  <CheckCircleIcon
                    style={{
                      //   backgroundColor: "blue",
                      fontSize: 15,
                      color: "blue",
                      marginLeft: 5,
                    }}
                  />
                )}
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
