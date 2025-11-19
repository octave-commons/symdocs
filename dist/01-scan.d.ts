export type ScanOptions = {
    root?: string;
    tsconfig?: string;
    ext?: string;
    cache?: string;
    files?: readonly string[];
};
export declare function collectSourceFiles(root: string, exts: Set<string>): Promise<string[]>;
export declare function runScan(opts?: ScanOptions): Promise<void>;
//# sourceMappingURL=01-scan.d.ts.map