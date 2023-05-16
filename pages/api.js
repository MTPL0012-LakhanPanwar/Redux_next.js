// import { wrapper } from "../store/index";
// import { addUser } from "../store/reducer";

// export const getServerSideProps = wrapper.getServerSideProps(
//   (store) => async () => {
//   const response = await fetch("http://localhost:9000/api/tutorials");
//   console.log(response)
//   const { data } = await response.json();
  
//   store.dispatch(addUser({data}));
//   // store.dispatch(increment())
// })