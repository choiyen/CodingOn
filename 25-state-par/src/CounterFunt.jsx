import React, { Component } from "react";
import { useState } from "react";

// export default class CounterFunt extends Component {
//   state = {
//     number: 0,
//   };
//   render() {
//     //state는 this.state로 접근 가능
//     const { number } = this.state;
//     return (
//       <div>
//         {/* 클래스형 State */}
//         <h1>{number}</h1>
//         <button
//           onClick={() => {
//             this.setState({ number: number - 1 });
//           }}
//         >
//           -1
//         </button>
//         <button
//           onClick={() => {
//             this.setState({ number: number + 2 });
//           }}
//         >
//           +2
//         </button>
//       </div>
//     );
//   }
// }

export default function CounterFunt() {
  const [message, SetMessage] = useState(0);
  return (
    <div>
      <h1>{message}</h1>
      <button
        onClick={() => {
          SetMessage(message - 1);
        }}
      >
        -1
      </button>
      <button
        onClick={() => {
          SetMessage(messagLe + 2);
        }}
      >
        +2
      </button>
    </div>
  );
}
