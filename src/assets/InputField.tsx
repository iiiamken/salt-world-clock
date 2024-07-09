import { useState } from "react"

const InputField = () => {
  const [showFields, setShowFields] = useState(false)

  return (
    <div>
      <button
        onClick={() => {
          showFields === false ? setShowFields(true) : setShowFields(false)
        }}
      >
        Add Clock
      </button>
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
