export type WriteOptions = {
    cache?: string;
    out?: string;
    granularity?: 'module' | 'symbol';
};
export declare function runWrite(opts?: WriteOptions): Promise<void>;
//# sourceMappingURL=03-write.d.ts.map