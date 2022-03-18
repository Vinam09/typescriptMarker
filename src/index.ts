/// <reference types="@types/google.maps" />

// import { google } from '@googlemaps/google-maps-services-js';
import { User } from './User';
import { Company } from './Company';
import { CustomMap } from './CustomMap';

const user = new User();
const company = new Company();

const map = new CustomMap('map');
map.addMarker(user);
map.addMarker(company);

console.log(user);
console.log(company);
