export interface PhonebookRecord {
    id: number;
    name: string;
    surname: string;
    phoneNumber: string;
}
export declare class PhonebookService {
    private phonebook;
    getAll(): PhonebookRecord[];
    getById(id: number): PhonebookRecord;
    create(record: PhonebookRecord): PhonebookRecord;
    update(id: number, updatedRecord: PhonebookRecord): PhonebookRecord;
    delete(id: number): void;
}
