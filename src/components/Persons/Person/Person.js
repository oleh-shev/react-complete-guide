import React, {Fragment} from 'react';
import classes from './Person.css'
import withClass from "../../../hoc/withClass";
// import Aux from '../../../hoc/Aux';

const Person = props => {
    return (
        <Fragment>
        {/*<div className={classes.Person}>*/}
            <p onClick={props.click}>I'm a {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        {/*</div>*/}
        </Fragment>
    )
}

export default withClass(Person, classes.Person);