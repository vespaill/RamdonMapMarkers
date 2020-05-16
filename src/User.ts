import faker from "faker";
import { Mappable } from "./CustomMap";

/* Tell TypeScript that we want to make sure that an instance of class User
   satisfies all the properties required by the Mappable interface.*/
export class User implements Mappable {
    name: string;
    location: {
        lat: number;
        lng: number;
    };

    color: string = "red";

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
