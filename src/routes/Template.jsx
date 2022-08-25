import Header from "../components/Header";
import Navbar from "../components/navbar/Navbar";
import Section from "../components/section/section";

const PageTemplate = (props) => {
  return (
    <>
      <main>
        <Header></Header>
        <Navbar></Navbar>
        <Section>{props.children}</Section>
      </main>
    </>
  );
};

export default PageTemplate;
