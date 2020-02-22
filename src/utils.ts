const stringifyObject = require('stringify-object');
const moment = require('moment');

export function getCurrentTimestamp() {
    return moment().toISOString(true);
}

export function stringify(obj: any) {
    const maxArraySize = 3;
    if (Array.isArray(obj) && obj.length > maxArraySize) {
        const limitText = `… [+${obj.length - maxArraySize} items]`
        obj = obj.slice(0, maxArraySize);
        obj.push(limitText);
    }
    let pretty = stringifyObject(obj, {
        indent: '  ',
        singleQuotes: false,
        inlineCharacterLimit: 200,
    });
    return pretty;
}