import { Component, Event, h, Prop } from '@stencil/core';
import classNames from 'classnames';
export class MyButton {
    constructor() {
        this.size = 'large';
        this.variant = 'primary';
        this.disabled = false;
    }
    handleClick(event) {
        this.buttonClicked.emit(event);
    }
    render() {
        return h("button", { class: this.getCssClassMap(), onClick: this.handleClick.bind(this) }, this.label);
    }
    getCssClassMap() {
        return classNames('button', this.size && `button--size-${this.size}`, this.variant && `button--variant-${this.variant}`, this.disabled && `button--disabled`);
    }
    static get is() { return "my-button"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["my-button.css"]
    }; }
    static get styleUrls() { return {
        "$": ["my-button.css"]
    }; }
    static get properties() { return {
        "label": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "label",
            "reflect": false
        },
        "size": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "'small' | 'large'",
                "resolved": "\"large\" | \"small\"",
                "references": {}
            },
            "required": false,
            "optional": true,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "size",
            "reflect": false,
            "defaultValue": "'large'"
        },
        "variant": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "'primary' | 'secondary' | 'tertiary'",
                "resolved": "\"primary\" | \"secondary\" | \"tertiary\"",
                "references": {}
            },
            "required": false,
            "optional": true,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "variant",
            "reflect": false,
            "defaultValue": "'primary'"
        },
        "disabled": {
            "type": "boolean",
            "mutable": false,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": true,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "disabled",
            "reflect": false,
            "defaultValue": "false"
        }
    }; }
    static get events() { return [{
            "method": "buttonClicked",
            "name": "buttonClicked",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": ""
            },
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            }
        }]; }
}
