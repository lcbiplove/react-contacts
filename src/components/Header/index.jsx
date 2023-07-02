import React from "react";
import { FaUserPlus } from "react-icons/fa"
import { useNavigate } from "react-router-dom";
import styles from './Header.module.css'
import SearchInput from "../SearchInput";

const logo = require('../../assets/logo.png');

const Header = () => {
    var navigate = useNavigate()

    return (
        <header>
            <div className={styles.logoContainer}>
                <div onClick={()=>navigate("/")} className={styles.logoWrapper}>
                    <img src={logo} alt="logo.png" />
                    <h2>Contacts</h2>
                </div>
                <div>
                    <FaUserPlus size={30} />
                </div>
            </div>
            <SearchInput />
        </header>
    );
};

export default Header;