import React from 'react'
import "./Header.css"
import {screen} from "@testing-library/react";

export default function Header({title}) {
    return(
        <>
            <h1 className="header" data-testid="header-1">{title}</h1>
            <h1 className="header">My Headr 2</h1>
        </>
    )
}
