import React, {Fragment, useRef, useEffect, useContext} from 'react';
import PropTypes from 'prop-types';
import classes from './Person.css'
import withClass from "../../../hoc/withClass";
import AuthContext from '../../../context/auth-contecxt';

const Person = props => {
    const inputEl = useRef(null);
    const authContext = useContext(AuthContext);

    useEffect(() => {
        inputEl.current.focus();
    });

    return (
        <Fragment>
        {/*<div className={classes.Person}>*/}
            {authContext.authenticated ? <p>Authenticated!</p> : <p>Please Log in!</p>}
        <p onClick={props.click}>I'm a {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
            <input
                ref={inputEl}
                type="text"
                onChange={props.changed}
                value={props.name}/>
        {/*</div>*/}
        </Fragment>
    )
}

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
}

export default withClass(Person, classes.Person);