"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const generator_1 = require("../../data-generation/generator");
const dataset_01_1 = require("../../data-generation/data-sets/dataset-01");
const api_1 = require("../../api/api");
describe('users-crud', () => {
    beforeAll(() => __awaiter(void 0, void 0, void 0, function* () {
        yield (0, generator_1.generate)(dataset_01_1.data);
    }));
    describe('get', () => {
        it('paging works', () => __awaiter(void 0, void 0, void 0, function* () {
            let res = yield api_1.api.get('users?pageSize=1&page=1');
            expect(res.data.items.length).toBe(1);
            expect(res.data.items[0].id).toBe(2);
            res = yield api_1.api.get('users?pageSize=1&page=2');
            expect(res.data.items.length).toBe(1);
            expect(res.data.items[0].id).toBe(1);
        }));
    });
    describe('create', () => {
        //await api.post('users', )
    });
    describe('update', () => {
    });
});
//# sourceMappingURL=crud.test.js.map