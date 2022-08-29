// this website helped me for interface/type setup: https://beshanoe.github.io/json2ts/

export type CategoriesJSON = IRootObjectCategories[]

export interface IRootObjectCategories {
  mainCategoryID: number
  mainCategory: string
  subcategories: ISubcategory[]
}

interface ISubcategory {
  name: string
  id: number
}

export type TransactionsJSON = IRootObjectTransactions[]

interface IRootObjectTransactions {
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

export type Props = {
  categories: CategoriesJSON
  transactions: TransactionsJSON
  isLoading: boolean
}
