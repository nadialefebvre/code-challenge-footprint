import React, { useCallback, useEffect, useState } from "react"
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

import { CategoriesJSON, Props } from "../types/types"
import { averageFootprintCalculation } from "../utils/calc"

const MyFootprint: React.FC<Props> = ({
  categories,
  transactions,
  isLoading,
}: Props) => {
  const navigate = useNavigate()

  const [sortedCategories, setSortedCategories] = useState<CategoriesJSON>([])

  const sortByMainCategoryAZ = useCallback(() => {
    const sortedAZ = [...categories].sort((a, b) => {
      const mainCategoryA = a.mainCategory
      const mainCategoryB = b.mainCategory

      if (mainCategoryA < mainCategoryB) {
        return -1
      } else if (mainCategoryA > mainCategoryB) {
        return 1
      } else {
        return 0
      }
    })
    setSortedCategories(sortedAZ)
  }, [categories])

  const sortByImpactInDescendingOrder = () => {
    const sortedImpact = [...categories].sort((a, b) => {
      const footprintA = averageFootprintCalculation(
        a.mainCategory,
        transactions
      )
      const footprintB = averageFootprintCalculation(
        b.mainCategory,
        transactions
      )
      return footprintB - footprintA
    })
    setSortedCategories(sortedImpact)
  }

  useEffect(() => {
    if (!isLoading) {
      sortByMainCategoryAZ()
    }
  }, [isLoading, sortByMainCategoryAZ])

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
          style={{ marginBottom: "10px" }}
        >
          <Button color="inherit" onClick={sortByMainCategoryAZ}>
            A..Z
          </Button>
          <Button color="inherit" onClick={sortByImpactInDescendingOrder}>
            Impact
          </Button>
        </ButtonGroup>
      </Box>
      <Stack spacing={4}>
        {isLoading ? (
          <Loader />
        ) : (
          sortedCategories.map(category => (
            <Card key={category.mainCategoryID}>
              <CardContent>
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Typography variant="h5" color="text.secondary">
                    {category.mainCategory}
                  </Typography>
                  <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                  >
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
          ))
        )}
      </Stack>
    </Container>
  )
}

export default MyFootprint
