"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const index_1 = __importDefault(require("./routes/index"));
const app = express_1.default();
// CORS Setup
app.use(cors_1.default());
// Body Parsing
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({
    extended: true
}));
// Routes
app.use('/', index_1.default);
// Server Start
app.listen(process.env.PORT, () => console.log('Listenting on port: ' + process.env.PORT));
