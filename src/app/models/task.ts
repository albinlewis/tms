export class Task {
    _id: String;
    title: String;
    description: String;
    notes: String[];
    createdAt: Date;
    updatedAt: Number;
    time: Number;
    active: Boolean;
    visible: Boolean;
    done: Boolean;
    interval: {
        hasInterval: Boolean,
        value: Number,
        unit: String
    };

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }

}
