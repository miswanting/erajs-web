import React, { useState } from "react";
export function Text(props: any) {
    // 初始化
    const [data, setData] = useState(props.data);
    const [style, setStyle] = useState(props.style);
    // 事件处理
    // 输出
    return (
        <span className="text" style={style}>{data.text}</span>
    );
}
export function Link(props: any) {
    // 初始化
    const [data, setData] = useState(props.data);
    const [style, setStyle] = useState(props.style);
    // 事件处理
    function click() {
        console.log("Clicked!");
    }
    // 输出
    return (
        <span className="link" style={style} onClick={click}>{data.text}</span>
    );
}
export function Button(props: any) {
    // 初始化
    const [data, setData] = useState(props.data);
    const [style, setStyle] = useState(props.style);
    // 事件处理
    function click() {
        console.log("Clicked!");
    }
    // 输出
    return (
        <span className="button" style={style} onClick={click}>{data.text}</span >
    );
}
export function Rate(props: any) {
    // 初始化
    const [data, setData] = useState(props.data);
    const [style, setStyle] = useState(props.style);
    let itemList = []
    for (let i = 0; i < data.item.length; i++) {
        const element = data.item[i];
        itemList.push(<span key={i} onClick={() => { click(element) }}>{element}</span>)
    }
    // 事件处理
    function click(value: string) {
        console.log(value);
    }
    // 输出
    return (
        <span className="rate" style={style}>{itemList}</span>
    );
}
export function Progress(props: any) {
    // 初始化
    const [data, setData] = useState(props.data);
    const [style, setStyle] = useState(props.style);
    // 事件处理
    // 输出
    return (
        <span className="progress" style={style}>
            <span className="bar" style={style}></span>
        </span>
    );
}
