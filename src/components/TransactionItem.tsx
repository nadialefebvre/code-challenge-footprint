import React from "react"
import uniqid from "uniqid"
import ListItem from "@mui/material/ListItem"
import ListItemText from "@mui/material/ListItemText"

import FootprintChip from "./FootprintChip"
import { IRootObjectTransactions } from "../types/types"

interface TransactionItemProps {
  transaction: IRootObjectTransactions
}

const TransactionItem: React.FC<TransactionItemProps> = (
  props: TransactionItemProps
) => {
  const { transaction } = props

  return (
    <ListItem key={uniqid()}>
      <ListItemText
        primary={transaction.transaction.description}
        secondary={`${transaction.transaction.amount.value} USD on ${transaction.transaction.madeOn}`}
      />
      <FootprintChip
        labelText={`${Math.round(
          transaction.transaction.footprint.carbonEmissionInGrams / 1000
        )} kg CO2e`}
        chipColor={
          transaction.transaction.footprint.carbonEmissionInGrams < 3000
            ? "success"
            : "warning"
        }
        size="small"
      />
    </ListItem>
  )
}

export default TransactionItem
