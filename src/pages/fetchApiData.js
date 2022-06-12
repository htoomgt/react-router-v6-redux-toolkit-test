import React, { useEffect, useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { navActiveActions } from "../store";

const useFetch = (url) => {

    const [person, setPerson] = useState(null);
    const [loading, setLoading] = useState(true);
    const effectCalled = useRef(false);

    useEffect(() => {
        const fetchRandomPersons = async () => {
          const response = await fetch(url);
          const data = await response.json();
          const [item] = data.results;
          
          setPerson(item);
          setLoading(false);
        };
    
        if(!effectCalled.current){
            fetchRandomPersons();
            effectCalled.current = true;
        }
    
        
      }, []);

      return {person, loading};
}

const FetchApiData = () => {
  const dispatch = useDispatch();
  const [count, setCount] = useState(0);
  const {person, loading} = useFetch("https://api.randomuser.me");
  

  useEffect(() => {
    dispatch(navActiveActions.setActivePage("api-fetch-data"));
  }, []);

  useEffect(() => {
    document.title = `You clicked ${count} time`;
  }, [count]);

  

  return (
    <>
      <h2 className="api-fetch-data"> Fetch Api Data </h2>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        {" "}
        Click Me
      </button>
      <p> Click count : {count}</p>

      {loading ? <div> loading ...</div> : <div>{person.name.first}</div>}
    </>
  );
};

export default FetchApiData;
