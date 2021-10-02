import React, { useContext } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { AppContext } from '../../context/ContextProvider';
import AppScreens from '../AppScreens';
import NavStructure from '../navStructure/NavStructure';
import styles from './Styles.module.css'; 

const AppContainer = () => {

    const { authState, setAuthState } = useContext(AppContext);
    
    return (
        <>
            <Router>
                <div>
                    {
                        authState.isLoggedIn && <NavStructure setAuthState={setAuthState} />
                    }                    
                    <div className={styles.container}>                        
                        <AppScreens authState={authState} />
                    </div>
                </div>
            </Router>
        </>
    );
}

export default AppContainer;
