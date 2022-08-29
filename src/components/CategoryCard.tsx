import React from "react"
import { useNavigate } from "react-router-dom"
import Typography from "@mui/material/Typography"
import Stack from "@mui/material/Stack"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import IconButton from "@mui/material/IconButton"
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos"

import FootprintChip from "./FootprintChip"
import { IRootObjectCategories, TransactionsJSON } from "../types/types"
import { averageFootprintCalculation } from "../utils/calc"

interface CategoryCardProps {
  category: IRootObjectCategories
  transactions: TransactionsJSON
}

const CategoryCard: React.FC<CategoryCardProps> = (
  props: CategoryCardProps
) => {
  const { category, transactions } = props

  const navigate = useNavigate()

  return (
    <Card>
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
            <FootprintChip
              labelText={`${averageFootprintCalculation(
                category.mainCategory,
                transactions
              )} kg CO2e`}
              chipColor={
                averageFootprintCalculation(
                  category.mainCategory,
                  transactions
                ) < 20
                  ? "success"
                  : "warning"
              }
            />
            <IconButton
              onClick={() => navigate(`/transactions/${category.mainCategory}`)}
            >
              <ArrowForwardIosIcon />
            </IconButton>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  )
}

export default CategoryCard
