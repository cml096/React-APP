import {links} from "./links";
import {NavLink} from "react-router-dom";
import * as React from "react";

export const NavBar = () => {

    const isActive = (props: {
        isActive: boolean;
        isPending: boolean;
    }): React.CSSProperties | undefined => {
        const {isActive} = props;
        return {
            color: isActive ? 'red' : 'blue'
        }
    }

    return (
        <nav>
            <ul>
                {links.map((link) =>
                    <li key={link.to}>
                        <NavLink to={link.to} style={isActive}>
                            {link.displayText}
                        </NavLink>
                    </li>
                )}
            </ul>
        </nav>
    );
}