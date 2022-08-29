import React, { useEffect } from "react"
import { useNavigate } from "react-router-dom"

const Error404: React.FC = () => {
  const navigate = useNavigate()

  useEffect(() => {
    navigate("/error404")
  }, [navigate])

  return <div>Error404</div>
}

export default Error404
