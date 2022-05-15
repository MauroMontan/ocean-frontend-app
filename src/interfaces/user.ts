


export interface User {
    name: string;
    username: string;
    birth?: Date;
    adress?: string;
    prizes: number;
    amount: number;
    email: string;
}




export interface Auth {
    email: string,
    password: string;
    name: string;
    phone_number?:number | null;
    username: string;
    birth?: Date | null;
    adress?: string;
    prizes?: number;
    amount?: number;
}
