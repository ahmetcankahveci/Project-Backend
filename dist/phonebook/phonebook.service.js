"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PhonebookService = void 0;
const common_1 = require("@nestjs/common");
let PhonebookService = class PhonebookService {
    constructor() {
        this.phonebook = [];
    }
    getAll() {
        return this.phonebook;
    }
    getById(id) {
        return this.phonebook.find((record) => record.id === id);
    }
    create(record) {
        this.phonebook.push(record);
        return record;
    }
    update(id, updatedRecord) {
        const index = this.phonebook.findIndex((record) => record.id === id);
        if (index !== -1) {
            this.phonebook[index] = updatedRecord;
            return updatedRecord;
        }
        return null;
    }
    delete(id) {
        this.phonebook = this.phonebook.filter((record) => record.id !== id);
    }
};
exports.PhonebookService = PhonebookService;
exports.PhonebookService = PhonebookService = __decorate([
    (0, common_1.Injectable)()
], PhonebookService);
//# sourceMappingURL=phonebook.service.js.map