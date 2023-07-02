import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FaPhoneAlt, FaTrash, FaEnvelope } from "react-icons/fa"
import styles from './ContactDetail.module.css'
import Loader from "../components/Loader";
import BackButton from "../components/BackButton";
import {NamedProfile, colorOptions, sizeOptions} from "../components/NamedProfile";

const ContactDetail = () => {
    const params = useParams();
    const [users, setUsers] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [err, setError] = useState(null);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users?id=${params.id}`)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setUsers(data);
                setError(null);
            })
            .catch((err) => {
                setError(err.message);
                setUsers({});
            })
            .finally(() => {setLoading(false);});
    }, []);
    
    return  isLoading ? <Loader /> : (
        <section>
            <div className={styles.profileWrapper}>
                <div>
                    <BackButton />
                    <div className={styles.namesWrapper}>
                        <NamedProfile name={users[0].name} size={sizeOptions.large} />
                        <div className={styles.nameTitle}>
                            {users[0].name}
                        </div>
                    </div>
                </div>
                <div>
                    <button className={styles.editBtn}>Edit</button>
                    <FaTrash size={20} />
                </div>
            </div>
            <div className={styles.lowerDetailsWrapper}>
                <div className={styles.detailCardWrapper}>
                    <strong>Contact Details</strong>
                    <div className={styles.detailList}>
                        <FaPhoneAlt size={18} />
                        <a className={styles.telLink} href={"tel: "+users[0].phone}>{users[0].phone}</a>
                    </div>
                    <div className={styles.detailList}>
                        <FaEnvelope size={18} />
                        <a className={styles.telLink} href={"mailto: "+users[0].email}>{users[0].email}</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactDetail;