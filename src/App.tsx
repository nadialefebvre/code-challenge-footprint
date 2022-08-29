import React, { useState, useEffect } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Container from "@mui/material/Container"

import MyFootprint from "./pages/MyFootprint"
import CategoryTransactions from "./pages/CategoryTransactions"
import Error404 from "./pages/Error404"
import { CategoriesJSON, TransactionsJSON } from "./types/types"
import { CATEGORIES_API_URL, TRANSACTIONS_API_URL } from "./utils/urls"

const App: React.FC = () => {
  const [categories, setCategories] = useState<CategoriesJSON>([])
  const [transactions, setTransactions] = useState<TransactionsJSON>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)

  useEffect(() => {
    setIsLoading(true)
    fetch(CATEGORIES_API_URL)
      .then(res => res.json())
      .then(data => setCategories(data.categories))
      .then(() => {
        fetch(TRANSACTIONS_API_URL)
          .then(res => res.json())
          .then(data => setTransactions(data.transactions))
          .then(() => setIsLoading(false))
          .catch(err => console.log("error: ", err))
      })
      .catch(err => console.log("error: ", err))
  }, [])

  return (
    <Container style={{ margin: "40px 0" }} maxWidth={false}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <MyFootprint
                categories={categories}
                transactions={transactions}
                isLoading={isLoading}
              />
            }
          />
          <Route
            path="/transactions/:mainCategory"
            element={
              <CategoryTransactions
                categories={categories}
                transactions={transactions}
                isLoading={isLoading}
              />
            }
          />
          <Route path="*" element={<Error404 />} />
          <Route path="/error404" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </Container>
  )
}

export default App
