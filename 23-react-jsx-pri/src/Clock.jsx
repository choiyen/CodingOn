export default function Clock() {
  return (
    <div>
      {/* toLocaleTimeString() */}
      {/* : 사용자의 문화권에 맞는 시간표기법으로 시간을 리턴 */}
      <h1>현재 시간은 {new Date().toLocaleTimeString()}</h1>
    </div>
  );
}
