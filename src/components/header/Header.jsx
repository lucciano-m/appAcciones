import React from "react";

function Header(props)
{
    return(
        <>
        <header className="py-4">
            <div className="borderHeader container d-flex justify-content-between align-items-baseline">
                <h1 className='m-0'>{props.title}</h1>
                <p className='m-0'>{props.nameUser}</p>
            </div>
        </header>
        </>
    );
}

export default Header