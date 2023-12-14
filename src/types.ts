export type Event = {
    details: string;
    edit: boolean;
};

export interface Day {
    id: number
    abbvTitle: string
    fullTitle: string
    events: Array<Event>
};
