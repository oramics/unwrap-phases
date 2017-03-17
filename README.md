# unwrap-phases

> Unwrap phase data

[![npm install unwrap-phases](https://nodei.co/npm/unwrap-phases.png?mini=true)](https://npmjs.org/package/unwrap-phases/)



```js
var unwrap = require('unwrap-phases')
unwrap(phases) // in-place unwrapping for maximum efficiency
```


## Usage

### unwrap(input, [output = input]) ⇒ <code>Array</code>


**Returns**: <code>Array</code> - the unrapped phase data

| Param | Type | Description |
| --- | --- | --- |
| input | <code>Array</code> | phase data |
| output | <code>Array</code> | (Optional) the output array to store the unrapped phase data. If not provided, an in-place modification is performed. If true is passed as an argument, a new array is created. |

**Example**  
```js
const unwrap = require('unwrap-phases')
// given a phase data of a spectrum...
unwrap(phases) // in-place unwrapping
const unwrapped = unwrap(phases, true) // new output array
```

## License

MIT License
