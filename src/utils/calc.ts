import { TransactionsJSON } from "../types/types"

export const averageFootprintCalculation = (
  mainCategory: string,
  transactions: TransactionsJSON
) => {
  const categoryTransactions = transactions.filter(
    item => item.mainCategory === mainCategory
  )

  const totalFootprintForCategoryInGrams = categoryTransactions
    .map(item => item.transaction.footprint.carbonEmissionInGrams)
    .reduce((prevValue: number, currValue: number) => prevValue + currValue, 0)

  const averageFootprintCategoryInKG = Math.round(
    totalFootprintForCategoryInGrams / categoryTransactions.length / 1000
  )

  return averageFootprintCategoryInKG
}
