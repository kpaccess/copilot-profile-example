module.exports = [
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[externals]/stream [external] (stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}),
"[externals]/zlib [external] (zlib, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}),
"[externals]/react-dom [external] (react-dom, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("react-dom", () => require("react-dom"));

module.exports = mod;
}),
"[project]/components/Header.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/link.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$router$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/router.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$7$2e$3$2e$5_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$18$2e$3$2e$27_react$40$19$2e$1$2e$0_$5f40$emotion$2b$styled_exfc7eucjbfe7sy7vftklwa4n4$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$AppBar$2f$AppBar$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@mui+material@7.3.5_@emotion+react@11.14.0_@types+react@18.3.27_react@19.1.0__@emotion+styled_exfc7eucjbfe7sy7vftklwa4n4/node_modules/@mui/material/esm/AppBar/AppBar.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$7$2e$3$2e$5_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$18$2e$3$2e$27_react$40$19$2e$1$2e$0_$5f40$emotion$2b$styled_exfc7eucjbfe7sy7vftklwa4n4$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Toolbar$2f$Toolbar$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@mui+material@7.3.5_@emotion+react@11.14.0_@types+react@18.3.27_react@19.1.0__@emotion+styled_exfc7eucjbfe7sy7vftklwa4n4/node_modules/@mui/material/esm/Toolbar/Toolbar.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$7$2e$3$2e$5_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$18$2e$3$2e$27_react$40$19$2e$1$2e$0_$5f40$emotion$2b$styled_exfc7eucjbfe7sy7vftklwa4n4$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@mui+material@7.3.5_@emotion+react@11.14.0_@types+react@18.3.27_react@19.1.0__@emotion+styled_exfc7eucjbfe7sy7vftklwa4n4/node_modules/@mui/material/esm/Button/Button.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$7$2e$3$2e$5_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$18$2e$3$2e$27_react$40$19$2e$1$2e$0_$5f40$emotion$2b$styled_exfc7eucjbfe7sy7vftklwa4n4$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@mui+material@7.3.5_@emotion+react@11.14.0_@types+react@18.3.27_react@19.1.0__@emotion+styled_exfc7eucjbfe7sy7vftklwa4n4/node_modules/@mui/material/esm/Box/Box.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$7$2e$3$2e$5_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$18$2e$3$2e$27_react$40$19$2e$1$2e$0_$5f40$emotion$2b$styled_exfc7eucjbfe7sy7vftklwa4n4$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@mui+material@7.3.5_@emotion+react@11.14.0_@types+react@18.3.27_react@19.1.0__@emotion+styled_exfc7eucjbfe7sy7vftklwa4n4/node_modules/@mui/material/esm/Typography/Typography.js [ssr] (ecmascript)");
;
;
;
;
;
;
;
;
;
function Header() {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$router$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const NavButton = ({ href, children })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
            href: href,
            passHref: true,
            legacyBehavior: true,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$7$2e$3$2e$5_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$18$2e$3$2e$27_react$40$19$2e$1$2e$0_$5f40$emotion$2b$styled_exfc7eucjbfe7sy7vftklwa4n4$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                color: router.pathname === href ? 'primary' : 'inherit',
                sx: {
                    ml: 1,
                    bgcolor: router.pathname === href ? 'primary.main' : 'transparent',
                    color: router.pathname === href ? '#fff' : 'text.primary'
                },
                children: children
            }, void 0, false, {
                fileName: "[project]/components/Header.js",
                lineNumber: 15,
                columnNumber: 7
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/Header.js",
            lineNumber: 14,
            columnNumber: 5
        }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$7$2e$3$2e$5_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$18$2e$3$2e$27_react$40$19$2e$1$2e$0_$5f40$emotion$2b$styled_exfc7eucjbfe7sy7vftklwa4n4$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$AppBar$2f$AppBar$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
        position: "static",
        color: "transparent",
        elevation: 0,
        sx: {
            mb: 6
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$7$2e$3$2e$5_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$18$2e$3$2e$27_react$40$19$2e$1$2e$0_$5f40$emotion$2b$styled_exfc7eucjbfe7sy7vftklwa4n4$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Toolbar$2f$Toolbar$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
            sx: {
                justifyContent: 'space-between'
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$7$2e$3$2e$5_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$18$2e$3$2e$27_react$40$19$2e$1$2e$0_$5f40$emotion$2b$styled_exfc7eucjbfe7sy7vftklwa4n4$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                    sx: {
                        display: 'flex',
                        alignItems: 'center'
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$7$2e$3$2e$5_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$18$2e$3$2e$27_react$40$19$2e$1$2e$0_$5f40$emotion$2b$styled_exfc7eucjbfe7sy7vftklwa4n4$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                        variant: "subtitle2",
                        sx: {
                            fontWeight: 800,
                            letterSpacing: 1
                        },
                        children: "KRISHNA PRADHAN"
                    }, void 0, false, {
                        fileName: "[project]/components/Header.js",
                        lineNumber: 32,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/Header.js",
                    lineNumber: 31,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$7$2e$3$2e$5_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$18$2e$3$2e$27_react$40$19$2e$1$2e$0_$5f40$emotion$2b$styled_exfc7eucjbfe7sy7vftklwa4n4$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(NavButton, {
                            href: "/",
                            children: "Home"
                        }, void 0, false, {
                            fileName: "[project]/components/Header.js",
                            lineNumber: 35,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(NavButton, {
                            href: "/projects",
                            children: "Projects"
                        }, void 0, false, {
                            fileName: "[project]/components/Header.js",
                            lineNumber: 36,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(NavButton, {
                            href: "/contact",
                            children: "Contact"
                        }, void 0, false, {
                            fileName: "[project]/components/Header.js",
                            lineNumber: 37,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Header.js",
                    lineNumber: 34,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/Header.js",
            lineNumber: 30,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/Header.js",
        lineNumber: 29,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/Hero.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Hero
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$7$2e$3$2e$5_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$18$2e$3$2e$27_react$40$19$2e$1$2e$0_$5f40$emotion$2b$styled_exfc7eucjbfe7sy7vftklwa4n4$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@mui+material@7.3.5_@emotion+react@11.14.0_@types+react@18.3.27_react@19.1.0__@emotion+styled_exfc7eucjbfe7sy7vftklwa4n4/node_modules/@mui/material/esm/Box/Box.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$7$2e$3$2e$5_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$18$2e$3$2e$27_react$40$19$2e$1$2e$0_$5f40$emotion$2b$styled_exfc7eucjbfe7sy7vftklwa4n4$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@mui+material@7.3.5_@emotion+react@11.14.0_@types+react@18.3.27_react@19.1.0__@emotion+styled_exfc7eucjbfe7sy7vftklwa4n4/node_modules/@mui/material/esm/Typography/Typography.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$7$2e$3$2e$5_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$18$2e$3$2e$27_react$40$19$2e$1$2e$0_$5f40$emotion$2b$styled_exfc7eucjbfe7sy7vftklwa4n4$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Avatar$2f$Avatar$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@mui+material@7.3.5_@emotion+react@11.14.0_@types+react@18.3.27_react@19.1.0__@emotion+styled_exfc7eucjbfe7sy7vftklwa4n4/node_modules/@mui/material/esm/Avatar/Avatar.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$7$2e$3$2e$5_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$18$2e$3$2e$27_react$40$19$2e$1$2e$0_$5f40$emotion$2b$styled_exfc7eucjbfe7sy7vftklwa4n4$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Stack$2f$Stack$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@mui+material@7.3.5_@emotion+react@11.14.0_@types+react@18.3.27_react@19.1.0__@emotion+styled_exfc7eucjbfe7sy7vftklwa4n4/node_modules/@mui/material/esm/Stack/Stack.js [ssr] (ecmascript)");
;
;
;
;
;
;
function Hero() {
    const profileUrl = "/krishna.jpg";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$7$2e$3$2e$5_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$18$2e$3$2e$27_react$40$19$2e$1$2e$0_$5f40$emotion$2b$styled_exfc7eucjbfe7sy7vftklwa4n4$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
        sx: {
            display: 'flex',
            gap: 6,
            alignItems: 'center',
            mb: 6,
            flexWrap: 'wrap'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$7$2e$3$2e$5_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$18$2e$3$2e$27_react$40$19$2e$1$2e$0_$5f40$emotion$2b$styled_exfc7eucjbfe7sy7vftklwa4n4$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                sx: {
                    flex: '1 1 420px',
                    minWidth: 320
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$7$2e$3$2e$5_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$18$2e$3$2e$27_react$40$19$2e$1$2e$0_$5f40$emotion$2b$styled_exfc7eucjbfe7sy7vftklwa4n4$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                        variant: "h1",
                        component: "h1",
                        sx: {
                            fontWeight: 800,
                            mb: 1,
                            fontSize: {
                                xs: '2rem',
                                md: '3rem'
                            }
                        },
                        children: "I'm Krishna"
                    }, void 0, false, {
                        fileName: "[project]/components/Hero.js",
                        lineNumber: 14,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$7$2e$3$2e$5_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$18$2e$3$2e$27_react$40$19$2e$1$2e$0_$5f40$emotion$2b$styled_exfc7eucjbfe7sy7vftklwa4n4$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                        variant: "h5",
                        sx: {
                            fontWeight: 700,
                            color: 'text.secondary',
                            mb: 2
                        },
                        children: "Web Developer"
                    }, void 0, false, {
                        fileName: "[project]/components/Hero.js",
                        lineNumber: 17,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$7$2e$3$2e$5_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$18$2e$3$2e$27_react$40$19$2e$1$2e$0_$5f40$emotion$2b$styled_exfc7eucjbfe7sy7vftklwa4n4$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                        sx: {
                            color: 'text.secondary',
                            maxWidth: 720
                        },
                        children: "Dedicated to crafting beautiful and functional websites that make ideas come alive through code. Explore my portfolio to see my passion for web development in action."
                    }, void 0, false, {
                        fileName: "[project]/components/Hero.js",
                        lineNumber: 20,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Hero.js",
                lineNumber: 13,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$7$2e$3$2e$5_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$18$2e$3$2e$27_react$40$19$2e$1$2e$0_$5f40$emotion$2b$styled_exfc7eucjbfe7sy7vftklwa4n4$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Stack$2f$Stack$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                alignItems: "center",
                sx: {
                    width: 160
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$7$2e$3$2e$5_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$18$2e$3$2e$27_react$40$19$2e$1$2e$0_$5f40$emotion$2b$styled_exfc7eucjbfe7sy7vftklwa4n4$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Avatar$2f$Avatar$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                    alt: "Krishna",
                    src: profileUrl,
                    sx: {
                        width: 160,
                        height: 160,
                        border: '6px solid rgba(242,200,160,0.4)',
                        boxShadow: '0 8px 30px rgba(60,40,20,0.12)'
                    }
                }, void 0, false, {
                    fileName: "[project]/components/Hero.js",
                    lineNumber: 26,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/Hero.js",
                lineNumber: 25,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Hero.js",
        lineNumber: 12,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/Skills.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Skills
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$7$2e$3$2e$5_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$18$2e$3$2e$27_react$40$19$2e$1$2e$0_$5f40$emotion$2b$styled_exfc7eucjbfe7sy7vftklwa4n4$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@mui+material@7.3.5_@emotion+react@11.14.0_@types+react@18.3.27_react@19.1.0__@emotion+styled_exfc7eucjbfe7sy7vftklwa4n4/node_modules/@mui/material/esm/Box/Box.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$7$2e$3$2e$5_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$18$2e$3$2e$27_react$40$19$2e$1$2e$0_$5f40$emotion$2b$styled_exfc7eucjbfe7sy7vftklwa4n4$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@mui+material@7.3.5_@emotion+react@11.14.0_@types+react@18.3.27_react@19.1.0__@emotion+styled_exfc7eucjbfe7sy7vftklwa4n4/node_modules/@mui/material/esm/Typography/Typography.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$7$2e$3$2e$5_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$18$2e$3$2e$27_react$40$19$2e$1$2e$0_$5f40$emotion$2b$styled_exfc7eucjbfe7sy7vftklwa4n4$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Grid$2f$Grid$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@mui+material@7.3.5_@emotion+react@11.14.0_@types+react@18.3.27_react@19.1.0__@emotion+styled_exfc7eucjbfe7sy7vftklwa4n4/node_modules/@mui/material/esm/Grid/Grid.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$7$2e$3$2e$5_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$18$2e$3$2e$27_react$40$19$2e$1$2e$0_$5f40$emotion$2b$styled_exfc7eucjbfe7sy7vftklwa4n4$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Paper$2f$Paper$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@mui+material@7.3.5_@emotion+react@11.14.0_@types+react@18.3.27_react@19.1.0__@emotion+styled_exfc7eucjbfe7sy7vftklwa4n4/node_modules/@mui/material/esm/Paper/Paper.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$7$2e$3$2e$5_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$18$2e$3$2e$27_react$40$19$2e$1$2e$0_$5f40$emotion$2b$styled_exfc7eucjbfe7sy7vftklwa4n4$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$LinearProgress$2f$LinearProgress$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@mui+material@7.3.5_@emotion+react@11.14.0_@types+react@18.3.27_react@19.1.0__@emotion+styled_exfc7eucjbfe7sy7vftklwa4n4/node_modules/@mui/material/esm/LinearProgress/LinearProgress.js [ssr] (ecmascript)");
;
;
;
;
;
;
;
const DEFAULT_SKILLS = [
    "HTML - 8",
    "CSS - 8",
    "JavaScript - 8",
    "ReactJS - 8",
    "NextJS - 8",
    "TypeScript - 8",
    "Redux - 8",
    "GraphQL - 7",
    "Docker - 6",
    "NODEJS - 5"
];
function parseSkill(s) {
    // Handle both string format ("Name - 8") and Contentful object format
    if (typeof s === "string") {
        const parts = s.split("-").map((p)=>p.trim());
        return {
            name: parts[0],
            rating: Math.min(10, Math.max(0, Number(parts[1] || 0)))
        };
    }
    // Contentful object with fields.name and fields.rating
    const fields = s.fields || {};
    return {
        name: fields.name || "Unknown",
        rating: Math.min(10, Math.max(0, Number(fields.rating || 0)))
    };
}
function Skills({ items = DEFAULT_SKILLS }) {
    const parsed = items.map(parseSkill);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$7$2e$3$2e$5_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$18$2e$3$2e$27_react$40$19$2e$1$2e$0_$5f40$emotion$2b$styled_exfc7eucjbfe7sy7vftklwa4n4$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
        sx: {
            maxWidth: 900,
            mt: 4
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$7$2e$3$2e$5_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$18$2e$3$2e$27_react$40$19$2e$1$2e$0_$5f40$emotion$2b$styled_exfc7eucjbfe7sy7vftklwa4n4$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                variant: "h6",
                sx: {
                    fontWeight: 700,
                    mb: 2
                },
                children: "Skills"
            }, void 0, false, {
                fileName: "[project]/components/Skills.js",
                lineNumber: 43,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$7$2e$3$2e$5_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$18$2e$3$2e$27_react$40$19$2e$1$2e$0_$5f40$emotion$2b$styled_exfc7eucjbfe7sy7vftklwa4n4$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Grid$2f$Grid$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                container: true,
                spacing: 2,
                children: parsed.map((s, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$7$2e$3$2e$5_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$18$2e$3$2e$27_react$40$19$2e$1$2e$0_$5f40$emotion$2b$styled_exfc7eucjbfe7sy7vftklwa4n4$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Grid$2f$Grid$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                        item: true,
                        xs: 12,
                        sm: 6,
                        md: 4,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$7$2e$3$2e$5_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$18$2e$3$2e$27_react$40$19$2e$1$2e$0_$5f40$emotion$2b$styled_exfc7eucjbfe7sy7vftklwa4n4$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Paper$2f$Paper$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                            elevation: 0,
                            sx: {
                                p: 2,
                                bgcolor: "background.paper",
                                border: "1px solid rgba(0,0,0,0.04)"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$7$2e$3$2e$5_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$18$2e$3$2e$27_react$40$19$2e$1$2e$0_$5f40$emotion$2b$styled_exfc7eucjbfe7sy7vftklwa4n4$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    sx: {
                                        fontWeight: 700,
                                        mb: 1
                                    },
                                    children: s.name
                                }, void 0, false, {
                                    fileName: "[project]/components/Skills.js",
                                    lineNumber: 57,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$7$2e$3$2e$5_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$18$2e$3$2e$27_react$40$19$2e$1$2e$0_$5f40$emotion$2b$styled_exfc7eucjbfe7sy7vftklwa4n4$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$LinearProgress$2f$LinearProgress$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    variant: "determinate",
                                    value: s.rating / 10 * 100,
                                    sx: {
                                        height: 8,
                                        borderRadius: 8
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/components/Skills.js",
                                    lineNumber: 58,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Skills.js",
                            lineNumber: 49,
                            columnNumber: 13
                        }, this)
                    }, i, false, {
                        fileName: "[project]/components/Skills.js",
                        lineNumber: 48,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/Skills.js",
                lineNumber: 46,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Skills.js",
        lineNumber: 42,
        columnNumber: 5
    }, this);
}
}),
"[externals]/contentful [external] (contentful, esm_import)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

const mod = await __turbopack_context__.y("contentful");

__turbopack_context__.n(mod);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, true);}),
"[project]/lib/contentful.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "client",
    ()=>client,
    "getProjects",
    ()=>getProjects,
    "getSkills",
    ()=>getSkills
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$contentful__$5b$external$5d$__$28$contentful$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/contentful [external] (contentful, esm_import)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$contentful__$5b$external$5d$__$28$contentful$2c$__esm_import$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$contentful__$5b$external$5d$__$28$contentful$2c$__esm_import$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
const space = process.env.CONTENTFUL_SPACE_ID;
const accessToken = process.env.CONTENTFUL_DELIVERY_TOKEN;
if (!space || !accessToken) {
    // This will be visible during build/runtime if env missing.
    console.warn("CONTENTFUL_SPACE_ID and CONTENTFUL_DELIVERY_TOKEN must be set. See .env.local.example");
}
const client = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$contentful__$5b$external$5d$__$28$contentful$2c$__esm_import$29$__["createClient"])({
    space,
    accessToken
});
async function getProjects() {
    const res = await client.getEntries({
        content_type: "project",
        order: "-fields.createdAt"
    });
    return res.items || [];
}
async function getSkills() {
    const res = await client.getEntries({
        content_type: "skill",
        order: "-fields.rating"
    });
    return res.items || [];
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/pages/index.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "default",
    ()=>Home,
    "getStaticProps",
    ()=>getStaticProps
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$7$2e$3$2e$5_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$18$2e$3$2e$27_react$40$19$2e$1$2e$0_$5f40$emotion$2b$styled_exfc7eucjbfe7sy7vftklwa4n4$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Container$2f$Container$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@mui+material@7.3.5_@emotion+react@11.14.0_@types+react@18.3.27_react@19.1.0__@emotion+styled_exfc7eucjbfe7sy7vftklwa4n4/node_modules/@mui/material/esm/Container/Container.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$7$2e$3$2e$5_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$18$2e$3$2e$27_react$40$19$2e$1$2e$0_$5f40$emotion$2b$styled_exfc7eucjbfe7sy7vftklwa4n4$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@mui+material@7.3.5_@emotion+react@11.14.0_@types+react@18.3.27_react@19.1.0__@emotion+styled_exfc7eucjbfe7sy7vftklwa4n4/node_modules/@mui/material/esm/Typography/Typography.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Header$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Header.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Hero$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Hero.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Skills$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Skills.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$7$2e$3$2e$5_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$18$2e$3$2e$27_react$40$19$2e$1$2e$0_$5f40$emotion$2b$styled_exfc7eucjbfe7sy7vftklwa4n4$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@mui+material@7.3.5_@emotion+react@11.14.0_@types+react@18.3.27_react@19.1.0__@emotion+styled_exfc7eucjbfe7sy7vftklwa4n4/node_modules/@mui/material/esm/Box/Box.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$contentful$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/contentful.js [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$contentful$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$contentful$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
;
;
;
;
function Home({ skills }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$7$2e$3$2e$5_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$18$2e$3$2e$27_react$40$19$2e$1$2e$0_$5f40$emotion$2b$styled_exfc7eucjbfe7sy7vftklwa4n4$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Container$2f$Container$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
        maxWidth: "lg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Header$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/pages/index.js",
                lineNumber: 13,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Hero$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/pages/index.js",
                lineNumber: 14,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$7$2e$3$2e$5_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$18$2e$3$2e$27_react$40$19$2e$1$2e$0_$5f40$emotion$2b$styled_exfc7eucjbfe7sy7vftklwa4n4$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                sx: {
                    display: "flex",
                    gap: 6,
                    alignItems: "flex-start",
                    mt: 2,
                    flexWrap: "wrap"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$7$2e$3$2e$5_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$18$2e$3$2e$27_react$40$19$2e$1$2e$0_$5f40$emotion$2b$styled_exfc7eucjbfe7sy7vftklwa4n4$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                        sx: {
                            flex: "1 1 420px",
                            minWidth: 320
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$7$2e$3$2e$5_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$18$2e$3$2e$27_react$40$19$2e$1$2e$0_$5f40$emotion$2b$styled_exfc7eucjbfe7sy7vftklwa4n4$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                sx: {
                                    color: "text.secondary",
                                    mb: 4
                                },
                                children: "Dedicated to crafting beautiful and functional websites that make ideas come alive through code. Explore my portfolio to see my passion for web development in action."
                            }, void 0, false, {
                                fileName: "[project]/pages/index.js",
                                lineNumber: 26,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Skills$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                items: skills
                            }, void 0, false, {
                                fileName: "[project]/pages/index.js",
                                lineNumber: 31,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/pages/index.js",
                        lineNumber: 25,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$7$2e$3$2e$5_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$18$2e$3$2e$27_react$40$19$2e$1$2e$0_$5f40$emotion$2b$styled_exfc7eucjbfe7sy7vftklwa4n4$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                        sx: {
                            flex: "0 0 320px",
                            display: {
                                xs: "none",
                                md: "block"
                            }
                        }
                    }, void 0, false, {
                        fileName: "[project]/pages/index.js",
                        lineNumber: 33,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/pages/index.js",
                lineNumber: 16,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/pages/index.js",
        lineNumber: 12,
        columnNumber: 5
    }, this);
}
async function getStaticProps() {
    try {
        const items = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$contentful$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["getSkills"])();
        // Map to keep payload small
        const skills = items.map((it)=>({
                sys: it.sys,
                fields: it.fields
            }));
        return {
            props: {
                skills
            },
            revalidate: 60
        };
    } catch (err) {
        console.error("Error fetching skills", err);
        return {
            props: {
                skills: []
            }
        };
    }
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__75ce2f1d._.js.map