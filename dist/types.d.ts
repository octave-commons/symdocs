export type SymKind = "function" | "variable" | "class" | "type";
export type SymbolInfo = {
    id: string;
    pkg: string;
    fileAbs: string;
    fileRel: string;
    moduleRel: string;
    lang: "ts" | "tsx" | "js" | "jsx";
    name: string;
    kind: SymKind;
    exported: boolean;
    jsdoc?: string;
    signature?: string;
    startLine: number;
    endLine: number;
    snippet: string;
};
export type ScanResult = {
    symbols: SymbolInfo[];
};
export type DocDraft = {
    id: string;
    name: string;
    kind: SymKind;
    title: string;
    summary: string;
    usage?: string;
    details?: string;
    pitfalls?: string[];
    tags?: string[];
    mermaid?: string;
};
export type DocMap = Record<string, DocDraft>;
//# sourceMappingURL=types.d.ts.map