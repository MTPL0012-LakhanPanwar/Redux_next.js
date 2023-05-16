import { useSelector, useDispatch } from "react-redux";
import { wrapper } from "../store/index";
import { addUser } from "../store/reducer";
import { useEffect, useState } from "react";

export default function data() {

    const [initialRenderComplete, setInitialRenderComplete] = useState(false);
    const { users } = useSelector((state) => state.users);
    console.log(users)
    const dispatch = useDispatch();
    const addNewUser = () => {
        dispatch(addUser());
      };

     useEffect(()=>{
        setInitialRenderComplete(true);
        addNewUser();
     },[]) 
     if (!initialRenderComplete) {
		return null;
	} 
    
    else {

    return ( 
      <div>
      <div>
          <h1>Event Page</h1>
          
          {users[0].map((res, index) => {
                  return (
                    <div key={res.title} style={{textAlign: "center", marginTop: "6%"}}>
                      <h2>{res.title}</h2>
                      <h2>{res.description}</h2>
                      <h2>{res.published}</h2>
                      <h2>{res.createdAt}</h2>
                      <h2>{res.updatedAt}</h2>
                    </div>
                  )
                 })
          } 

      </div>
      </div>
    )
    }
  }

export const getServerSideProps = wrapper.getServerSideProps(
    (store) => async () => {
    const response = await fetch("http://localhost:9000/api/tutorials");
    console.log(response)
    const data = await response.json(); 
    
    store.dispatch(addUser(data));
    // store.dispatch(increment())
  })