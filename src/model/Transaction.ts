export class Transaction {
    constructor(
        private id: string,
        private origin: string,
        private value: Number,
        private destiny: string,
        private date: Date,
        private tax?: Number,
    ){ }

    public getId(): string {
        return this.id
    }

    public getOrigin(): string {
        return this.origin
    }

    public getValue(): Number {
        return this.value
    }

    public getDestiny(): string {
        return this.destiny
    }

    public getTax(): Number | undefined {
        return this.tax
    }

    public getDate(): Date {
        return this.date
    }
}