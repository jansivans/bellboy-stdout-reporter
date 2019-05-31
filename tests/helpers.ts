import { Destination, Processor } from 'bellboy';
import { Stream } from 'stream';

export class DummyDestination extends Destination {
    async loadBatch(rows: any[]) { }
}

export class FaultyDestination extends Destination {
    async loadBatch(rows: any[]) {
        throw new Error('Oh, snap!');
    }
}

export class FaultyProcessor extends Processor {
    async process() {
        throw new Error('Oh, snap!');
    }
}

export class WithInfoProcessor extends Processor {
    async process(processStream: any) {
        const readStream = getReadStream();
        await processStream(readStream, 'some', 'info');
    }
}

export class MultipleStreamProcessor extends Processor {
    async process(processStream: any) {
        const readStream = getReadStream();
        await processStream(readStream);
        await processStream(readStream);
    }
}

function getReadStream() {
    return new Stream.Readable({
        objectMode: true,
        async read() {
            this.push('test');
            return this.push(null);
        },
    }).pause();
}

export function timeout(ms: number) {
    return new Promise(res => setTimeout(res, ms));
}