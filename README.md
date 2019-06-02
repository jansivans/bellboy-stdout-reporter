# Bellboy stdout (console) reporter [![Build Status](https://travis-ci.org/Claviz/bellboy-stdout-reporter.svg?branch=master)](https://travis-ci.org/Claviz/bellboy-stdout-reporter) [![codecov](https://codecov.io/gh/Claviz/bellboy-stdout-reporter/branch/master/graph/badge.svg)](https://codecov.io/gh/Claviz/bellboy-stdout-reporter)

## Installation
```
npm install bellboy-stdout-reporter
```

## Usage
```javascript
const bellboy = require('bellboy');
const StdoutReporter = require('bellboy-stdout-reporter').default;

const job = new bellboy.Job(processor, [destination], {
    reporters: [new StdoutReporter()],
});
```