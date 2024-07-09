import { useState } from "react"

const InputField = ({ citiesObj }: { citiesObj: string[] }) => {
  const [showFields, setShowFields] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget

    const continentInput = form.elements.namedItem(
      "continent"
    ) as HTMLInputElement
    const cityInput = form.elements.namedItem("city") as HTMLInputElement

    const continent = continentInput.value
    const city = cityInput.value
    if (continent && city) {
      citiesObj.push(`${continent}/${city}`)
    }
  }

  return (
    <div>
      <button onClick={() => setShowFields(!showFields)}>Add Clock</button>
      {showFields && (
        <form onSubmit={handleSubmit}>
          <div>
            <input type="text" placeholder="Continent" required />
            <input type="text" placeholder="City" required />
          </div>
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  )
}
export default InputField
