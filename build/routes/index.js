"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
router.get('/', (req, res) => {
    res.json({
        ts: 'typescript!',
        blue: 'green'
    });
    let green = 44;
    green = 34;
    const arr = [];
    arr.push(3);
    let obj = {
        cat: 'blue',
        dog: 33,
        meow: '33'
    };
    console.log(obj, arr);
});
exports.default = router;
