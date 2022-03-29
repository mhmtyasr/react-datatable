import React, { CSSProperties, useState } from "react"; // we need this to make JSX compile
import { EditableItem } from "./components/editableItem";
import "./index.scss";

type ColumProps = {
  title: string;
  dataIndex: string;
  className?: string | undefined;
  style?: CSSProperties | undefined;
};

type TableProps = {
  pageSize?: number;
  columns: Array<ColumProps>;
  dataSource: Array<Object>;
  className?: string;
  style?: CSSProperties | undefined;
  onSave?: Function;
  onRowSelected?: Function;
};
export const Table: React.FC<TableProps> = ({
  pageSize = 10,
  dataSource,
  columns,
  onSave,
  className,
  onRowSelected,
  style,
}) => {
  const [isDarkMode, setDarkMode] = useState<boolean>(false);
  const [selectedIndexes, setSelectedIndexes] = useState<Array<number>>([]);
  const [paginationIndex, setPaginationIndex] = useState<number>(1);

  const [tempDataSource, setTempDataSource] = useState<Array<any>>(dataSource);

  const handleChangeData = (
    index: number,
    columnIndex: String,
    value: String
  ) => {
    const tempData = JSON.parse(JSON.stringify(tempDataSource));
    tempData[index][columnIndex.toString()] = value;
    setTempDataSource(tempData);
  };

  const calculateMin = (): number => {
    const temp = pageSize * (paginationIndex - 1);
    if (temp < 1) {
      return 1;
    }

    return temp;
  };

  const calcuateMax = (): number => {
    const temp = pageSize * paginationIndex;
    if (temp > dataSource.length) {
      return dataSource.length;
    }

    return temp;
  };

  const paginate = (): Array<Object> => {
    return tempDataSource.slice(
      (paginationIndex - 1) * pageSize,
      paginationIndex * pageSize
    );
  };

  const isDisabled = (index: number): boolean => {
    const calcIndex: number = index + pageSize * (paginationIndex - 1);
    return (
      JSON.stringify(tempDataSource[calcIndex]) ===
      JSON.stringify(dataSource[calcIndex])
    );
  };

  const isSelected = (index: number): boolean => {
    return selectedIndexes.includes(index);
  };

  const handleSelect = (index: number) => {
    let data = [];

    const exists = selectedIndexes.includes(index);

    if (exists) {
      data = selectedIndexes.filter((c) => c !== index);
    } else {
      const result = selectedIndexes;
      result.push(index);
      data = result;
    }
    if (onRowSelected) {
      onRowSelected(tempDataSource[index]);
    }
    setSelectedIndexes([...data]);
  };

  return (
    <div
      className={`tableContainer ${isDarkMode ? "darkMod" : ""} ${
        className ? className : ""
      }`}
      style={style}
    >
      <div className="switchContainer">
        <label>
          <input
            type="checkbox"
            id="checkbox"
            checked={isDarkMode}
            onChange={(e) => {
              setDarkMode(e.target.checked);
            }}
          />
          <div className="slider"></div>
        </label>
        <p>Enable Dark Mode!</p>
      </div>
      <table>
        <thead>
          <tr>
            {columns.map((x) => {
              return <th>{x.title}</th>;
            })}
            <th></th>
          </tr>
        </thead>
        <tbody>
          {paginate().map((t: any, index: number) => {
            const calcIndex: number = index + pageSize * (paginationIndex - 1);
            return (
              <tr
                className={`${isSelected(calcIndex) ? "selected" : ""}`}
                onClick={(e) => {
                  handleSelect(calcIndex);
                  return;
                }}
              >
                {columns.map((k: ColumProps) => {
                  return (
                    <td
                      data-label={k.title}
                      className={k.className}
                      style={k.style}
                    >
                      <EditableItem
                        onChange={(value: String) => {
                          handleChangeData(calcIndex, k.dataIndex, value);
                        }}
                        value={t[k.dataIndex.toString()]}
                      ></EditableItem>
                    </td>
                  );
                })}
                <td>
                  <button
                    disabled={isDisabled(index)}
                    onClick={(e) => {
                      e.preventDefault();
                      if (onSave) {
                        onSave(tempDataSource[index]);
                      }
                      return;
                    }}
                  >
                    save
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="paginationContainer">
        <span>{`Showing ${calculateMin()} to ${calcuateMax()} of ${
          dataSource.length
        } entries `}</span>
        <div>
          <button
            onClick={() => {
              setPaginationIndex(paginationIndex - 1);
            }}
            className="prevButton"
            disabled={paginationIndex < 2}
          >
            {"<"}
          </button>
          <button
            className="nextButton"
            onClick={() => {
              setPaginationIndex(paginationIndex + 1);
            }}
            disabled={tempDataSource.length / pageSize < paginationIndex}
          >
            {">"}
          </button>
        </div>
      </div>
    </div>
  );
};
