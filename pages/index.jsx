import BANNER from "@/assets/banner.gif";
import LOADING from "@/assets/loading.gif";
// import Artists from "@/components/Home/artists";
// import Stories from "@/components/Home/stories";
// import Trending from "@/components/Home/trending";
// import Videos from "@/components/Home/video";
import { API_KEY } from "@/constants/config";
import { Box, Container } from "@mui/material";
import { makeStyles } from "@mui/styles";
import UtilityApi from "apiClient/utilityApi";
import dynamic from "next/dynamic";
import Image from "next/image";
import React, { Suspense, useEffect, useState } from "react";
import MainLayout from "../components/layout/main";

const Trending = dynamic(() => import("../components/Home/trending"), {
  suspense: true,
});
const Stories = dynamic(() => import("../components/Home/stories"), {
  suspense: true,
});
const Artists = dynamic(() => import("../components/Home/artists"), {
  suspense: true,
});
const Videos = dynamic(() => import("../components/Home/video"), {
  suspense: true,
});

const Home = () => {
  const useStyles = makeStyles(() => ({
    container: {
      padding: "0px 80px",
      position: "relative",
    },
    loading: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%,-50%)",
      "& >img": {
        width: 80,
        height: 80,
      },
    },
  }));
  const classes = useStyles();
  const [dataTrending, setDataTrending] = useState([]);
  const [dataArtists, setDataArtists] = useState([]);
  const [dataVideoTrending, setDataVideoTrending] = useState([]);
  const [dataStories, setDataStories] = useState([]);

  const [loadingTrending, setLoadingTrending] = useState(false);
  const [loadingArtists, setLoadingArtists] = useState(false);
  const [loadingVideos, setLoadingVideos] = useState(false);
  const [loadingStories, setLoadingStories] = useState(false);

  //   Get Gifs Trending
  useEffect(() => {
    (async () => {
      setLoadingTrending(true);
      try {
        const res = await UtilityApi.trendingPoint({
          api_key: API_KEY,
          limit: 50,
        });
        setDataTrending(res);
        setLoadingTrending(false);
      } catch (err) {
        console.log(err);
        setLoadingTrending(false);
      }
    })();
  }, []);

  //   Get artists

  useEffect(() => {
    (async () => {
      setLoadingArtists(true);
      try {
        const res = await UtilityApi.searchPoint({
          api_key: API_KEY,
          q: "artists",
          limit: 50,
        });
        setLoadingArtists(false);
        setDataArtists(res);
      } catch (err) {
        setLoadingArtists(false);
        console.log(err);
      }
    })();
  }, []);

  //   Get video
  useEffect(() => {
    (async () => {
      setLoadingVideos(true);
      try {
        const res = await UtilityApi.videoTrending({
          api_key: API_KEY,
          limit: 3,
        });
        setLoadingVideos(false);
        setDataVideoTrending(res);
      } catch (err) {
        setLoadingVideos(false);
        console.log(err);
      }
    })();
  }, []);

  //   get stories

  useEffect(() => {
    (async () => {
      setLoadingStories(true);
      try {
        const res = await UtilityApi.searchPoint({
          api_key: API_KEY,
          limit: 20,
          q: "stories",
        });
        setDataStories(res);
        setLoadingStories(false);
      } catch (err) {
        console.log(err);
        setLoadingStories(false);
      }
    })();
  }, []);

  const loading =
    loadingArtists || loadingStories || loadingVideos || loadingTrending;
  return (
    <Container className={classes.container}>
      {loading ? (
        <Box className={classes.loading}>
          <Image src={LOADING} alt="loading" layout="responsive" />
        </Box>
      ) : (
        <Suspense
          fallback={
            <Box className={classes.loading}>
              <Image
                src={LOADING}
                alt="loading"
                layout="responsive"
                width={100}
                height={100}
              />
            </Box>
          }
        >
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
            <Stories dataStories={dataStories} />
          </Box>
        </Suspense>
      )}
    </Container>
  );
};

Home.Layout = MainLayout;

export default Home;
