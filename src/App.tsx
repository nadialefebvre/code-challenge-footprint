import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"

import CategoryTransactions from "./pages/CategoryTransactions"
import MyFootprint from "./pages/MyFootprint"
import Error404 from "./pages/Error404"

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MyFootprint />} />
        <Route
          path="/transactions"
          // path="/transactions/:mainCategory"
          element={<CategoryTransactions />}
        />
        <Route path="*" element={<Error404 />} />
        <Route path="/error404" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
