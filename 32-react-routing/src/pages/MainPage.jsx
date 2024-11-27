import React from "react";
import { useSearchParams } from "react-router-dom";

export default function MainPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams.get("mode")); // null or dark
  return (
    <main className={["Main", searchParams.get("mode")].join(" ")}>
      <h1>Home</h1>
      <button onClick={() => setSearchParams({ mode: "dark" })}>
        Dark Mode
      </button>
    </main>
  );
}
