import Clock from "./Clock"
import InputField from "./InputField"
const citiesObj = [
  "Europe/London",
  "Europe/Stockholm",
  "Asia/Tokyo",
  "America/New_York",
]
function ClockContainer() {
  return (
    <div>
      {citiesObj.map((city) => (
        <Clock timezone={city} key={city} />
      ))}
      <InputField citiesObj={citiesObj} />
    </div>
  )
}

export default ClockContainer
