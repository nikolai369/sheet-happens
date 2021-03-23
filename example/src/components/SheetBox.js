import React from 'react';
import Sheet from 'sheet-happens';
import 'sheet-happens/dist/index.css';

import { useState } from 'React';

const initialDataBig = [];
for (let row = 0; row < 1000; row++) {
    const r = [];
    for (let col = 0; col < 100; col++) {
        r.push(`Row: ${row}, Col: ${col}`);
    }
    initialDataBig.push(r);
}

const initialDataBasic = [
    ['First', 'Second', 'Third', 'Fourth', 'Fifth', 'Sixth'],
    [1, 2, 3, 4, 5, 6],
    [1, 2, 3, 4, 5, 6],
    [1, 2, 3, 4, 5, 6],
    [1, 2, 3, 4, 5, 6],
    [1, 2, 3, 4, 5, 6],
    [1, 2, 3, 4, 5, 6],
    [1, 2, 3, 4, 5, 6],
    [1, 2, 3, 4, 5, 6],
];

const initialDataFormatting = [];
for (let row = 0; row < 1000; row++) {
    const r = [];
    for (let col = 0; col < 100; col++) {
        r.push(Math.random() * 1000000);
    }
    initialDataFormatting.push(r);
}

export function SheetBoxHeader() {
    const [data, setData] = useState(initialDataBig);
    const [cellWidth, setCellWidth] = useState(Array(100).fill(150));
    const [cellHeight, setCellHeight] = useState([]);

    const onSelectionChanged = (x1, y1, x2, y2) => {};
    const onRightClick = () => {};
    const columnHeaders = ['A', 'B', 'C'];
    const cellStyle = (x, y) => {
        return {};
    };
    const editData = (x, y) => {
        return data?.[y]?.[x];
    };
    const displayData = (x, y) => {
        return data?.[y]?.[x];
    };
    const sourceData = (x, y) => {
        return data?.[y]?.[x];
    };

    const onChange = (changes) => {
        const newData = [...data];
        for (const change of changes) {
            if (!newData[change.y]) {
                newData[change.y] = [];
            }
            newData[change.y][change.x] = change.value;
        }
        setData(newData);
    };

    const isReadOnly = (x, y) => {
        return false;
    };

    const onCellWidthChange = (columnIdx, newWidth) => {
        const cw = [...cellWidth];
        if (columnIdx > cw.length) {
            for (let i = cw.length; i <= columnIdx; i++) {
                cw.push(150);
            }
        }
        cw[columnIdx] = newWidth;
        setCellWidth(cw);
    };
    const onCellHeightChange = (rowIdx, newHeight) => {
        const ch = [...cellHeight];
        if (rowIdx > ch.length) {
            for (let i = ch.length; i <= rowIdx; i++) {
                ch.push(22);
            }
        }
        ch[rowIdx] = newHeight;
        setCellHeight(ch);
    };

    return (
        <div className="sheet-box">
            <Sheet
                onSelectionChanged={onSelectionChanged}
                onRightClick={onRightClick}
                columnHeaders={columnHeaders}
                cellStyle={cellStyle}
                editData={editData}
                displayData={displayData}
                sourceData={sourceData}
                cellWidth={cellWidth}
                cellHeight={cellHeight}
                onChange={onChange}
                readOnly={isReadOnly}
                onCellWidthChange={onCellWidthChange}
                onCellHeightChange={onCellHeightChange}
                freezeColumns={0}
                freezeRows={0}
            />
        </div>
    );
}

export function SheetBoxBasic() {
    const [data, setData] = useState(initialDataBasic);
    const [cellWidth, setCellWidth] = useState([]);
    const [cellHeight, setCellHeight] = useState([]);

    const onSelectionChanged = (x1, y1, x2, y2) => {};
    const onRightClick = () => {};
    const columnHeaders = ['A', 'B', 'C'];
    const cellStyle = (x, y) => {
        return {};
    };
    const editData = (x, y) => {
        return data?.[y]?.[x];
    };
    const displayData = (x, y) => {
        return data?.[y]?.[x];
    };
    const sourceData = (x, y) => {
        return data?.[y]?.[x];
    };

    const onChange = (changes) => {
        const newData = [...data];
        for (const change of changes) {
            if (!newData[change.y]) {
                newData[change.y] = [];
            }
            newData[change.y][change.x] = change.value;
        }
        setData(newData);
    };

    const isReadOnly = (x, y) => {
        return false;
    };

    const onCellWidthChange = (columnIdx, newWidth) => {
        const cw = [...cellWidth];
        if (columnIdx > cw.length) {
            for (let i = cw.length; i <= columnIdx; i++) {
                cw.push(100);
            }
        }
        cw[columnIdx] = newWidth;
        setCellWidth(cw);
    };
    const onCellHeightChange = (rowIdx, newHeight) => {
        const ch = [...cellHeight];
        if (rowIdx > ch.length) {
            for (let i = ch.length; i <= rowIdx; i++) {
                ch.push(22);
            }
        }
        ch[rowIdx] = newHeight;
        setCellHeight(ch);
    };

    return (
        <div className="sheet-box">
            <Sheet
                onSelectionChanged={onSelectionChanged}
                onRightClick={onRightClick}
                columnHeaders={columnHeaders}
                cellStyle={cellStyle}
                editData={editData}
                displayData={displayData}
                sourceData={sourceData}
                cellWidth={cellWidth}
                cellHeight={cellHeight}
                onChange={onChange}
                readOnly={isReadOnly}
                onCellWidthChange={onCellWidthChange}
                onCellHeightChange={onCellHeightChange}
                freezeColumns={0}
                freezeRows={0}
            />
        </div>
    );
}

