import React, { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography"

import HeaderBox from "../components/HeaderBox"

const Error404: React.FC = () => {
  const navigate = useNavigate()

  useEffect(() => {
    navigate("/error404")
  }, [navigate])

  return (
    <Container maxWidth="md">
      <HeaderBox breadcrumbsText="Error 404" title="Error 404" />
      <Typography variant="h5" color="text.secondary">
        Page not found, follow the breadcrumbs to reach your footprint page.
      </Typography>
    </Container>
  )
}

export default Error404
