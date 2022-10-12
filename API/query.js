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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const query = {
    items: (input, context) => __awaiter(void 0, void 0, void 0, function* () {
        return axios_1.default.get("https://fakestoreapi.com/products/").then(response => {
            return response.data.map((item) => ({ id: item.id, title: item.title, price: item.price, description: item.description, category: item.category, image: item.image }));
        });
    }),
    men: (input, context) => __awaiter(void 0, void 0, void 0, function* () {
        return axios_1.default.get("https://fakestoreapi.com/products/").then(response => {
            const menData = response.data.filter((item) => item.category === "men's clothing");
            return input.limit ? menData.slice(0, input.limit) : menData;
        });
    }),
    women: (input, context) => __awaiter(void 0, void 0, void 0, function* () {
        return axios_1.default.get("https://fakestoreapi.com/products/").then(response => {
            const womenData = response.data.filter((item) => item.category === "women's clothing");
            return input.limit ? womenData.slice(0, input.limit) : womenData;
        });
    }),
    electronics: (input, context) => __awaiter(void 0, void 0, void 0, function* () {
        return axios_1.default.get("https://fakestoreapi.com/products/").then(response => {
            const electronicsData = response.data.filter((item) => item.category === "electronics");
            return input.limit ? electronicsData.slice(0, input.limit) : electronicsData;
        });
    }),
    jewelery: (input, context) => __awaiter(void 0, void 0, void 0, function* () {
        return axios_1.default.get("https://fakestoreapi.com/products/").then(response => {
            const jeweleryData = response.data.filter((item) => item.category === "jewelery");
            return input.limit ? jeweleryData.slice(0, input.limit) : jeweleryData;
        });
    })
};
exports.default = query;
