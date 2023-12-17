import React, { Component } from "react";

export const Info = ({info, className}) => {
    return(
        <div className={`bg-blue-500/[.4] rounded pr-1 pl-1 ${className}`}>
            <span>{info}</span>
        </div>
    );
};
