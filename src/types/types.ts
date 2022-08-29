export type CategoriesJSON = IRootObjectCategories[]

export interface IRootObjectCategories {
  mainCategoryID: number
  mainCategory: string
  subcategories: ISubcategory[]
}

export interface ISubcategory {
  name: string
  id: number
}

export type TransactionsJSON = IRootObjectTransactions[]

export interface IRootObjectTransactions {
  transaction: ITransaction
  mainCategory: string
  subCategory: string
}

interface ITransaction {
  category: string
  description: string
  amount: IAmount
  footprint: IFootprint
  madeOn: string
  categoryID: number
}

interface IAmount {
  value: number
  currency: string
}

interface IFootprint {
  carbonEmissionInGrams: number
  carbonEmissionInOunces: number
}

export type GeneralProps = {
  categories: CategoriesJSON
  transactions: TransactionsJSON
  isLoading: boolean
}
