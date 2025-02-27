import { attachShadow, createEvent, h, proxyCustomElement } from '@stencil/core/internal/client';
export { setAssetPath } from '@stencil/core/internal/client';

function createCommonjsModule(fn, basedir, module) {
	return module = {
	  path: basedir,
	  exports: {},
	  require: function (path, base) {
    return commonjsRequire();
  }
	}, fn(module, module.exports), module.exports;
}

function commonjsRequire () {
	throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs');
}

var classnames = createCommonjsModule(function (module) {
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
/* global define */

(function () {

	var hasOwn = {}.hasOwnProperty;

	function classNames() {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				if (arg.length) {
					var inner = classNames.apply(null, arg);
					if (inner) {
						classes.push(inner);
					}
				}
			} else if (argType === 'object') {
				if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]')) {
					classes.push(arg.toString());
					continue;
				}

				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if ( module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else {
		window.classNames = classNames;
	}
}());
});

const myButtonCss = ".base-theme{--spacing-base-unit:8px;--spacing-base-xs:8px;--spacing-base-sm:16px;--spacing-base-md:24px;--spacing-base-lg:32px;--spacing-base-xl:40px;--spacing-base-xxl:48px;--spacing-base-none:0px;--color-base-neutral-dark-10:#5c5c5c;--color-base-neutral-dark-20:#525252;--color-base-neutral-dark-30:#474747;--color-base-neutral-dark-40:#3d3d3d;--color-base-neutral-dark-50:#333333;--color-base-neutral-dark-60:#292929;--color-base-neutral-dark-70:#1f1f1f;--color-base-neutral-dark-80:#141414;--color-base-neutral-dark-90:#0a0a0a;--color-base-neutral-dark-100:#000000;--color-base-dark-blue-10:#cccfd1;--color-base-dark-blue-20:#adb2b6;--color-base-dark-blue-30:#8f959a;--color-base-dark-blue-40:#70787f;--color-base-dark-blue-50:#525b63;--color-base-dark-blue-60:#333E48;--color-base-dark-blue-70:#2b353d;--color-base-dark-blue-80:#242b32;--color-base-dark-blue-90:#1c2228;--color-base-dark-blue-100:#14191d;--color-base-blue-10:#c4d0f3;--color-base-blue-20:#a1b3eb;--color-base-blue-30:#7d97e4;--color-base-blue-40:#5a7adc;--color-base-blue-50:#365ed5;--color-base-blue-60:#1341cd;--color-base-blue-70:#1037ae;--color-base-blue-80:#0d2e90;--color-base-blue-90:#0a2471;--color-base-blue-100:#081a52;--color-base-red-10:#f1c4c4;--color-base-red-20:#e9a0a0;--color-base-red-30:#e07d7d;--color-base-red-40:#d85959;--color-base-red-50:#cf3636;--color-base-red-60:#c71212;--color-base-red-70:#a90f0f;--color-base-red-80:#8b0d0d;--color-base-red-90:#6d0a0a;--color-base-red-100:#500707;--color-base-green-10:#c3e6cb;--color-base-green-20:#9fd6ab;--color-base-green-30:#7bc78c;--color-base-green-40:#57b86d;--color-base-green-50:#33a84d;--color-base-green-60:#0f992e;--color-base-green-70:#0d8227;--color-base-green-80:#0b6b20;--color-base-green-90:#085419;--color-base-green-100:#063d12;--color-base-navy-10:#c2d0dc;--color-base-navy-20:#9db3c7;--color-base-navy-30:#7897b2;--color-base-navy-40:#547a9d;--color-base-navy-50:#2f5e88;--color-base-navy-60:#0a4173;--color-base-navy-70:#093762;--color-base-navy-80:#072e51;--color-base-navy-90:#06243f;--color-base-navy-100:#041a2e;--color-base-pink-10:#e0c2dd;--color-base-pink-20:#ce9dc9;--color-base-pink-30:#bb78b4;--color-base-pink-40:#a953a0;--color-base-pink-50:#962e8b;--color-base-pink-60:#840977;--color-base-pink-70:#700865;--color-base-pink-80:#5c0653;--color-base-pink-90:#490541;--color-base-pink-100:#350430;--font-face-base-sans-serif:'Inter', Helvetica, Arial, sans-serif;--font-face-base-serif:Baskerville;--font-face-base-mono:'Consolas', Courier, monospace;--font-size-display-xs:0.875rem;--font-size-display-sm:1rem;--font-size-display-md:1.125rem;--font-size-display-lg:1.5rem;--font-size-display-xl:2rem;--font-size-display-xxl:3rem;--font-size-label-xs:0.75rem;--font-size-label-sm:0.8125rem;--font-size-label-md:0.875rem;--font-size-label-lg:1rem;--font-size-label-xl:1.0625rem;--font-size-label-xxl:1.125rem;--font-size-body-sm:0.875rem;--font-size-body-md:1rem;--font-size-body-lg:1.125rem;--font-weight-base-thin:300;--font-weight-base-regular:400;--font-weight-base-medium:500;--font-weight-base-bold:600;--radius-base-min:4px;--radius-base-xs:8px;--radius-base-sm:12px;--radius-base-md:24px;--radius-base-lg:48px;--radius-base-xl:64px;--color-base-neutral-light-10:#a3a3a3;--color-base-neutral-light-20:#adadad;--color-base-neutral-light-30:#b8b8b8;--color-base-neutral-light-40:#c2c2c2;--color-base-neutral-light-50:#cccccc;--color-base-neutral-light-60:#d6d6d6;--color-base-neutral-light-70:#e0e0e0;--color-base-neutral-light-80:#ebebeb;--color-base-neutral-light-90:#f5f5f5;--color-base-neutral-light-100:#ffffff;--color-test-ci-trigger:orange}.brand-a-theme{--color-primary-default:#0f992e;--color-primary-hover:#0d8227;--color-primary-disabled:#c2d0dc;--button-radius:48px;--button-padding-left:16px;--button-padding-right:16px;--button-height-lg:36px;--button-height-sm:24px;--button-typography-lg-font-family:'Consolas', Courier, monospace;--button-typography-lg-font-weight:500;--button-typography-lg-font-size:1rem;--button-typography-lg-text-case:none;--button-typography-sm-font-family:'Consolas', Courier, monospace;--button-typography-sm-font-weight:500;--button-typography-sm-font-size:0.75rem;--button-typography-sm-text-case:none;--button-font-family:'Consolas', Courier, monospace;--color-disabled-text:#a3a3a3;--color-disabled-background:#f5f5f5;--color-disabled-border:#adadad}.brand-b-theme{--color-primary-default:#840977;--color-primary-hover:#700865;--color-primary-disabled:#e0c2dd;--button-radius:4px;--button-padding-left:16px;--button-padding-right:16px;--button-height-lg:36px;--button-height-sm:24px;--button-typography-lg-font-family:'Inter', Helvetica, Arial, sans-serif;--button-typography-lg-font-weight:400;--button-typography-lg-font-size:1rem;--button-typography-lg-text-case:none;--button-typography-sm-font-family:'Inter', Helvetica, Arial, sans-serif;--button-typography-sm-font-weight:400;--button-typography-sm-font-size:0.75rem;--button-typography-sm-text-case:none;--button-font-family:'Inter', Helvetica, Arial, sans-serif;--color-disabled-text:#a3a3a3;--color-disabled-background:#f5f5f5;--color-disabled-border:#adadad}:host{all:unset;display:block;margin:16px}.button{padding-left:var(--button-padding-left);padding-right:var(--button-padding-right);font-family:var(--button-font-family)}.button.button--size-small{font-size:var(--button-typography-sm-font-size);height:var(--button-height-sm);font-weight:var(--button-typography-sm-font-weight)}.button.button--size-large{font-size:var(--button-typography-lg-font-size);height:var(--button-height-lg);font-weight:var(--button-typography-lg-font-weight)}.button.button--variant-primary{background-color:var(--color-primary-default);color:white;border-radius:var(--button-radius);border:none;border-width:0px;border-style:none}.button.button--variant-primary:hover{background-color:var(--color-primary-hover)}.button.button--variant-primary.button--disabled{background-color:var(--color-disabled-background);color:var(--color-disabled-text)}.button.button--variant-secondary{background-color:white;color:var(--color-primary-default);border-style:solid;border-width:1px;border-color:var(--color-primary-default);border-radius:var(--button-radius)}.button.button--variant-secondary:hover{border-color:var(--color-primary-hover);color:var(--color-primary-hover)}.button.button--variant-secondary.button--disabled{border-color:var(--color-disabled-border);color:var(--color-disabled-text)}.button.button--variant-tertiary{background-color:transparent;color:var(--color-primary-default);border-width:0px;border-color:var(--color-primary-default);border-radius:var(--button-radius)}.button.button--variant-tertiary:hover{color:var(--color-primary-hover);border-color:var(--color-primary-hover)}.button.button--variant-tertiary.button--disabled{color:var(--color-disabled-text)}";

const MyButton = class extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        attachShadow(this);
        this.buttonClicked = createEvent(this, "buttonClicked", 7);
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
        return classnames('button', this.size && `button--size-${this.size}`, this.variant && `button--variant-${this.variant}`, this.disabled && `button--disabled`);
    }
    static get style() { return myButtonCss; }
};

const MyButton$1 = /*@__PURE__*/proxyCustomElement(MyButton, [1,"my-button",{"label":[1],"size":[1],"variant":[1],"disabled":[4]}]);
const defineCustomElements = (opts) => {
  if (typeof customElements !== 'undefined') {
    [
      MyButton$1
    ].forEach(cmp => {
      if (!customElements.get(cmp.is)) {
        customElements.define(cmp.is, cmp, opts);
      }
    });
  }
};

export { MyButton$1 as MyButton, defineCustomElements };
