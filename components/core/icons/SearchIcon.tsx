import React from "react";
import { iconProps } from "@/utils/types";

export default function SearchIcon({ size, fill = "#fff" }: iconProps) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" x="0" y="0" width={size} height={size} viewBox="0 0 91 113.75">
            <path
                fill={fill}
                fillRule="evenodd"
                d="M63.124 52.48L87.81 77.163c3.124 3.124 3.12 8.193.004 11.307a7.99 7.99 0 01-11.307-.004L51.82 63.783c-13.08 7.996-30.4 6.336-41.72-4.983-13.266-13.266-13.266-34.773 0-48.039 13.266-13.265 34.775-13.265 48.041 0 11.32 11.32 12.98 28.639 4.983 41.719zm-47.372.668c-10.144-10.144-10.144-26.59 0-36.735 10.145-10.144 26.593-10.144 36.737 0 10.145 10.144 10.145 26.591 0 36.735-10.144 10.144-26.592 10.144-36.737 0z"
            ></path>
        </svg>
    );
}