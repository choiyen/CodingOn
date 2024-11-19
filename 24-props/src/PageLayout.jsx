import React from "react";

export default function PageLayout({ children }) {
  return (
    <div>
      <header style={{ background: "#eee", padding: "16px" }}>
        <h1>헤더</h1>
      </header>
      <main style={{ padding: "16px" }}>{children}</main>
      <footer
        style={{ background: "#eee", padding: "16px", marginTop: "16px" }}
      >
        <p>푸터</p>
      </footer>
    </div>
  );
}
