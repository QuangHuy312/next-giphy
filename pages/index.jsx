import { Box, Container } from '@mui/material'
import { makeStyles } from '@mui/styles'
import Image from 'next/image'
import React from 'react'
import MainLayout from '../components/layout/main'
import BANNER from '@/assets/banner.gif'
import dynamic from 'next/dynamic'

const Trending = dynamic(() => import('../components/Home/trending'), {
	ssr: false,
})
const Home = () => {
	const useStyles = makeStyles(() => ({
		container: {
			padding: '0px 80px',
		},
	}))
	const classes = useStyles()
	return (
		<Container className={classes.container}>
			<Box>
				<Image src={BANNER} alt="clip_carousel" layout="responsive" />
			</Box>

			<Trending />
		</Container>
	)
}

Home.Layout = MainLayout

export default Home
