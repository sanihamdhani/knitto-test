export async function getStaticProps() {
  // const dispatch = useDispatch();
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const todo = await res.json();
  return { props: { todo }, revalidate: 10 };
}
