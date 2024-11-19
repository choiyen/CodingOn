export default function FoodComponent({ food = "돼지고기" }) {
  const student = "길동";
  return (
    <div>
      <span style={{ color: "red" }}>{food}</span>
    </div>
  );
}
