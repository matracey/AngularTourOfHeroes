/*
 * in-memory-data.service.ts
 * 
 * Author:  Martin Tracey
 * Created: 12.11.2016
 * 
 * Service that will mock a Web API using the Angular In Memory DB Service.
 * 
 * See https://angular.io/docs/ts/latest/tutorial to learn more about Angular 2.
 */

import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        let heroes = [
            { id: 11, name: 'Mr. Nice' },
            { id: 12, name: 'Narco' },
            { id: 13, name: 'Bombasto' },
            { id: 14, name: 'Celeritas' },
            { id: 15, name: 'Magneta' },
            { id: 16, name: 'RubberMan' },
            { id: 17, name: 'Dynama' },
            { id: 18, name: 'Dr IQ' },
            { id: 19, name: 'Magma' },
            { id: 20, name: 'Tornado' }
        ];

        return {heroes};
    }
}