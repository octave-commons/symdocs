import * as path from "path";
export { sha1 } from "@promethean-os/utils";
// Dynamic import to handle ES module compatibility
let tsMod;
try {
    tsMod = await import("typescript");
}
catch {
    tsMod = require("typescript");
}
export function parseArgs(defaults) {
    const args = process.argv.slice(2);
    const parse = (index, acc) => {
        if (index >= args.length)
            return acc;
        const key = args[index] ?? "";
        if (!key.startsWith("--"))
            return parse(index + 1, acc);
        const next = args[index + 1] ?? "";
        const value = next && !next.startsWith("--") ? next : "true";
        const nextIndex = value === "true" ? index + 1 : index + 2;
        return parse(nextIndex, { ...acc, [key]: value });
    };
    return parse(0, { ...defaults });
}
export function getLangFromExt(p) {
    const e = path.extname(p).toLowerCase();
    if (e === ".ts")
        return "ts";
    if (e === ".tsx")
        return "tsx";
    if (e === ".jsx")
        return "jsx";
    return "js";
}
export function makeProgram(rootFiles, tsconfigPath) {
    const baseOptions = {
        target: 7, // ES2022 = ES2020 in newer TS versions (7)
        module: 99, // ESNext = 99 in TypeScript ModuleKind enum
        strict: true,
    };
    const options = tsconfigPath
        ? (() => {
            const configFile = tsMod.readConfigFile(tsconfigPath, tsMod.sys.readFile);
            if (configFile.error) {
                throw new Error(tsMod.formatDiagnosticsWithColorAndContext([configFile.error], {
                    getCanonicalFileName: (f) => f,
                    getCurrentDirectory: tsMod.sys.getCurrentDirectory,
                    getNewLine: () => tsMod.sys.newLine,
                }));
            }
            const parse = tsMod.parseJsonConfigFileContent(configFile.config, tsMod.sys, path.dirname(tsconfigPath));
            return { ...parse.options, ...baseOptions };
        })()
        : baseOptions;
    return tsMod.createProgram(rootFiles, options);
}
export function signatureForFunction(checker, decl) {
    const sig = checker.getSignatureFromDeclaration(decl);
    return sig ? checker.signatureToString(sig) : undefined;
}
export function typeToString(checker, node) {
    const t = checker.getTypeAtLocation(node);
    try {
        return checker.typeToString(t);
    }
    catch {
        return undefined;
    }
}
//# sourceMappingURL=utils.js.map