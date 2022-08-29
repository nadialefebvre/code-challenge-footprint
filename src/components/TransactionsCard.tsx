import React, { useState } from "react"
import uniqid from "uniqid"
import Stack from "@mui/material/Stack"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import Collapse from "@mui/material/Collapse"
import List from "@mui/material/List"
import Divider from "@mui/material/Divider"

import { ISubcategory, TransactionsJSON } from "../types/types"
import TransactionItem from "./TransactionItem"
import SubcategoryItem from "./SubcategoryItem"

interface TransactionsCardProps {
  subcategory: ISubcategory
  categoryTransactions: TransactionsJSON
}

const TransactionsCard: React.FC<TransactionsCardProps> = (
  props: TransactionsCardProps
) => {
  const { subcategory, categoryTransactions } = props

  const [isExpanded, setIsExpanded] = useState<boolean>(false)

  return (
    <Card>
      <SubcategoryItem
        setIsExpanded={setIsExpanded}
        isExpanded={isExpanded}
        subcategory={subcategory}
      />
      <Collapse in={isExpanded} timeout="auto" unmountOnExit>
        <CardContent>
          <List sx={{ width: "100%", bgcolor: "background.paper" }}>
            <Stack divider={<Divider flexItem light />}>
              {categoryTransactions
                .filter(
                  transaction => transaction.subCategory === subcategory.name
                )
                .map(transaction => (
                  <TransactionItem key={uniqid()} transaction={transaction} />
                ))}
            </Stack>
          </List>
        </CardContent>
      </Collapse>
    </Card>
  )
}

export default TransactionsCard
