import React, { useRef, useState, useEffect } from "react"; // we need this to make JSX compile

type EditableItemProps = {
  value: string | number | boolean | readonly string[] | undefined;
  onChange: Function;
};

export const EditableItem: React.FC<EditableItemProps> = ({
  value,
  onChange,
}) => {
  const [editing, setEditing] = useState<boolean>(false);
  const inputRef = useRef<any>(null);

  useEffect(() => {
    if (editing) {
      inputRef.current!.focus();
    }
  }, [editing]);
  return (
    <div className={`editableContainer`}>
      {typeof value === "boolean" ? (
        <input
          type={"checkbox"}
          ref={inputRef}
          checked={value}
          onClick={(e) => {
            e.stopPropagation();
            return;
          }}
          onChange={(e) => {
            onChange(e.target.checked);
            e.stopPropagation();
          }}
         
        ></input>
      ) : editing ? (
        <input
          ref={inputRef}
          value={value}
          onChange={(e) => {
            onChange(e.target.value);
          }}
          onBlur={(e) => {
            setEditing(!editing);
          }}
        ></input>
      ) : (
        <span
          onClick={(e) => {
            e.stopPropagation();
            setEditing(!editing);
            return;
          }}
        >
          {value?.toString()}
        </span>
      )}
    </div>
  );
};
