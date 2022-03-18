import { Box } from '@mui/system'
import React from 'react'
import LOGO from '@/assets/trending.svg'
import Image from 'next/image'
import { Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'

const Trending = () => {
	const useStyles = makeStyles(() => ({}))
	const classes = useStyles()
	return (
		<Box mt={2}>
			<Box display="flex" justifyContent="space-between">
				<Box display="flex">
					<Box width="30px" mr={2}>
						<Image layout="responsive" src={LOGO} alt="logo" />
					</Box>
					<Typography variant="h5" style={{ fontSize: 23, fontWeight: 700 }}>
						Trending
					</Typography>
				</Box>
				<Typography variant="subtitle2" style={{ color: 'rgb(166, 166, 166)', cursor: 'pointer' }}>
					All The GIFs
				</Typography>
			</Box>
		</Box>
	)
}

export default Trending
