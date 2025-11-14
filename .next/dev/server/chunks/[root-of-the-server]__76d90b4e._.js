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
"[externals]/subset-font [external] (subset-font, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("subset-font", () => require("subset-font"));

module.exports = mod;
}),
"[externals]/fonteditor-core [external] (fonteditor-core, esm_import)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

const mod = await __turbopack_context__.y("fonteditor-core");

__turbopack_context__.n(mod);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, true);}),
"[project]/lib/outputFormats.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DEFAULT_OUTPUT_FORMAT",
    ()=>DEFAULT_OUTPUT_FORMAT,
    "OUTPUT_FORMATS",
    ()=>OUTPUT_FORMATS,
    "OUTPUT_MIME_TYPES",
    ()=>OUTPUT_MIME_TYPES,
    "buildSubsetFilename",
    ()=>buildSubsetFilename,
    "isOutputFormat",
    ()=>isOutputFormat
]);
const OUTPUT_FORMATS = [
    {
        id: 'ttf',
        label: 'TTF'
    },
    {
        id: 'woff2',
        label: 'WOFF2'
    },
    {
        id: 'woff',
        label: 'WOFF'
    }
];
const OUTPUT_MIME_TYPES = {
    ttf: 'font/ttf',
    woff2: 'font/woff2',
    woff: 'font/woff'
};
const DEFAULT_OUTPUT_FORMAT = 'ttf';
function isOutputFormat(value) {
    return OUTPUT_FORMATS.some((format)=>format.id === value);
}
const EXTENSION_REGEX = /\.[^.]+$/;
function buildSubsetFilename(sourceName, format) {
    const base = (sourceName?.replace(EXTENSION_REGEX, '') || 'font').trim() || 'font';
    return `subset-${base}.${format}`;
}
}),
"[project]/app/api/subset/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "POST",
    ()=>POST,
    "runtime",
    ()=>runtime
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$subset$2d$font__$5b$external$5d$__$28$subset$2d$font$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/subset-font [external] (subset-font, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$fonteditor$2d$core__$5b$external$5d$__$28$fonteditor$2d$core$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/fonteditor-core [external] (fonteditor-core, esm_import)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$outputFormats$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/outputFormats.ts [app-route] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$fonteditor$2d$core__$5b$external$5d$__$28$fonteditor$2d$core$2c$__esm_import$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$fonteditor$2d$core__$5b$external$5d$__$28$fonteditor$2d$core$2c$__esm_import$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
const runtime = "nodejs";
const MAX_CHARACTERS = 50000;
const MAX_FONT_BYTES = 20 * 1024 * 1024; // 20MB safety limit
const PRESERVE_NAME_IDS = Array.from({
    length: 512
}, (_, index)=>index);
const SUBSET_TARGET_FORMAT = "sfnt";
const ensureWoff2Ready = (()=>{
    let promise = null;
    return ()=>{
        if (!promise) {
            promise = __TURBOPACK__imported__module__$5b$externals$5d2f$fonteditor$2d$core__$5b$external$5d$__$28$fonteditor$2d$core$2c$__esm_import$29$__["woff2"].init();
        }
        return promise;
    };
})();
const toBuffer = (output)=>{
    if (Buffer.isBuffer(output)) {
        return output;
    }
    return Buffer.from(output instanceof ArrayBuffer ? new Uint8Array(output) : output);
};
async function reconvertFont(ttfBuffer, format) {
    if (format === "woff2") {
        await ensureWoff2Ready();
    }
    const font = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$fonteditor$2d$core__$5b$external$5d$__$28$fonteditor$2d$core$2c$__esm_import$29$__["createFont"])(ttfBuffer, {
        type: "ttf",
        hinting: true,
        kerning: true
    });
    const written = font.write({
        type: format,
        hinting: true,
        kerning: true,
        toBuffer: true
    });
    return toBuffer(written);
}
async function POST(request) {
    try {
        const formData = await request.formData();
        const fontEntry = formData.get("font");
        const characters = String(formData.get("characters") ?? "").trim();
        const formatEntry = formData.get("format");
        if (!(fontEntry instanceof File) || fontEntry.size === 0) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "请上传要子集化的字体文件"
            }, {
                status: 400
            });
        }
        if (fontEntry.size > MAX_FONT_BYTES) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "字体文件过大，请选择 20MB 以内的文件"
            }, {
                status: 400
            });
        }
        if (!characters) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "请输入或选择要保留的字符"
            }, {
                status: 400
            });
        }
        if (characters.length > MAX_CHARACTERS) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "字符数量过多，请控制在 50,000 个以内"
            }, {
                status: 400
            });
        }
        let outputFormat = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$outputFormats$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["DEFAULT_OUTPUT_FORMAT"];
        if (typeof formatEntry === "string" && (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$outputFormats$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isOutputFormat"])(formatEntry)) {
            outputFormat = formatEntry;
        }
        const fontBuffer = Buffer.from(await fontEntry.arrayBuffer());
        const subsetBuffer = await (0, __TURBOPACK__imported__module__$5b$externals$5d2f$subset$2d$font__$5b$external$5d$__$28$subset$2d$font$2c$__cjs$29$__["default"])(fontBuffer, characters, {
            targetFormat: SUBSET_TARGET_FORMAT,
            preserveNameIds: PRESERVE_NAME_IDS
        });
        const outputBuffer = await reconvertFont(Buffer.from(subsetBuffer), outputFormat);
        const filename = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$outputFormats$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["buildSubsetFilename"])(fontEntry.name, outputFormat);
        const encodedFilename = encodeURIComponent(filename);
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"](outputBuffer, {
            headers: {
                "Content-Type": __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$outputFormats$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["OUTPUT_MIME_TYPES"][outputFormat],
                "Content-Length": String(outputBuffer.length),
                "Cache-Control": "no-store",
                "Content-Disposition": `attachment; filename="${encodedFilename}"; filename*=UTF-8''${encodedFilename}`
            }
        });
    } catch (error) {
        console.error("Font subset failed", error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "字体子集生成失败，请稍后再试"
        }, {
            status: 500
        });
    }
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__76d90b4e._.js.map