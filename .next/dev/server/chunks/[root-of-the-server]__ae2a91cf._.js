module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/node:fs [external] (node:fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:fs", () => require("node:fs"));

module.exports = mod;
}),
"[externals]/node:path [external] (node:path, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:path", () => require("node:path"));

module.exports = mod;
}),
"[project]/lib/presetCharsets.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PRESET_CHARSET_META",
    ()=>PRESET_CHARSET_META,
    "inlineCharsetMap",
    ()=>inlineCharsetMap
]);
const PRESET_CHARSET_META = [
    {
        id: 'digits',
        label: '数字 0-9',
        sizeHint: 10,
        type: 'inline'
    },
    {
        id: 'latin',
        label: '英文 A-Z a-z',
        sizeHint: 52,
        type: 'inline'
    },
    {
        id: 'cn-3500',
        label: '常用汉字 3500',
        sizeHint: 3500,
        type: 'remote',
        path: '/charsets/cn-3500.txt'
    },
    {
        id: 'cn-7000',
        label: '常用汉字 7000',
        sizeHint: 7000,
        type: 'remote',
        path: '/charsets/cn-7000.txt'
    }
];
const inlineCharsetMap = {
    digits: '0123456789',
    latin: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz',
    'cn-3500': undefined,
    'cn-7000': undefined
};
}),
"[project]/lib/presetCharsetService.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getPresetMetadata",
    ()=>getPresetMetadata,
    "loadPresetCharset",
    ()=>loadPresetCharset
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs__$5b$external$5d$__$28$node$3a$fs$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:fs [external] (node:fs, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:path [external] (node:path, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$presetCharsets$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/presetCharsets.ts [app-route] (ecmascript)");
;
;
;
function getPresetMetadata() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$presetCharsets$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["PRESET_CHARSET_META"];
}
async function loadPresetCharset(id) {
    const inlineCharset = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$presetCharsets$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["inlineCharsetMap"][id];
    if (inlineCharset) {
        return inlineCharset;
    }
    const meta = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$presetCharsets$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["PRESET_CHARSET_META"].find((item)=>item.id === id);
    if (!meta || meta.type !== 'remote' || !meta.path) {
        return null;
    }
    const relativePath = meta.path.startsWith('/') ? meta.path.slice(1) : meta.path;
    const filePath = __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].join(process.cwd(), 'public', relativePath);
    try {
        const content = await __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs__$5b$external$5d$__$28$node$3a$fs$2c$__cjs$29$__["promises"].readFile(filePath, 'utf8');
        return content.trim();
    } catch (error) {
        console.error(`Failed to load charset file for ${id}:`, error);
        return null;
    }
}
}),
"[project]/app/api/presets/[presetId]/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET,
    "runtime",
    ()=>runtime
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$presetCharsetService$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/presetCharsetService.ts [app-route] (ecmascript)");
;
;
const runtime = 'nodejs';
async function GET(_request, { params }) {
    const characters = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$presetCharsetService$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["loadPresetCharset"])(params.presetId);
    if (!characters) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: 'Preset not found'
        }, {
            status: 404
        });
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
        id: params.presetId,
        characters,
        count: characters.length
    });
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__ae2a91cf._.js.map