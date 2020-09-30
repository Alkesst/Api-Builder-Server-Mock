"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppRoutes = void 0;
const PingController_1 = require("./controller/PingController");
/**
 * All application routes.
 */
exports.AppRoutes = [
    {
        path: "/ping",
        method: "get",
        action: PingController_1.pingController
    }
];
//# sourceMappingURL=routes.js.map