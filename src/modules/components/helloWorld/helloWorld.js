import { LightningElement } from "lwc";

export default class HelloWorld extends LightningElement {
    title = 'Hello World!';

    connectedCallback() {
        console.log('Hello world!');
    }
}
