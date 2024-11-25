import { useState } from "react";

export default function useToggle(initValue = false) {
  const [Value, setValue] = useState(initValue);

  const setToggle = () => {
    setValue(!Value);
  };

  return [Value, setToggle];
}
