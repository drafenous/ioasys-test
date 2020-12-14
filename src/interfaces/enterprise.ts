export type Enterprises = Enterprise[];

export interface Enterprise {
    id: number;
    enterprise_name: string;
    enterprise_type?: Enterprise_type;
    email_enterprise?: string;
    phone?: string;
    description?: string;
    photo?: string;
    own_enterprise: boolean
    own_shares?: number
    share_price?: number
    city?: string;
    country?: string;
    facebook?: string;
    linkedin?: string;
    twitter?: string
    shares?: number;
    value?: number;
}

export interface Enterprise_type {
    id: number;
    enterprise_type_name: string;
}