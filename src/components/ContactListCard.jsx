import React from "react";
import { FaSms, FaPhoneAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import styles from './ContactListCard.module.css';
import { NamedProfile } from "./NamedProfile";

const ContactListCard = ({ name, phone, id }) => {
    const navigate = useNavigate();

    return (
        <div>
            <div  
                onClick={() => { navigate(`/contacts/${id}`);}}
                className={styles.contactRowWrapper}
            >
                <div className={styles.contactNameWrapper}>
                        <NamedProfile name={name} />
                        <div>
                            <strong>{name}</strong>
                            <div className={styles.phoneNumber}>{phone}</div>
                        </div>
                </div>
                <div className={styles.phoneSmsWrapper}>
                        <FaPhoneAlt className={styles.phoneIcon} size={20} />
                        <FaSms size={20} />
                </div>
            </div>
        </div> 
    );
};

export default ContactListCard;