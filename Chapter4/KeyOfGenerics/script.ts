interface UserEvent {
    name: string;
    timestamp: number;
}

interface ServerEvent {
    eventCode: number;
    timestamp: number;
}

interface Events {
    UserEvent: UserEvent;
    ServerEvent: ServerEvent;
}

function logEvent<EventType extends keyof Events>(
    key: EventType,
    event: Events[EventType],
) {
    console.log(event);
}

const e1: UserEvent = { name: 'jan', timestamp: 0 };
const e2: ServerEvent = { eventCode: 404, timestamp: 1 };

logEvent('UserEvent', e1);

logEvent('ServerEvent', e2);

logEvent('ServerEvent', { eventCode: 400, timestamp: 2 });
