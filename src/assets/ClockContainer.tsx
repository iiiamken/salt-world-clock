import Clock from "./Clock"
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
        <Clock timezone={city} />
      ))}
      <input type="text" id="cityInput" />
    </div>
  )
}

export default ClockContainer
