import { iconProps } from "@/utils/types";
function DotsIcon({ fill, size, className }: iconProps) {
    return (
        <svg
            className={className}
            width={size}
            height={size}
            fill={fill}
            xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 1024 1280">
            <path d="M192 384c-70.4 0-128 57.6-128 128s57.6 128 128 128 128-57.6 128-128-57.6-128-128-128zm320 0c-70.4 0-128 57.6-128 128s57.6 128 128 128 128-57.6 128-128-57.6-128-128-128zm320 0c-70.4 0-128 57.6-128 128s57.6 128 128 128 128-57.6 128-128-57.6-128-128-128z"></path>
        </svg>
    );
}

export default DotsIcon;
