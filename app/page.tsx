import CatFact from "./components/random/CatFact"

// app/page.tsx
export default function HomePage() {
  return (
    <div>
      <section>
        <p>Hi, I am Shreyes! This is my portfolio!</p>
        <h1>Welcome to My Portfolio</h1>
      </section>
      <div style={{ flex: 0.3 }}>
        <CatFact />
      </div>
    </div>
  )
}
