"use client"

import { useState, useEffect } from "react"

const CatFact = () => {
  const [fact, setFact] = useState<string>("Get a cat fact!")

  const fetchCatFact = async () => {
    try {
      const response = await fetch("https://catfact.ninja/fact")
      const data = await response.json()
      setFact(data.fact)
    } catch {
      setFact("Error fecthing cat fact, please try again later")
      console.error("Error fetching cat fact")
    }
  }

  useEffect(() => {
    fetchCatFact()
  }, [])

  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "20px",
        borderRadius: "8px",
        textAlign: "center",
      }}
    >
      <p>{fact}</p>
      <button
        onClick={fetchCatFact}
        style={{ padding: "10px", borderRadius: "5px", cursor: "pointer" }}
      >
        Press if you love cats!
      </button>
    </div>
  )
}

export default CatFact
