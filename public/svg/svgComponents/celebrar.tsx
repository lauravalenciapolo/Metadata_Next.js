import React from "react";

interface Props{
    "width"?: number, 
    "height"?: number,
    "fill": string,
}

export default function Celebrar (props: Props) {
    return (
        <svg width={props.width?props.width:"17"} height={props.height?props.height:"17"}  viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 16.2103L11.0492 12.2642L3.94614 5.16113L0 16.2103Z" fill="#AFAFAF"/>
        <path d="M9.88883 8.7367L14.3006 4.32492C14.6873 3.9382 15.3108 3.9382 15.6975 4.32492L16.1632 4.79056L16.9998 3.95398L16.5341 3.48834C15.6897 2.64386 14.3085 2.64386 13.464 3.48834L9.05225 7.90012L9.88883 8.7367Z" fill={props.fill?props.fill:"#AFAFAF"}/>
        <path d="M6.36066 4.27826L5.89502 4.74391L6.7316 5.58049L7.19725 5.11484C8.04172 4.27037 8.04172 2.88922 7.19725 2.04475L6.7316 1.5791L5.89502 2.42358L6.36066 2.88922C6.73949 3.26805 6.73949 3.89943 6.36066 4.27826Z" fill={props.fill?props.fill:"#AFAFAF"}/>
        <path d="M11.8857 8.22369L10.6309 9.47856L11.4674 10.3151L12.7223 9.06027C13.109 8.67355 13.7325 8.67355 14.1192 9.06027L15.3899 10.3309L16.2265 9.49434L14.9558 8.22369C14.1035 7.37921 12.7302 7.37921 11.8857 8.22369Z" fill={props.fill?props.fill:"#AFAFAF"}/>
        <path d="M10.3075 3.48839L7.47412 6.32172L8.3107 7.1583L11.144 4.32497C11.9885 3.4805 11.9885 2.09935 11.144 1.25487L9.88916 0L9.05258 0.836582L10.3075 2.09146C10.6863 2.47818 10.6863 3.10956 10.3075 3.48839Z" fill={props.fill?props.fill:"#AFAFAF"}/>
        </svg>
    )
}