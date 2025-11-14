module.exports = [
"[project]/node_modules/.pnpm/wawoff2@2.0.1/node_modules/wawoff2/compress.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const em_module = __turbopack_context__.r("[project]/node_modules/.pnpm/wawoff2@2.0.1/node_modules/wawoff2/build/compress_binding.js [app-route] (ecmascript)");
const runtimeInit = new Promise((resolve)=>{
    em_module.onRuntimeInitialized = resolve;
});
module.exports = async function compress(buffer) {
    await runtimeInit;
    const result = em_module.compress(buffer);
    if (result === false) throw new Error('ConvertTTFToWOFF2 failed');
    return result;
};
}),
"[project]/node_modules/.pnpm/wawoff2@2.0.1/node_modules/wawoff2/decompress.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const em_module = __turbopack_context__.r("[project]/node_modules/.pnpm/wawoff2@2.0.1/node_modules/wawoff2/build/decompress_binding.js [app-route] (ecmascript)");
const runtimeInit = new Promise((resolve)=>{
    em_module.onRuntimeInitialized = resolve;
});
module.exports = async function decompress(buffer) {
    await runtimeInit;
    const result = em_module.decompress(buffer);
    if (result === false) throw new Error('ConvertWOFF2ToTTF failed');
    return result;
};
}),
"[project]/node_modules/.pnpm/wawoff2@2.0.1/node_modules/wawoff2/index.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

exports.compress = __turbopack_context__.r("[project]/node_modules/.pnpm/wawoff2@2.0.1/node_modules/wawoff2/compress.js [app-route] (ecmascript)");
exports.decompress = __turbopack_context__.r("[project]/node_modules/.pnpm/wawoff2@2.0.1/node_modules/wawoff2/decompress.js [app-route] (ecmascript)");
}),
];

//# sourceMappingURL=f48e5_wawoff2_2a4a4f61._.js.map