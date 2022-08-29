import React, { useCallback, useEffect, useState } from "react"
import Container from "@mui/material/Container"
import Stack from "@mui/material/Stack"

import HeaderBox from "../components/HeaderBox"
import Loader from "../components/Loader"
import { CategoriesJSON, GeneralProps } from "../types/types"
import { averageFootprintCalculation } from "../utils/calc"
import CategoryCard from "../components/CategoryCard"

const MyFootprint: React.FC<GeneralProps> = (props: GeneralProps) => {
  const { categories, transactions, isLoading } = props

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
      <HeaderBox
        title="My footprint"
        hasButtonGroup
        sortAZ={sortByMainCategoryAZ}
        sortImpact={sortByImpactInDescendingOrder}
      />
      <Stack spacing={4}>
        {isLoading ? (
          <Loader />
        ) : (
          sortedCategories.map(category => (
            <CategoryCard
              key={category.mainCategoryID}
              category={category}
              transactions={transactions}
            />
          ))
        )}
      </Stack>
    </Container>
  )
}

export default MyFootprint
