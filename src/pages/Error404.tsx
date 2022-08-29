import React, { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import Container from "@mui/material/Container"
import Box from "@mui/material/Box"
import Breadcrumbs from "@mui/material/Breadcrumbs"
import Link from "@mui/material/Link"
import Typography from "@mui/material/Typography"

const Error404: React.FC = () => {
  const navigate = useNavigate()

  useEffect(() => {
    navigate("/error404")
  }, [navigate])

  return (
    <Container maxWidth="md">
      <Box sx={{ height: 40 }}>
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="inherit" onClick={() => navigate("/")}>
            My footprint
          </Link>
          <Typography color="text.primary">Error 404</Typography>
        </Breadcrumbs>
      </Box>
      <Typography align="center" variant="h2" color="text.secondary">
        Error 404
      </Typography>
      <Box sx={{ height: 40 }} />
      <Typography variant="h5" color="text.secondary">
        Page not found, follow the breadcrumbs to reach your footprint page.
      </Typography>
    </Container>
  )
}

export default Error404
