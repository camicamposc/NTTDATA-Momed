import NotView from "../components/not-view/NotView";
import PageTemplate from "./Template";

const Dashboard = () => {
  return (
    <>
      <PageTemplate>
        <h1>Dashboard</h1>
        <NotView />
      </PageTemplate>
    </>
  );
};

export default Dashboard;
