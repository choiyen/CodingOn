import React from "react";
import { useParams } from "react-router-dom";

export default function ProductDetailPage() {
  console.log("useParams", useParams());
  return <div>ProductDetailPage</div>;
}
