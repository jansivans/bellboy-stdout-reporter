# Bellboy stdout (console) reporter

## Installation
```
npm install bellboy-stdout-reporter
```

## Usage
```javascript
const bellboy = require('bellboy');
const reporter = require('bellboy-stdout-reporter');

const job = new bellboy.Job(processor, [destination], {
    reporters: [new reporter.StdoutReporter()],
});
```