export interface IStream {
    receivedRows: number;
    destinations: { [id: number]: IStreamDestination };
    bytes: number;
    streamId: number;
    streamInfo?: any[];
    finished: boolean;
    speed: number;
}

export interface IStreamDestination {
    rowsGenerated: number,
    rowsGenerationFails: number,
    batchesLoaded: number,
    batchLoadFails: number,
    batchesTransformed: number,
    batchTransformFails: number,
    bytesLoaded: 0;
}

export interface LogItem {
    header: string;
    type?: 'success' | 'fail' | 'wait';
    lines?: { [key: string]: string };
    children?: LogItem[];
}

export interface IReporterConfig {
    interval?: number;
}