import { NavItem, NavLink } from "reactstrap";
import classnames from "classnames";
import React from "react";

const NavComponent = ({label, isActive, toggle}) => {
    return (
        <NavItem>
            <NavLink
                className={classnames({ active: isActive })}
                onClick={() => { toggle('1'); }}
            >
                {label}
            </NavLink>
        </NavItem>
    );
};

export default NavComponent;
