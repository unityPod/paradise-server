"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolver = exports.schema = void 0;
const schema_1 = __importDefault(require("./schema"));
exports.schema = schema_1.default;
const query_1 = __importDefault(require("./query"));
const mutation_1 = __importDefault(require("./mutation"));
const resolver = Object.assign(Object.assign({}, query_1.default), mutation_1.default);
exports.resolver = resolver;
