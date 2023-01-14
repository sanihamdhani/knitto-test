import { useEffect } from "react";
import HomeComponents from "./todo/components/Home";
import { getStaticProps } from "./todo/components/ISR";
import BasicExample from "./todo/components/Navbar";
export default function Home({ data }) {
  useEffect(() => {
    console.log(data.props.todo.slice(0, 10));
  });
  return (
    <div>
      <BasicExample />
      <HomeComponents />;
    </div>
  );
}

export async function getServerSideProps({ todo }) {
  const data = await getStaticProps();
  return { props: { data } };
}
