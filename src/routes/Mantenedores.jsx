import NotView from "../components/not-view/NotView";
import Table from "../components/table/Table";
import PageTemplate from "./Template";

const Mantenedores = () => {
  const infoTableTemp = [];
  return (
    <>
      <PageTemplate>
        {/* <h1>Mantenedores</h1>  */}
        <NotView />
      </PageTemplate>
    </>
  );
};

export default Mantenedores;
