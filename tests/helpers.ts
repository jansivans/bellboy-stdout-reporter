import { Destination } from 'bellboy';

export class DummyDestination extends Destination {
    async loadBatch(rows: any[]) { }
}

export class FaultyDestination extends Destination {
    async loadBatch(rows: any[]) {
        throw new Error('Oh, snap!');
    }
}