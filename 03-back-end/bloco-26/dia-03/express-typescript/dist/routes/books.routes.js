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
const express_1 = require("express");
const books_controllers_1 = __importDefault(require("../controllers/books.controllers"));
const router = (0, express_1.Router)();
const booksController = new books_controllers_1.default();
router.get('/books', (req, res) => __awaiter(void 0, void 0, void 0, function* () { return yield booksController.getAll(req, res); }));
router.get('/books/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () { return yield booksController.getById(req, res); }));
exports.default = router;
