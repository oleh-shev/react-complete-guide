import React, { useEffect } from 'react';
import classes from "./Cockpit.css";

const Cockpit = (props) => {
    useEffect(() => {
        console.log('[Cockpit.js] useEffect');
        const timer = setTimeout(() => {
            console.warn('Saved data to the Cloud');
        }, 1000);

        return () => {
            clearTimeout(timer);
            console.log('[Cockpit.js] willCleanUp');
        };

    }, []);

    useEffect(() => {
        console.log('[Cockpit.js] 2nd useEffect');
        return () => {
            console.log('[Cockpit.js] 2nd willCleanUp');
        };
    });

    const assignedClasses = [];
    let btnClass = '';

    if (props.showPerson) {
        btnClass = classes.Red;
    }

    if (props.personsLengt <=2) {
        assignedClasses.push(classes.red);
    }

    if (props.personsLengt <= 1) {
        assignedClasses.push(classes.bold);
    }

    return (
        <div className={classes.Cockpit}>
            <h1>Hi, I'm React App</h1>
            <p className={assignedClasses.join(' ')}>This is really working!</p>
            <button className={btnClass} onClick={props.clicked}>Toggle Persons</button>
        </div>
    );
};

export default React.memo(Cockpit);