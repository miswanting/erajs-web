import Vue from "vue";
import HelloComponent from "./components/Hello.vue";
import React, { useState } from 'react';
import ReactDOM from "react-dom";
import "span-charm/dist/span-charm.css"
let FRAMEWORK = "React"
if (FRAMEWORK == "Vue") {
    let v = new Vue({
        el: "#app",
        template: `
    <div>
        Name: <input v-model="name" type="text">
        <hello-component :name="name" :initialEnthusiasm="5" />
    </div>
    `,
        data: { name: "World" },
        components: {
            HelloComponent
        }
    })
} else if (FRAMEWORK == "React") {
    const rootElement = document.getElementById("app");
    ReactDOM.render(<App />, rootElement);
}
function App() {
    return (
        <div className="App">
            <DoStuffButton />
        </div>
    );
}
function DoStuffButton() {
    const [buttonText, setButtonText] = useState("Do something");

    function updateButtonText() {
        setButtonText("Loading...");
        window.setTimeout(() => setButtonText("Do something"), 2000);
    }

    return <button onClick={updateButtonText}>{buttonText}</button>;
}