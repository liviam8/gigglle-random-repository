export class Plant{
    private absorb: number;
    private waterLevel: number;
    private threshold: number;
    color: string;
    type: string;

    constructor(color: string, absorb: number, threshold: number, type: string) {
        this.color = color;
        this.absorb = absorb;
        this.threshold = threshold;
        this.waterLevel = 0;
        this.type = type
    }

    water(amount:number): void{
        this.waterLevel = amount * this.absorb;
    }

    isThirsty(): boolean {
        return this.waterLevel < this.threshold;
    }

    toString(): string{
        return `The ${this.color} ${this.type} ${this.isThirsty() ? 'needs' : 'doesnt need'} water`
    }
}