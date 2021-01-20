import React from "react";
import {Button, NavItem, NavLink} from "reactstrap";
import classnames from "classnames";
import Icon from '../../assets/images/whatsapp.svg';

const ButtonComponent = ({label, isActive, toggle, icon}) => {
    return (
        <Button
            outline
            warning
            className={classnames({ active: isActive })}
            onClick={() => { toggle('1'); }}>
            <img src={icon} className='svg' />  <div className='btn-text'>{label}</div>
        </Button>
    );
};

export default ButtonComponent;
