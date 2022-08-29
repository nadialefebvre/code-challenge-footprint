import React from "react"
import Skeleton from "@mui/material/Skeleton"
import Stack from '@mui/material/Stack';

const Loader: React.FC = () => {
  return (
      <Stack spacing={4}>
      <Skeleton variant="rectangular" height={80} animation="wave" />
      <Skeleton variant="rectangular" height={80} animation="wave" />
      <Skeleton variant="rectangular" height={80} animation="wave" />
      <Skeleton variant="rectangular" height={80} animation="wave" />
      <Skeleton variant="rectangular" height={80} animation="wave" />
      <Skeleton variant="rectangular" height={80} animation="wave" />
      <Skeleton variant="rectangular" height={80} animation="wave" />
      <Skeleton variant="rectangular" height={80} animation="wave" />
    </Stack>
  )
}

export default Loader
