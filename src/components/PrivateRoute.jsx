import { Navigate } from "react-router-dom";

function PrivateRoute(props) {
  if (localStorage.getItem("state") == 'true') {
    return props.children;
  } else {
    return <Navigate to="/" />;
  }
}

export default PrivateRoute;
