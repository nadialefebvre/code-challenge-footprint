import { TransactionsJSON } from "../types/types"

export const averageFootprintCalculation = (
  mainCategory: string,
  transactions: TransactionsJSON
) => {
  const categoryTransactions = transactions.filter(
    transaction => transaction.mainCategory === mainCategory
  )

  if (categoryTransactions.length > 0) {
    const totalFootprintForCategoryInGrams = categoryTransactions
      .map(
        transaction => transaction.transaction.footprint.carbonEmissionInGrams
      )
      .reduce(
        (prevValue: number, currValue: number) => prevValue + currValue,
        0
      )

    const averageFootprintCategoryInKG = Math.round(
      totalFootprintForCategoryInGrams / categoryTransactions.length / 1000
    )
    return averageFootprintCategoryInKG
  }

  return 0
}
