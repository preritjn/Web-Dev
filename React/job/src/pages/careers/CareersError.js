import { useRouteError,NavLink } from "react-router-dom"

export default function CareersError() {
  const error = useRouteError()
  return (
    <div className="careers-error">
      <h2>Error</h2>
      <p>{error.message}</p>
      <NavLink to="/">Back to home page</NavLink>
    </div>
  )
}