export function SheetBoxStyle() {
    const [data, setData] = useState(initialDataBasic);
    const [cellWidth, setCellWidth] = useState([]);
    const [cellHeight, setCellHeight] = useState([]);

    const onSelectionChanged = (x1, y1, x2, y2) => {};
    const onRightClick = () => {};
    const columnHeaders = [];
    const colors = ['#f00', '#0f0', '#00f', '#000'];
    const alignment = ['left', 'right', 'center'];
    const weight = ['normal ', 'bold ', 'lighter '];
    const marginRight = [0, 0, 0, 0, 20];
    const cellStyle = (x, y) => {
        if (x === 0 || y === 0) {
            return {
                fillColor: '#6DA2FB22',
            };
        }
        return {
            color: colors[y % 4],
            textAlign: alignment[x % 3],
            marginRight: marginRight[x % 5],
            weight: weight[y % 3],
        };
    };
    const editData = (x, y) => {
        return data?.[y]?.[x];
    };
    const displayData = (x, y) => {
        return data?.[y]?.[x];
    };
    const sourceData = (x, y) => {
        return data?.[y]?.[x];
    };

    const onChange = (changes) => {
        const newData = [...data];
        for (const change of changes) {
            if (!newData[change.y]) {
                newData[change.y] = [];
            }
            newData[change.y][change.x] = change.value;
        }
        setData(newData);
    };

    const isReadOnly = (x, y) => {
        return false;
    };

    const onCellWidthChange = (columnIdx, newWidth) => {
        const cw = [...cellWidth];
        if (columnIdx > cw.length) {
            for (let i = cw.length; i <= columnIdx; i++) {
                cw.push(100);
            }
        }
        cw[columnIdx] = newWidth;
        setCellWidth(cw);
    };
    const onCellHeightChange = (rowIdx, newHeight) => {
        const ch = [...cellHeight];
        if (rowIdx > ch.length) {
            for (let i = ch.length; i <= rowIdx; i++) {
                ch.push(22);
            }
        }
        ch[rowIdx] = newHeight;
        setCellHeight(ch);
    };

    return (
        <div className="sheet-box">
            <Sheet
                onSelectionChanged={onSelectionChanged}
                onRightClick={onRightClick}
                columnHeaders={columnHeaders}
                cellStyle={cellStyle}
                editData={editData}
                displayData={displayData}
                sourceData={sourceData}
                cellWidth={cellWidth}
                cellHeight={cellHeight}
                onChange={onChange}
                readOnly={isReadOnly}
                onCellWidthChange={onCellWidthChange}
                onCellHeightChange={onCellHeightChange}
                freezeColumns={1}
                freezeRows={1}
            />
        </div>
    );
}

export function SheetBoxFormatting() {
    const [data, setData] = useState(initialDataFormatting);
    const [cellWidth, setCellWidth] = useState([]);
    const [cellHeight, setCellHeight] = useState([]);

    const cellStyle = (x, y) => {
        return {};
    };
    const editData = (x, y) => {
        return data?.[y]?.[x];
    };
    const displayData = (x, y) => {
        return data?.[y]?.[x]?.toFixed?.(2);
    };
    const sourceData = (x, y) => {
        return data?.[y]?.[x];
    };

    const onChange = (changes) => {
        const newData = [...data];
        for (const change of changes) {
            if (!newData[change.y]) {
                newData[change.y] = [];
            }
            newData[change.y][change.x] = Number(change.value);
        }
        setData(newData);
    };

    const isReadOnly = (x, y) => {
        return false;
    };

    const onCellWidthChange = (columnIdx, newWidth) => {
        const cw = [...cellWidth];
        if (columnIdx > cw.length) {
            for (let i = cw.length; i <= columnIdx; i++) {
                cw.push(100);
            }
        }
        cw[columnIdx] = newWidth;
        setCellWidth(cw);
    };
    const onCellHeightChange = (rowIdx, newHeight) => {
        const ch = [...cellHeight];
        if (rowIdx > ch.length) {
            for (let i = ch.length; i <= rowIdx; i++) {
                ch.push(22);
            }
        }
        ch[rowIdx] = newHeight;
        setCellHeight(ch);
    };

    return (
        <div className="sheet-box">
            <Sheet
                cellStyle={cellStyle}
                editData={editData}
                displayData={displayData}
                sourceData={sourceData}
                cellWidth={cellWidth}
                cellHeight={cellHeight}
                onChange={onChange}
                readOnly={isReadOnly}
                onCellWidthChange={onCellWidthChange}
                onCellHeightChange={onCellHeightChange}
                freezeColumns={0}
                freezeRows={0}
            />
        </div>
    );
}