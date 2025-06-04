
# chetan-js-polyfills

A lightweight JavaScript polyfill library to bring modern JS features to older environments. Simple, modular, and dependency-free.

> 🎯 Focused on minimalism — only polyfills you actually need.

---

<img src="https://github.com/chetannn-github/JavaScript-Practise-Problems/blob/main/src/assets/npm.png" width="100%" />

## 🚀 Features

- ✅ Polyfills for modern JavaScript methods (ES6+)
- ✅ Zero dependencies
- ✅ Works in old browsers (like IE11+)
- ✅ Tiny bundle size

---

## 📦 Installation

Install via npm:

```bash
npm install chetan-js-polyfills
```

Or using Yarn:

```bash
yarn add chetan-js-polyfills
```

---
## 🛠️ Usage

### Automatic Polyfills (Prototype Methods)

When you import the package, these polyfills are added to the respective prototypes:

- **Function.prototype**:  
  - `myCall`, `myBind`, `myApply`
- **Array.prototype**:  
  - `myMap`, `myFilter`, `myReduce`, `mySlice`, `myFlat`
- **Object**:  
  - `myCreate`

```js
import 'chetan-js-polyfills';
// Now you can use the polyfilled methods directly on Function, Array, and Object
```

---

### Named Utility Exports

You can also import utility functions as named exports:

- `myDeepCloneObject`
- `myCurrySum`
- `myDeepCompareObjects`
- `myAbstractEquality`
- `myDebounce`
- `myThrottleBasicUsingDate`
- `myThrottleBasicUsingTimer`
- `myThrottleAdvance`
- `myNew`
- `mySetTimeout`
- `myClearTimeout`

```js
import {
  myDeepCloneObject,
  myCurrySum,
  myDeepCompareObjects,
  myAbstractEquality,
  myDebounce,
  myThrottleBasicUsingDate,
  myThrottleBasicUsingTimer,
  myThrottleAdvance,
  myNew,
  mySetTimeout,
  myClearTimeout
} from 'chetan-js-polyfills';
```

This approach keeps your bundle size small and lets you use only what you need.

## 🌍 Browser Support

Designed to work in environments that support ES5 (like IE11 and above).

Tested in:

- Chrome
- Firefox
- Safari
- Edge
- Internet Explorer 11 ✅

---


---


---

## 🧑‍💻 Contributing

Contributions, bug reports, and feature requests are welcome!

1. Fork the repo
2. Create your branch (\`git checkout -b feature-name\`)
3. Commit your changes
4. Open a Pull Request

---

## 📄 License

MIT License  
© 2025 [Chetan](https://github.com/chetannn-github)

---

## ⭐ Like This Project?

Give it a star ⭐ on GitHub — it helps others discover it!
`;

