import React, { useState, useRef, useCallback } from "react";

export default function UseCallbackPri() {
  const [Items, setItems] = useState(["item1", "item2", "item3"]);
  const [EditItem, setEditItem] = useState(""); //수정할 녀석(idx로 하지 않으면 동일한 정보가 들어갈 때 오류 발생)
  const refinput = useRef();

  const handleEdit = useCallback(
    (item) => {
      setEditItem(item);
    },
    [EditItem]
  );
  const handlesave = useCallback(
    (index) => {
      let Edit = [];
      for (let i = 0; i < Items.length; i++) {
        if (index == Items[i]) {
          Edit.push(refinput.current.value);
        } else {
          Edit.push(Items[i]);
        }
      }
      console.log(Edit);
      if (Edit.length === Items.length) {
        setItems(Edit);
        setEditItem("");
      }
    },
    [EditItem, refinput, Items]
  );
  const setDelete = useCallback(
    (index) => {
      let DeleteSet = Items.filter((Item) => {
        return Item !== index;
      });
      setItems(DeleteSet);
    },
    [Items]
  );

  return (
    <>
      <div>UseCallbackPri</div>
      {Items.map((item, index) => {
        return (
          <div key={index}>
            {EditItem === item ? (
              <>
                <input type="text" ref={refinput} />
                <button onClick={() => handlesave(item)}>Save</button>
              </>
            ) : (
              <>
                <span key={index}>{item}</span>
                <button onClick={() => handleEdit(item)}>Edit</button>
                <button onClick={() => setDelete(item)}>Delete</button>
              </>
            )}
          </div>
        );
      })}
    </>
  );
}
