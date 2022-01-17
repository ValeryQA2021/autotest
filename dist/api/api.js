"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.api = void 0;
const axios_1 = __importDefault(require("axios"));
exports.api = axios_1.default.create({
    baseURL: 'https://labs-api.testing.it-kamasutra.com/api/',
    headers: {
        'FRIEND-TOKEN': '123'
    }
});
//# sourceMappingURL=api.js.map