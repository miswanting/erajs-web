import Vue from "vue";
import HelloComponent from "./components/Hello.vue";
import React, { useState } from 'react';
let FRAMEWORK = "Vue"
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
}