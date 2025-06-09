/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/circulating-supply/route";
exports.ids = ["app/api/circulating-supply/route"];
exports.modules = {

/***/ "(rsc)/./app/abis/ERC20.json":
/*!*****************************!*\
  !*** ./app/abis/ERC20.json ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"abi":[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"CallerIsNotAuthorized","type":"error"},{"inputs":[],"name":"TargetIsZeroAddress","type":"error"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousController","type":"address"},{"indexed":true,"internalType":"address","name":"newController","type":"address"}],"name":"ControlTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"DOMAIN_SEPARATOR","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"PERMIT_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"controller","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"nonces","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"permit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"removeControl","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newController","type":"address"}],"name":"transferControl","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}]}');

/***/ }),

/***/ "(rsc)/./app/api/circulating-supply/route.ts":
/*!*********************************************!*\
  !*** ./app/api/circulating-supply/route.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET)\n/* harmony export */ });\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ethers */ \"(rsc)/./node_modules/ethers/lib.esm/providers/provider-jsonrpc.js\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ethers */ \"(rsc)/./node_modules/ethers/lib.esm/contract/contract.js\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ethers */ \"(rsc)/./node_modules/ethers/lib.esm/utils/units.js\");\n/* harmony import */ var _abis_ERC20_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../abis/ERC20.json */ \"(rsc)/./app/abis/ERC20.json\");\n\n\n//Circulating Supply refers to the # of coins that are circulating in the market and in the general public's hands\nasync function GET(request) {\n    const provider = new ethers__WEBPACK_IMPORTED_MODULE_1__.JsonRpcProvider(\"https://polygon-rpc.com\");\n    const sniContract = new ethers__WEBPACK_IMPORTED_MODULE_2__.Contract(process.env.SNI_ADDRESS, _abis_ERC20_json__WEBPACK_IMPORTED_MODULE_0__.abi, provider);\n    const totalSupply = await sniContract.totalSupply();\n    //Subtract tokens that are\n    // - Staked\n    // - In any of our 3 Safes\n    const supplies = await Promise.all([\n        sniContract.balanceOf(process.env.EXEC_SAFE_ADDRESS),\n        sniContract.balanceOf(process.env.BUILDERS_SAFE_ADDRESS),\n        sniContract.balanceOf(process.env.DEVELOPERS_SAFE_ADDRESS),\n        sniContract.balanceOf(process.env.VESNI_ADDRESS)\n    ]);\n    const circulating = totalSupply - supplies.reduce((acc, val)=>{\n        return acc + val;\n    }, 0n);\n    return new Response(ethers__WEBPACK_IMPORTED_MODULE_3__.formatUnits(circulating, 18));\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2NpcmN1bGF0aW5nLXN1cHBseS9yb3V0ZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFnQztBQUVVO0FBRTFDLGtIQUFrSDtBQUMzRyxlQUFlRSxJQUFJQyxPQUFvQjtJQUM1QyxNQUFNQyxXQUFXLElBQUlKLG1EQUFzQixDQUFDO0lBRTVDLE1BQU1NLGNBQWMsSUFBSU4sNENBQWUsQ0FDckNRLFFBQVFDLEdBQUcsQ0FBQ0MsV0FBVyxFQUN2QlQsaURBQVMsRUFDVEc7SUFHRixNQUFNUSxjQUFzQixNQUFNTixZQUFZTSxXQUFXO0lBRXpELDBCQUEwQjtJQUMxQixXQUFXO0lBQ1gsMEJBQTBCO0lBQzFCLE1BQU1DLFdBQXFCLE1BQU1DLFFBQVFDLEdBQUcsQ0FBQztRQUMzQ1QsWUFBWVUsU0FBUyxDQUFDUixRQUFRQyxHQUFHLENBQUNRLGlCQUFpQjtRQUNuRFgsWUFBWVUsU0FBUyxDQUFDUixRQUFRQyxHQUFHLENBQUNTLHFCQUFxQjtRQUN2RFosWUFBWVUsU0FBUyxDQUFDUixRQUFRQyxHQUFHLENBQUNVLHVCQUF1QjtRQUN6RGIsWUFBWVUsU0FBUyxDQUFDUixRQUFRQyxHQUFHLENBQUNXLGFBQWE7S0FDaEQ7SUFFRCxNQUFNQyxjQUNKVCxjQUNBQyxTQUFTUyxNQUFNLENBQUMsQ0FBQ0MsS0FBS0M7UUFDcEIsT0FBT0QsTUFBTUM7SUFDZixHQUFHLEVBQUU7SUFFUCxPQUFPLElBQUlDLFNBQVN6QiwrQ0FBa0IsQ0FBQ3FCLGFBQWE7QUFDdEQiLCJzb3VyY2VzIjpbIkM6XFxkZXZcXGNvZGVcXEZvdW5kYW5jZVxcc25pLXN1cHBseS1hcGlcXGFwcFxcYXBpXFxjaXJjdWxhdGluZy1zdXBwbHlcXHJvdXRlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGV0aGVycyB9IGZyb20gXCJldGhlcnNcIjtcbmltcG9ydCB7IE5leHRSZXF1ZXN0LCBOZXh0UmVzcG9uc2UgfSBmcm9tIFwibmV4dC9zZXJ2ZXJcIjtcbmltcG9ydCBFUkMyMCBmcm9tIFwiLi4vLi4vYWJpcy9FUkMyMC5qc29uXCI7XG5cbi8vQ2lyY3VsYXRpbmcgU3VwcGx5IHJlZmVycyB0byB0aGUgIyBvZiBjb2lucyB0aGF0IGFyZSBjaXJjdWxhdGluZyBpbiB0aGUgbWFya2V0IGFuZCBpbiB0aGUgZ2VuZXJhbCBwdWJsaWMncyBoYW5kc1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIEdFVChyZXF1ZXN0OiBOZXh0UmVxdWVzdCkge1xuICBjb25zdCBwcm92aWRlciA9IG5ldyBldGhlcnMuSnNvblJwY1Byb3ZpZGVyKFwiaHR0cHM6Ly9wb2x5Z29uLXJwYy5jb21cIik7XG5cbiAgY29uc3Qgc25pQ29udHJhY3QgPSBuZXcgZXRoZXJzLkNvbnRyYWN0KFxuICAgIHByb2Nlc3MuZW52LlNOSV9BRERSRVNTIGFzIHN0cmluZyxcbiAgICBFUkMyMC5hYmksXG4gICAgcHJvdmlkZXIsXG4gICk7XG5cbiAgY29uc3QgdG90YWxTdXBwbHk6IGJpZ2ludCA9IGF3YWl0IHNuaUNvbnRyYWN0LnRvdGFsU3VwcGx5KCk7XG5cbiAgLy9TdWJ0cmFjdCB0b2tlbnMgdGhhdCBhcmVcbiAgLy8gLSBTdGFrZWRcbiAgLy8gLSBJbiBhbnkgb2Ygb3VyIDMgU2FmZXNcbiAgY29uc3Qgc3VwcGxpZXM6IGJpZ2ludFtdID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgIHNuaUNvbnRyYWN0LmJhbGFuY2VPZihwcm9jZXNzLmVudi5FWEVDX1NBRkVfQUREUkVTUyksXG4gICAgc25pQ29udHJhY3QuYmFsYW5jZU9mKHByb2Nlc3MuZW52LkJVSUxERVJTX1NBRkVfQUREUkVTUyksXG4gICAgc25pQ29udHJhY3QuYmFsYW5jZU9mKHByb2Nlc3MuZW52LkRFVkVMT1BFUlNfU0FGRV9BRERSRVNTKSxcbiAgICBzbmlDb250cmFjdC5iYWxhbmNlT2YocHJvY2Vzcy5lbnYuVkVTTklfQUREUkVTUyksXG4gIF0pO1xuXG4gIGNvbnN0IGNpcmN1bGF0aW5nID1cbiAgICB0b3RhbFN1cHBseSAtXG4gICAgc3VwcGxpZXMucmVkdWNlKChhY2MsIHZhbCkgPT4ge1xuICAgICAgcmV0dXJuIGFjYyArIHZhbDtcbiAgICB9LCAwbik7XG5cbiAgcmV0dXJuIG5ldyBSZXNwb25zZShldGhlcnMuZm9ybWF0VW5pdHMoY2lyY3VsYXRpbmcsIDE4KSk7XG59XG4iXSwibmFtZXMiOlsiZXRoZXJzIiwiRVJDMjAiLCJHRVQiLCJyZXF1ZXN0IiwicHJvdmlkZXIiLCJKc29uUnBjUHJvdmlkZXIiLCJzbmlDb250cmFjdCIsIkNvbnRyYWN0IiwicHJvY2VzcyIsImVudiIsIlNOSV9BRERSRVNTIiwiYWJpIiwidG90YWxTdXBwbHkiLCJzdXBwbGllcyIsIlByb21pc2UiLCJhbGwiLCJiYWxhbmNlT2YiLCJFWEVDX1NBRkVfQUREUkVTUyIsIkJVSUxERVJTX1NBRkVfQUREUkVTUyIsIkRFVkVMT1BFUlNfU0FGRV9BRERSRVNTIiwiVkVTTklfQUREUkVTUyIsImNpcmN1bGF0aW5nIiwicmVkdWNlIiwiYWNjIiwidmFsIiwiUmVzcG9uc2UiLCJmb3JtYXRVbml0cyJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./app/api/circulating-supply/route.ts\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fcirculating-supply%2Froute&page=%2Fapi%2Fcirculating-supply%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fcirculating-supply%2Froute.ts&appDir=C%3A%5Cdev%5Ccode%5CFoundance%5Csni-supply-api%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5Cdev%5Ccode%5CFoundance%5Csni-supply-api&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fcirculating-supply%2Froute&page=%2Fapi%2Fcirculating-supply%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fcirculating-supply%2Froute.ts&appDir=C%3A%5Cdev%5Ccode%5CFoundance%5Csni-supply-api%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5Cdev%5Ccode%5CFoundance%5Csni-supply-api&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_dev_code_Foundance_sni_supply_api_app_api_circulating_supply_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/circulating-supply/route.ts */ \"(rsc)/./app/api/circulating-supply/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/circulating-supply/route\",\n        pathname: \"/api/circulating-supply\",\n        filename: \"route\",\n        bundlePath: \"app/api/circulating-supply/route\"\n    },\n    resolvedPagePath: \"C:\\\\dev\\\\code\\\\Foundance\\\\sni-supply-api\\\\app\\\\api\\\\circulating-supply\\\\route.ts\",\n    nextConfigOutput,\n    userland: C_dev_code_Foundance_sni_supply_api_app_api_circulating_supply_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZjaXJjdWxhdGluZy1zdXBwbHklMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRmNpcmN1bGF0aW5nLXN1cHBseSUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRmNpcmN1bGF0aW5nLXN1cHBseSUyRnJvdXRlLnRzJmFwcERpcj1DJTNBJTVDZGV2JTVDY29kZSU1Q0ZvdW5kYW5jZSU1Q3NuaS1zdXBwbHktYXBpJTVDYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj1DJTNBJTVDZGV2JTVDY29kZSU1Q0ZvdW5kYW5jZSU1Q3NuaS1zdXBwbHktYXBpJmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUErRjtBQUN2QztBQUNxQjtBQUNnQztBQUM3RztBQUNBO0FBQ0E7QUFDQSx3QkFBd0IseUdBQW1CO0FBQzNDO0FBQ0EsY0FBYyxrRUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLHNEQUFzRDtBQUM5RDtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUMwRjs7QUFFMUYiLCJzb3VyY2VzIjpbIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiQzpcXFxcZGV2XFxcXGNvZGVcXFxcRm91bmRhbmNlXFxcXHNuaS1zdXBwbHktYXBpXFxcXGFwcFxcXFxhcGlcXFxcY2lyY3VsYXRpbmctc3VwcGx5XFxcXHJvdXRlLnRzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9jaXJjdWxhdGluZy1zdXBwbHkvcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9jaXJjdWxhdGluZy1zdXBwbHlcIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL2NpcmN1bGF0aW5nLXN1cHBseS9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIkM6XFxcXGRldlxcXFxjb2RlXFxcXEZvdW5kYW5jZVxcXFxzbmktc3VwcGx5LWFwaVxcXFxhcHBcXFxcYXBpXFxcXGNpcmN1bGF0aW5nLXN1cHBseVxcXFxyb3V0ZS50c1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHdvcmtBc3luY1N0b3JhZ2UsIHdvcmtVbml0QXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcyB9ID0gcm91dGVNb2R1bGU7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHdvcmtBc3luY1N0b3JhZ2UsXG4gICAgICAgIHdvcmtVbml0QXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fcirculating-supply%2Froute&page=%2Fapi%2Fcirculating-supply%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fcirculating-supply%2Froute.ts&appDir=C%3A%5Cdev%5Ccode%5CFoundance%5Csni-supply-api%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5Cdev%5Ccode%5CFoundance%5Csni-supply-api&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(ssr)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "../app-render/work-async-storage.external":
/*!*****************************************************************************!*\
  !*** external "next/dist/server/app-render/work-async-storage.external.js" ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-async-storage.external.js");

/***/ }),

/***/ "./work-unit-async-storage.external":
/*!**********************************************************************************!*\
  !*** external "next/dist/server/app-render/work-unit-async-storage.external.js" ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-unit-async-storage.external.js");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("crypto");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("https");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "node:crypto":
/*!******************************!*\
  !*** external "node:crypto" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("node:crypto");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("zlib");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/ethers","vendor-chunks/next","vendor-chunks/@noble","vendor-chunks/@adraffy"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fcirculating-supply%2Froute&page=%2Fapi%2Fcirculating-supply%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fcirculating-supply%2Froute.ts&appDir=C%3A%5Cdev%5Ccode%5CFoundance%5Csni-supply-api%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5Cdev%5Ccode%5CFoundance%5Csni-supply-api&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();