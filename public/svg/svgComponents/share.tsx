import React from "react";

interface Props{
    "width"?: number, 
    "height"?: number,
    "stroke": string,
}

export default function Share (props: Props) {
    return (
        <svg width={props.width?props.width:"15"} height={props.height?props.height:"13"} viewBox="0 0 15 13" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.3727 0.43575L9.37271 0.435762L14.5291 4.84601C14.5291 4.84602 14.5291 4.84603 14.5291 4.84603C14.6904 4.98405 14.6902 5.23036 14.5291 5.36825L9.3727 9.77895L9.60021 10.0449L9.37269 9.77896C9.1399 9.97809 8.7875 9.80773 8.7875 9.51784V6.96674V6.61172L8.43252 6.61678C7.28574 6.63312 6.28438 6.71583 5.44906 6.90293C4.61518 7.0897 3.9206 7.38617 3.41288 7.84939C2.36191 8.80824 2.25603 10.3264 2.9302 12.4619L3.26397 12.3566L2.9302 12.4619C2.9424 12.5006 2.93799 12.5265 2.93003 12.546C2.9207 12.5687 2.90076 12.5949 2.86767 12.6164C2.79959 12.6605 2.71502 12.663 2.64599 12.6132L2.64598 12.6132C1.43308 11.7394 0.35 10.0699 0.35 8.42462C0.35 7.37036 0.572247 6.54856 0.957157 5.90342C1.34168 5.25893 1.90218 4.76786 2.61572 4.39617C4.05843 3.64465 6.0955 3.3964 8.44147 3.3698L8.7875 3.36588V3.01982V0.69686C8.7875 0.407097 9.13997 0.236672 9.3727 0.43575Z" fill="white" stroke={props.stroke?props.stroke:"#9B9B9B"} stroke-width="0.7"/>
        </svg>
    )
}