export class Transaction {
    constructor(
        private id: string,
        private origin: string,
        private destiny: string,
        private tax: Number,
        private date: Date
    ){ }

    public getId(): string {
        return this.id
    }

    public getOrigin(): string {
        return this.origin
    }

    public getDestiny(): string {
        return this.destiny
    }

    public getTax(): Number {
        return this.tax
    }

    public getDate(): Date {
        return this.date
    }
}