export interface Company {
    name: string;
    id: number;
}

export interface User {
    id: number;
    name: string;
    username: string;
    company: Company;
}