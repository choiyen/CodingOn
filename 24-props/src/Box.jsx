import React from "react";

export default function Box({ children }) {
  return (
    <div style={{ border: "2px solid black", padding: "16px", margin: "16px" }}>
      {children}
    </div>
  );
}
