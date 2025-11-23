module.exports = [
"[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("react/jsx-dev-runtime", () => require("react/jsx-dev-runtime"));

module.exports = mod;
}),
"[project]/src/theme.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$7$2e$3$2e$5_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$18$2e$3$2e$27_react$40$19$2e$1$2e$0_$5f40$emotion$2b$styled_exfc7eucjbfe7sy7vftklwa4n4$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$createTheme$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__createTheme$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@mui+material@7.3.5_@emotion+react@11.14.0_@types+react@18.3.27_react@19.1.0__@emotion+styled_exfc7eucjbfe7sy7vftklwa4n4/node_modules/@mui/material/esm/styles/createTheme.js [ssr] (ecmascript) <export default as createTheme>");
;
const theme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$7$2e$3$2e$5_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$18$2e$3$2e$27_react$40$19$2e$1$2e$0_$5f40$emotion$2b$styled_exfc7eucjbfe7sy7vftklwa4n4$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$createTheme$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__createTheme$3e$__["createTheme"])({
    palette: {
        mode: "light",
        primary: {
            main: "#5c3d2e"
        },
        secondary: {
            main: "#f2c8a0"
        },
        text: {
            primary: "#2b2b2b",
            secondary: "#6b6b6b"
        },
        background: {
            default: "#fff8f2",
            paper: "#fff"
        }
    },
    shape: {
        borderRadius: 12
    },
    typography: {
        fontFamily: [
            "Poppins",
            "Inter",
            "Helvetica",
            "Arial",
            "sans-serif"
        ].join(","),
        h1: {
            fontWeight: 800
        },
        h2: {
            fontWeight: 700
        },
        h3: {
            fontWeight: 700
        }
    },
    components: {
        MuiButton: {
            defaultProps: {
                disableElevation: true
            },
            styleOverrides: {
                root: {
                    textTransform: "none",
                    borderRadius: 999
                }
            }
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    borderRadius: 16,
                    boxShadow: "0 6px 18px rgba(40,30,20,0.06)"
                }
            }
        }
    }
});
const __TURBOPACK__default__export__ = theme;
}),
"[project]/pages/_app.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MyApp
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$head$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/head.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$7$2e$3$2e$5_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$18$2e$3$2e$27_react$40$19$2e$1$2e$0_$5f40$emotion$2b$styled_exfc7eucjbfe7sy7vftklwa4n4$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$ThemeProvider$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ThemeProvider$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@mui+material@7.3.5_@emotion+react@11.14.0_@types+react@18.3.27_react@19.1.0__@emotion+styled_exfc7eucjbfe7sy7vftklwa4n4/node_modules/@mui/material/esm/styles/ThemeProvider.js [ssr] (ecmascript) <export default as ThemeProvider>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$7$2e$3$2e$5_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$18$2e$3$2e$27_react$40$19$2e$1$2e$0_$5f40$emotion$2b$styled_exfc7eucjbfe7sy7vftklwa4n4$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$CssBaseline$2f$CssBaseline$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@mui+material@7.3.5_@emotion+react@11.14.0_@types+react@18.3.27_react@19.1.0__@emotion+styled_exfc7eucjbfe7sy7vftklwa4n4/node_modules/@mui/material/esm/CssBaseline/CssBaseline.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$theme$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/theme.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$7$2e$3$2e$5_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$18$2e$3$2e$27_react$40$19$2e$1$2e$0_$5f40$emotion$2b$styled_exfc7eucjbfe7sy7vftklwa4n4$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@mui+material@7.3.5_@emotion+react@11.14.0_@types+react@18.3.27_react@19.1.0__@emotion+styled_exfc7eucjbfe7sy7vftklwa4n4/node_modules/@mui/material/esm/Box/Box.js [ssr] (ecmascript)");
;
;
;
;
;
;
;
function MyApp({ Component, pageProps }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$head$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("meta", {
                        name: "viewport",
                        content: "initial-scale=1, width=device-width"
                    }, void 0, false, {
                        fileName: "[project]/pages/_app.js",
                        lineNumber: 12,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("title", {
                        children: "Krishna Pradhan — Portfolio"
                    }, void 0, false, {
                        fileName: "[project]/pages/_app.js",
                        lineNumber: 13,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("link", {
                        rel: "preconnect",
                        href: "https://fonts.googleapis.com"
                    }, void 0, false, {
                        fileName: "[project]/pages/_app.js",
                        lineNumber: 14,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("link", {
                        rel: "preconnect",
                        href: "https://fonts.gstatic.com",
                        crossOrigin: ""
                    }, void 0, false, {
                        fileName: "[project]/pages/_app.js",
                        lineNumber: 15,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("link", {
                        href: "https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;800&family=Inter:wght@400;600&display=swap",
                        rel: "stylesheet"
                    }, void 0, false, {
                        fileName: "[project]/pages/_app.js",
                        lineNumber: 16,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/pages/_app.js",
                lineNumber: 11,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$7$2e$3$2e$5_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$18$2e$3$2e$27_react$40$19$2e$1$2e$0_$5f40$emotion$2b$styled_exfc7eucjbfe7sy7vftklwa4n4$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$ThemeProvider$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ThemeProvider$3e$__["ThemeProvider"], {
                theme: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$theme$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"],
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$7$2e$3$2e$5_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$18$2e$3$2e$27_react$40$19$2e$1$2e$0_$5f40$emotion$2b$styled_exfc7eucjbfe7sy7vftklwa4n4$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$CssBaseline$2f$CssBaseline$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/pages/_app.js",
                        lineNumber: 19,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$7$2e$3$2e$5_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$18$2e$3$2e$27_react$40$19$2e$1$2e$0_$5f40$emotion$2b$styled_exfc7eucjbfe7sy7vftklwa4n4$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                        sx: {
                            minHeight: '100vh',
                            bgcolor: 'background.default',
                            py: 6
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(Component, {
                            ...pageProps
                        }, void 0, false, {
                            fileName: "[project]/pages/_app.js",
                            lineNumber: 21,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/pages/_app.js",
                        lineNumber: 20,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/pages/_app.js",
                lineNumber: 18,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__37695260._.js.map