import { DynamicProcessor, Job } from 'bellboy';
import stripAnsi from 'strip-ansi';

import { StdoutReporter } from '../src';
import { DummyDestination, FaultyDestination } from './helpers';

jest.mock('pretty-ms', () => (() => 'pretty-ms-mock'));
jest.mock('../src/utils', () => ({
    ...jest.requireActual('../src/utils'),
    getCurrentTimestamp: () => 'timestamp-mock'
}));

let consoleData: string[] = [];

beforeAll(async () => {
});

beforeEach(async () => {
    consoleData = [];
    let indent = 0;
    console.log = function (message: string) {
        message = message ? message : '';
        consoleData.push('    '.repeat(indent) + stripAnsi(message));
    }
    console.group = function () {
        indent++;
    }
    console.groupEnd = function () {
        indent--;
    }
});

afterEach(async () => {
});

afterAll(async () => {
});

it('correctly logs bellboy job', async () => {
    const destination = new DummyDestination();
    const processor = new DynamicProcessor({
        generator: async function* () {
            for (let i = 0; i < 1; i++) {
                yield `test${i}`;
            }
        },
    });
    const job = new Job(processor, [destination], {
        reporters: [new StdoutReporter()],
    });
    await job.run();
    expect(consoleData).toMatchSnapshot();
});

it('correctly logs load exceptions', async () => {
    const destination = new FaultyDestination();
    const processor = new DynamicProcessor({
        generator: async function* () {
            for (let i = 0; i < 1; i++) {
                yield `test${i}`;
            }
        },
    });
    const job = new Job(processor, [destination], {
        reporters: [new StdoutReporter()],
    });
    await job.run();
    expect(consoleData).toMatchSnapshot();
});

