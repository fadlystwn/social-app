export interface Company {
    name: string;
    id: number;
}

export interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
    website: string;
    company: Company;
}