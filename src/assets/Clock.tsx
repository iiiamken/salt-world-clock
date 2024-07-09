import { useState, useEffect } from "react"

function Clock({ timezone }: { timezone: string }) {
  const [time, setTime] = useState(
    new Date().toLocaleTimeString("en-US", { timeZone: timezone })
  )

  useEffect(() => {
    const interval = setInterval(() => {
      const newDate = new Date()
      const options = { timeZone: timezone }
      const time = newDate.toLocaleTimeString("en-US", options)

      setTime(time)
    }, 1000)

    return () => {
      clearInterval(interval)
    }
  }, [])

  return (
    <div>
      <span>{time}</span>
      <p>{timezone}</p>
    </div>
  )
}

export default Clock
