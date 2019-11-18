## a

[![npm version](https://badge.fury.io/js/%40vtcaregorodtcev%2Fa.svg)](https://badge.fury.io/js/%40vtcaregorodtcev%2Fa)

empty array maker + filler


## Install

```bash
npm i @vtcaregorodtcev/a
```

## Usage

```js
import a from '@vtcaregorodtcev/a';

const arr = a(5);

console.log(arr); // ['5', '5', '5', '5', '5']
```

```jsx
<div>
    {
        a(10).map((a, i) => <Item key={i} />)
    }
</div>
```