import { averageFootprintCalculation } from "./utils/calc"
import { TransactionsJSON } from "./types/types"

describe("calc", () => {
  it("averageFootprintCalculation should return 0: empty mainCategory and empty transactions array", () => {
    const testArray: TransactionsJSON = []
    expect(averageFootprintCalculation("", testArray)).toEqual(0)
  })

  it("averageFootprintCalculation should return 0: non-empty mainCategory and empty transactions array", () => {
    const testArray: TransactionsJSON = []
    expect(averageFootprintCalculation("Shopping", testArray)).toEqual(0)
  })

  it("averageFootprintCalculation should return 0: empty mainCategory and non-empty transactions array", () => {
    const testArray: TransactionsJSON = [
      {
        transaction: {
          category: "electronics_and_software",
          description: "ADOBE PHOTOGPHY Debit IRELAND",
          amount: {
            value: 10.39,
            currency: "USD",
          },
          footprint: {
            carbonEmissionInGrams: 2844.1,
            carbonEmissionInOunces: 100.32,
          },
          madeOn: "2019-07-02",
          categoryID: 30,
        },
        mainCategory: "Shopping",
        subCategory: "Electronics",
      },
    ]
    expect(averageFootprintCalculation("", testArray)).toEqual(0)
  })

  it("averageFootprintCalculation should return 3: one object with carbonEmissionInGrams of 2844.1 and valid mainCategory", () => {
    const testArray: TransactionsJSON = [
      {
        transaction: {
          category: "electronics_and_software",
          description: "ADOBE PHOTOGPHY Debit IRELAND",
          amount: {
            value: 10.39,
            currency: "USD",
          },
          footprint: {
            carbonEmissionInGrams: 2844.1,
            carbonEmissionInOunces: 100.32,
          },
          madeOn: "2019-07-02",
          categoryID: 30,
        },
        mainCategory: "Shopping",
        subCategory: "Electronics",
      },
    ]
    expect(averageFootprintCalculation("Shopping", testArray)).toEqual(3)
  })

  it("averageFootprintCalculation should return 0: one object with invalid mainCategory", () => {
    const testArray: TransactionsJSON = [
      {
        transaction: {
          category: "health_and_fitness",
          description: "24HOUR FITNESS USA,IN 800-432-6348 NY 01/05",
          amount: {
            value: 43.29,
            currency: "USD",
          },
          footprint: {
            carbonEmissionInGrams: 3998.51,
            carbonEmissionInOunces: 141.04,
          },
          madeOn: "2019-07-09",
          categoryID: 39,
        },
        mainCategory: "Leisure & Entertainment",
        subCategory: "Sports & Workout",
      },
    ]
    expect(averageFootprintCalculation("Shopping", testArray)).toEqual(0)
  })

  it("averageFootprintCalculation should return 2: multiple objects with total of carbonEmissionInGrams of 4391.74 and valid mainCategory", () => {
    const testArray: TransactionsJSON = [
      {
        transaction: {
          category: "electronics_and_software",
          description: "ADOBE PHOTOGPHY Debit IRELAND",
          amount: {
            value: 10.39,
            currency: "USD",
          },
          footprint: {
            carbonEmissionInGrams: 2844.1,
            carbonEmissionInOunces: 100.32,
          },
          madeOn: "2019-07-02",
          categoryID: 30,
        },
        mainCategory: "Shopping",
        subCategory: "Electronics",
      },
      {
        transaction: {
          category: "shopping",
          description: "Amazon UK Retail Debit LUXEMBOURG",
          amount: {
            value: 12.67,
            currency: "USD",
          },
          footprint: {
            carbonEmissionInGrams: 1547.64,
            carbonEmissionInOunces: 54.59,
          },
          madeOn: "2019-07-03",
          categoryID: 24,
        },
        mainCategory: "Shopping",
        subCategory: "Department Store",
      },
    ]
    expect(averageFootprintCalculation("Shopping", testArray)).toEqual(2)
  })

  it("averageFootprintCalculation should return 2: multiple objects with total of carbonEmissionInGrams of 4391.74 and valid mainCategory and one object with invalid mainCategory", () => {
    const testArray: TransactionsJSON = [
      {
        transaction: {
          category: "electronics_and_software",
          description: "ADOBE PHOTOGPHY Debit IRELAND",
          amount: {
            value: 10.39,
            currency: "USD",
          },
          footprint: {
            carbonEmissionInGrams: 2844.1,
            carbonEmissionInOunces: 100.32,
          },
          madeOn: "2019-07-02",
          categoryID: 30,
        },
        mainCategory: "Shopping",
        subCategory: "Electronics",
      },
      {
        transaction: {
          category: "shopping",
          description: "Amazon UK Retail Debit LUXEMBOURG",
          amount: {
            value: 12.67,
            currency: "USD",
          },
          footprint: {
            carbonEmissionInGrams: 1547.64,
            carbonEmissionInOunces: 54.59,
          },
          madeOn: "2019-07-03",
          categoryID: 24,
        },
        mainCategory: "Shopping",
        subCategory: "Department Store",
      },
      {
        transaction: {
          category: "health_and_fitness",
          description: "24HOUR FITNESS USA,IN 800-432-6348 NY 01/05",
          amount: {
            value: 43.29,
            currency: "USD",
          },
          footprint: {
            carbonEmissionInGrams: 3998.51,
            carbonEmissionInOunces: 141.04,
          },
          madeOn: "2019-07-09",
          categoryID: 39,
        },
        mainCategory: "Leisure & Entertainment",
        subCategory: "Sports & Workout",
      },
    ]
    expect(averageFootprintCalculation("Shopping", testArray)).toEqual(2)
  })
})
