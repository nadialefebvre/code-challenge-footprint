import React from "react"
import { useNavigate } from "react-router-dom"
import Container from "@mui/material/Container"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import ButtonGroup from "@mui/material/ButtonGroup"
import Button from "@mui/material/Button"
import Stack from "@mui/material/Stack"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import Chip from "@mui/material/Chip"
import IconButton from "@mui/material/IconButton"
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos"

import Loader from "../components/Loader"

import { Props } from "../types/types"

const MyFootprint: React.FC<Props> = ({
  categories,
  transactions,
  isLoading,
}: Props) => {
  const navigate = useNavigate()

  return (
    <Container maxWidth="md">
      <Box sx={{ height: 40 }} />
      <Typography align="center" variant="h2" color="text.secondary">
        My footprint
      </Typography>
      <Box sx={{ height: 40 }}>
        <ButtonGroup
          color="inherit"
          variant="text"
          aria-label="text button group"
          style={{
            marginBottom: "10px",
          }}
        >
          <Button color="inherit" onClick={() => console.log("A..Z clicked")}>
            A..Z
          </Button>
          <Button color="inherit" onClick={() => console.log("Impact clicked")}>
            Impact
          </Button>
        </ButtonGroup>
      </Box>
      <Stack spacing={4}>
        {isLoading ? <Loader /> : categories.map(category => (
          <Card key={category.mainCategoryID}>
                <CardContent>
                  <Stack direction="row" justifyContent="space-between" alignItems="center">
                    <Typography variant="h5" color="text.secondary">
                      {category.mainCategory}
                    </Typography>
                    <Stack direction="row" justifyContent="space-between" alignItems="center">
                    <Chip
                      label="averageFootprint"
                      color="warning"
                      variant="outlined"
                      sx={{ width: "150px" }}
                    />
                      <IconButton
                        onClick={() =>
                          navigate(`/transactions/${category.mainCategory}`)
                        }
                      >
                        <ArrowForwardIosIcon />
                      </IconButton>
                    </Stack>
                  </Stack>
                </CardContent>
          </Card>
        ))}
      </Stack>
    </Container>
  )
}

export default MyFootprint
