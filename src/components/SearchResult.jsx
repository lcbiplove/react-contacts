import {React, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import ContactListCard from "../components/ContactListCard";
import Loader from "../components/Loader";
import NoResult from "./NoResult";


const SearchResult = () => {
    const [contacts, setContacts] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setLoading] = useState(true);

  
    const { state } = useLocation();
  
    useEffect(() => {
      const url = `https://jsonplaceholder.typicode.com/users?name_like=${state || ''}`;
  
      fetch(url)
        .then((response) => {
            if (response.ok) {
                return response.json();
            }
            throw response;
        })
        .then((data) => {
            setContacts(data);
        })
        .catch((error) => {
            setError(error);
        })
        .finally(() => {
            setLoading(false);
        })
    }, [state]); 

    let component = <Loader />;
    if(!isLoading) {
        if(contacts.length == 0) {
            component = <NoResult />;
        } else {
            component =  contacts.map(contact => (
                <ContactListCard 
                    key={contact.id}
                    id={contact.id}
                    name={contact.name}
                    phone={contact.phone}
                />
            ));
        }
    }
  
    return <section>{component}</section>;
};

export default SearchResult;