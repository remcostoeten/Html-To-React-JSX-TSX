import React from "react";

type InProgressIconProps = {
  w?: string;
  h?: string;
  fill?: string;
}

export default function SuccesIcon({ w, h, fill }: InProgressIconProps) {
  return <><svg xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 24 30">
    <path
      d="M12 2a10 10 0 1010 10A10 10 0 0012 2zm4.83 6.55l-4 6a1 1 0 01-.73.45H12a1 1 0 01-.71-.29l-3-3a1 1 0 011.42-1.42l2.13 2.14 3.33-5a1 1 0 011.66 1.1z"
      data-name="3"
    ></path>
    <text
      y="39"
      fontFamily="'Helvetica Neue', Helvetica, Arial-Unicode, Arial, Sans-serif"
      fontSize="5"
      fontWeight="bold"
    >
      Created by Deylotus Creative Design
    </text>
    <text
      y="44"
      fontFamily="'Helvetica Neue', Helvetica, Arial-Unicode, Arial, Sans-serif"
      fontSize="5"
      fontWeight="bold"
    >
      from the Noun Project
    </text>

  </svg></>;
}
