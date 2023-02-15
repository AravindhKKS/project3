import React from "react";

export default function ImageShow({ Image }) {
  return (
    <div>
      <img src={Image.urls.small} alt={Image.alt_description} />
    </div>
  );
}
