export interface Avalanche {
    id: string;
    externalId?: string;
    date?: Date;
    latitude?: number;
    longitude?: number;
    elevation?: number;
    aspect?: string;
    type?: string;
    cause?: string;
    depth?: number;
    width?: number;
}
