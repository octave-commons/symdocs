import type * as ts from "typescript";
export { sha1 } from "@promethean-os/utils";
export declare function parseArgs(defaults: Record<string, string>): Record<string, string>;
export declare function getLangFromExt(p: string): "ts" | "tsx" | "js" | "jsx";
export declare function makeProgram(rootFiles: string[], tsconfigPath?: string): ts.Program;
export declare function signatureForFunction(checker: ts.TypeChecker, decl: ts.FunctionLikeDeclarationBase): string | undefined;
export declare function typeToString(checker: ts.TypeChecker, node: ts.Node): string | undefined;
//# sourceMappingURL=utils.d.ts.map