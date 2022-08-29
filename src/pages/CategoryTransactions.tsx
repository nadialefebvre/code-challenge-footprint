import React, { useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import Container from "@mui/material/Container"
import Stack from "@mui/material/Stack"

import HeaderBox from "../components/HeaderBox"
import Loader from "../components/Loader"
import TransactionsCard from "../components/TransactionsCard"
import { GeneralProps } from "../types/types"

const CategoryTransactions: React.FC<GeneralProps> = (props: GeneralProps) => {
  const { categories, transactions, isLoading } = props

  const { mainCategory } = useParams()

  const navigate = useNavigate()

  const categoryTransactions = transactions.filter(
    transaction => transaction.mainCategory === mainCategory
  )

  const categorySubcategories = categories.length
    ? categories.find(category => category.mainCategory === mainCategory)
        ?.subcategories
    : []

  useEffect(() => {
    if (categorySubcategories === undefined) {
      navigate("/error404")
    }
  })

  return (
    <Container maxWidth="md">
      <HeaderBox breadcrumbsText={mainCategory} title="Transactions" />
      <Stack spacing={4}>
        {isLoading ? (
          <Loader />
        ) : (
          categorySubcategories?.map(subcategory => (
            <TransactionsCard
              subcategory={subcategory}
              categoryTransactions={categoryTransactions}
            />
          ))
        )}
      </Stack>
    </Container>
  )
}

export default CategoryTransactions
