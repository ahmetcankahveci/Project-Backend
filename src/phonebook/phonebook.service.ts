import { Injectable } from '@nestjs/common';

export interface PhonebookRecord {
  // 'export' ekliyoruz
  id: number;
  name: string;
  surname: string;
  phoneNumber: string;
}

@Injectable()
export class PhonebookService {
  private phonebook: PhonebookRecord[] = [];

  getAll(): PhonebookRecord[] {
    return this.phonebook;
  }

  getById(id: number): PhonebookRecord {
    return this.phonebook.find((record) => record.id === id);
  }

  create(record: PhonebookRecord): PhonebookRecord {
    this.phonebook.push(record);
    return record;
  }

  update(id: number, updatedRecord: PhonebookRecord): PhonebookRecord {
    const index = this.phonebook.findIndex((record) => record.id === id);
    if (index !== -1) {
      this.phonebook[index] = updatedRecord;
      return updatedRecord;
    }
    return null;
  }

  delete(id: number): void {
    this.phonebook = this.phonebook.filter((record) => record.id !== id);
  }
}
