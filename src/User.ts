import faker from "faker";

export class User {
    name: string;
    location: {
        lat: number;
        lng: number;
    };

    constructor() {
        this.name = faker.name.firstName();

        /* Location was not yet defined, so lat and lng didn't exist yet. */
        this.location = {
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude())
        };
    }

    markerContent(): string {
        return `User Name: ${this.name}`;
    }
}
