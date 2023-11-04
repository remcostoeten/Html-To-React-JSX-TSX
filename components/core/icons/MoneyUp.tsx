import { iconProps } from "@/utils/types";

function MoneyUpIcon({size, fill, className}: iconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0"
      y="0"
      fill={fill}
      className={className}
      width={size}
      height={size}
      enableBackground="new -205 207 100 100"
      viewBox="-205 207 100 125"
    >
      <switch>
        <g>
          <path d="M-120.2 248.1c1 .6 2.3 1 3.6 1 3.8 0 7-3.1 7-7 0-3.8-3.1-7-7-7s-7 3.1-7 7c0 1.3.4 2.5 1 3.6l-28.9 28.9c-1-.6-2.3-1-3.6-1-1.3 0-2.5.4-3.6 1l-11.7-11.7c.6-1 .9-2.2.9-3.4 0-3.8-3.1-7-7-7s-7 3.1-7 7c0 1.3.4 2.5 1 3.5l-7.5 7.5c-1-.6-2.3-1-3.6-1-3.8 0-7 3.1-7 7 0 3.8 3.1 7 7 7 3.8 0 7-3.1 7-7 0-1.3-.4-2.5-1-3.6l7.4-7.4c1.1.7 2.3 1.1 3.7 1.1 1.4 0 2.7-.4 3.7-1.1l11.7 11.7c-.6 1-1 2.3-1 3.6 0 3.8 3.1 7 7 7 3.8 0 7-3.1 7-7 0-1.3-.4-2.5-1-3.6l28.9-29.1zm3.6-9.6c2 0 3.6 1.6 3.6 3.6s-1.6 3.6-3.6 3.6-3.6-1.6-3.6-3.6 1.6-3.6 3.6-3.6zm-76.8 41.5c-2 0-3.6-1.6-3.6-3.6s1.6-3.6 3.6-3.6 3.6 1.6 3.6 3.6-1.6 3.6-3.6 3.6zm17.1-16.9c-2 0-3.6-1.6-3.6-3.6s1.6-3.6 3.6-3.6 3.6 1.6 3.6 3.6-1.6 3.6-3.6 3.6zm21.3 21.1c-2 0-3.6-1.6-3.6-3.6s1.6-3.6 3.6-3.6 3.6 1.6 3.6 3.6-1.6 3.6-3.6 3.6zm-.8-23.2v-5.8h-6v-3.3h10c1.9 0 3.4-1.5 3.4-3.4s-1.5-3.4-3.4-3.4h-4.6a6.7 6.7 0 010-13.4h.6v-5.2h3.3v5.2h5.8v3.3h-9.8c-1.9 0-3.4 1.5-3.4 3.4s1.5 3.4 3.4 3.4h4.6a6.7 6.7 0 010 13.4h-.6v5.8h-3.3z"></path>
        </g>
      </switch>
      <text
        x="-205"
        y="322"
        fontFamily="'Helvetica Neue', Helvetica, Arial-Unicode, Arial, Sans-serif"
        fontSize="5"
        fontWeight="bold"
      >
        Created by Gregor Cresnar
      </text>
      <text
        x="-205"
        y="327"
        fontFamily="'Helvetica Neue', Helvetica, Arial-Unicode, Arial, Sans-serif"
        fontSize="5"
        fontWeight="bold"
      >
        from the Noun Project
      </text>
    </svg>
  );
}

export default MoneyUpIcon;
