    import {React, useState, useEffect } from "react";
    import ContactListCard from "../components/ContactListCard";
    import Loader from "../components/Loader";
    import NoResult from "../components/NoResult";


    const Home = () => {

        const [contacts, setContacts] = useState([]);
        const [isLoading, setLoading] = useState(true);
        const [err, setError] = useState(null);

        useEffect(() => {
            fetch(`https://jsonplaceholder.typicode.com/users`)
                .then((response) => {
                    return response.json();
                })
                .then((actualData) => {
                    setContacts(actualData);
                    setError(null);
                })
                .catch((err) => {
                    setError(err.message);
                    setContacts(null);
                })
                .finally(() => {setLoading(false);});
        }, []);

        
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
    
    export default Home;