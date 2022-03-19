import { Box, Container } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import MainLayout from "../components/layout/main";
import BANNER from "@/assets/banner.gif";
import Trending from "@/components/Home/trending";
import UtilityApi from "apiClient/utilityApi";
import { API_KEY, PINGBACK_ID } from "@/constants/config";
import Artists from "@/components/Home/artists";
import Videos from "@/components/Home/video";
import Stories from "@/components/Home/stories";

const Home = () => {
  const useStyles = makeStyles(() => ({
    container: {
      padding: "0px 80px",
    },
  }));
  const classes = useStyles();
  const [dataTrending, setDataTrending] = useState([]);
  const [dataArtists, setDataArtists] = useState([]);
  const [dataVideoTrending, setDataVideoTrending] = useState([]);
  const [dataStories, setDataStories] = useState([]);

  //   Get Gifs Trending
  useEffect(() => {
    (async () => {
      try {
        const res = await UtilityApi.trendingPoint({
          api_key: API_KEY,
          limit: 50,
        });
        setDataTrending(res);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  //   Get artists

  useEffect(() => {
    (async () => {
      try {
        const res = await UtilityApi.searchPoint({
          api_key: API_KEY,
          q: "artists",
          limit: 50,
        });
        setDataArtists(res);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  //   Get video
  useEffect(() => {
    (async () => {
      try {
        const res = await UtilityApi.videoTrending({
          api_key: API_KEY,
          limit: 3,
        });
        setDataVideoTrending(res);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  //   get stories

  useEffect(() => {
    (async () => {
      try {
        const res = await UtilityApi.searchPoint({
          api_key: API_KEY,
          limit: 20,
          q: "stories",
        });
        setDataStories(res);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);
  return (
    <Container className={classes.container}>
      <Box>
        <Image src={BANNER} alt="clip_carousel" layout="responsive" />
      </Box>
      <Box mb={4}>
        <Trending data={dataTrending} />
      </Box>
      <Box mb={4}>
        <Artists data={dataArtists} />
      </Box>
      <Box mb={4}>
        <Videos data={dataVideoTrending} />
      </Box>

      <Box mb={4}>
        <Stories data={dataStories} />
      </Box>
    </Container>
  );
};

Home.Layout = MainLayout;

export default Home;
