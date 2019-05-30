export function truncateStr(source: string) {
    const size = 1000;
    return source.length > size ? source.slice(0, size - 1) + '…' : source;
}

export function getCurrentTimestamp() {
    return new Date().toISOString();
}