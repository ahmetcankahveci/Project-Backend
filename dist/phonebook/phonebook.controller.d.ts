import { PhonebookService, PhonebookRecord } from './phonebook.service';
export declare class PhonebookController {
    private readonly phonebookService;
    constructor(phonebookService: PhonebookService);
    getAll(): PhonebookRecord[];
    getById(id: number): PhonebookRecord;
    create(record: PhonebookRecord): PhonebookRecord;
    update(id: number, updatedRecord: PhonebookRecord): PhonebookRecord;
    delete(id: number): void;
}
