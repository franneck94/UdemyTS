abstract class AppointmentABC {
    protected startTime: Date;
    protected endTime: Date;
    protected description: string;

    constructor(
        startTimeInput: Date,
        endTimeInput: Date,
        descriptionInput: string,
    ) {
        this.startTime = startTimeInput;
        this.endTime = endTimeInput;
        this.description = descriptionInput;
    }

    abstract printEntry(): void;
}

class Appointment extends AppointmentABC {
    constructor(
        startTimeInput: Date,
        endTimeInput: Date,
        descriptionInput: string,
    ) {
        super(startTimeInput, endTimeInput, descriptionInput);
    }

    printEntry() {
        console.log(this.startTime, this.endTime, this.description);
    }
}
