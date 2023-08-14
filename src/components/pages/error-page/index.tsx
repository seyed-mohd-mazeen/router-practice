import { Link } from "react-router-dom";

export function ErrorPage() {
  return (
    <div>
      <h1>Error! Page Not Found</h1>
      <Link to="/">Go Back</Link>
    </div>
  );
}
