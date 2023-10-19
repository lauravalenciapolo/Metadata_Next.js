import React from "react";

interface Props{
    "width"?: number, 
    "height"?: number,
    "fill": string,
}

export default function Heart (props: Props) {
    return (
        <svg width={props.width?props.width:"17"}  height={props.height?props.height:"15"} viewBox="0 0 17 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15.3499 1.02565C13.5304 -0.537941 10.8244 -0.256696 9.15433 1.481L8.50024 2.16067L7.84616 1.481C6.17939 -0.256696 3.47007 -0.537941 1.65057 1.02565C-0.434545 2.82026 -0.544113 6.04118 1.32187 7.98646L7.74655 14.6761C8.16158 15.108 8.83559 15.108 9.25062 14.6761L15.6753 7.98646C17.5446 6.04118 17.435 2.82026 15.3499 1.02565Z" fill={props.fill?props.fill:"#AFAFAF"}/>
        </svg>
    )
}