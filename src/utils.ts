const stringifyObject = require('stringify-object');

export function getCurrentTimestamp() {
    return new Date().toISOString();
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