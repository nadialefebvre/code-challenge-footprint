import React from "react"
import Skeleton from "@mui/material/Skeleton"

const Loader: React.FC = () => {
  return (
    <>
      <Skeleton variant="rectangular" height={80} animation="wave" />
      <Skeleton variant="rectangular" height={80} animation="wave" />
      <Skeleton variant="rectangular" height={80} animation="wave" />
      <Skeleton variant="rectangular" height={80} animation="wave" />
      <Skeleton variant="rectangular" height={80} animation="wave" />
      <Skeleton variant="rectangular" height={80} animation="wave" />
      <Skeleton variant="rectangular" height={80} animation="wave" />
      <Skeleton variant="rectangular" height={80} animation="wave" />
    </>
  )
}

export default Loader
