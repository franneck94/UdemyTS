interface BasicAddress {
    houseNumber: string;
    street: string;
    city: string;
    postalCode: string;
}

interface AddressWithCountry extends BasicAddress {
    country: string;
}
