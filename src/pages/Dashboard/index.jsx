import { Redirect } from "react-router-dom";

const Dashboard = ({ auth }) => {
  if (!auth) {
    return <Redirect to="/" />;
  }
  return <div>Dashboard</div>;
};

export default Dashboard;
