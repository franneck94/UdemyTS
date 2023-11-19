interface AppointmentInterface {
    startTime: Date;
    endTime: Date;
    description: string;

    printAppointment(): void;
}

class Appointment implements AppointmentInterface {
    private _startTime: Date;
    private _endTime: Date;
    private _description: string;

    constructor(
        startTimeInput: Date,
        endTimeInput: Date,
        descriptionInput: string,
    ) {
        this._startTime = startTimeInput;
        this._endTime = endTimeInput;
        this._description = descriptionInput;
    }

    get startTime(): Date {
        return this._startTime;
    }

    get endTime(): Date {
        return this._endTime;
    }

    get description(): string {
        return this._description;
    }

    printAppointment() {
        console.log(this.startTime, this.endTime, this.description);
    }
}
