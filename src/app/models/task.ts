// model for frontend

export class Task {

    title: string;          // title
    description: string;    // info
    createdAt: Date;        // sortierung
    updatedAt: Date;        // sortierung
    time: number;           // summiert zeit auf
    active: boolean;        // tracked
    visible: boolean;       // für listen darstellung
    done: boolean;          // für exporte
    interval:
    {
        hasInterval: boolean,
        value: number,
        unit: string 
    };                      // automatisch task neu-generierung

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }

}
