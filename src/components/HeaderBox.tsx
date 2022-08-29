import React from "react"
import { useNavigate } from "react-router-dom"
import Breadcrumbs from "@mui/material/Breadcrumbs"
import Link from "@mui/material/Link"
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
import ButtonGroup from "@mui/material/ButtonGroup"
import Button from "@mui/material/Button"

interface HeaderBoxProps {
  breadcrumbsText?: string | undefined
  title: string
  buttonGroup?: boolean
  sortAZ?: () => void
  sortImpact?: () => void
}

const HeaderBox: React.FC<HeaderBoxProps> = (props: HeaderBoxProps) => {
  const { breadcrumbsText, title, buttonGroup, sortAZ, sortImpact } = props

  const navigate = useNavigate()

  return (
    <>
      <Box sx={{ height: 40 }}>
        {breadcrumbsText && (
          <Breadcrumbs aria-label="breadcrumb">
            <Link
              underline="hover"
              color="inherit"
              onClick={() => navigate("/")}
            >
              My footprint
            </Link>
            <Typography color="text.primary">{breadcrumbsText}</Typography>
          </Breadcrumbs>
        )}
      </Box>
      <Typography align="center" variant="h2" color="text.secondary">
        {title}
      </Typography>
      <Box sx={{ height: 40 }}>
        {buttonGroup && (
          <ButtonGroup
            color="inherit"
            variant="text"
            aria-label="text button group"
            style={{ marginBottom: "10px" }}
          >
            <Button color="inherit" onClick={sortAZ}>
              A..Z
            </Button>
            <Button color="inherit" onClick={sortImpact}>
              Impact
            </Button>
          </ButtonGroup>
        )}
      </Box>
    </>
  )
}

export default HeaderBox
