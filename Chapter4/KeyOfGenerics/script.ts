interface UserEvent {
    name: string;
    timestamp: number;
}

interface ServerEvent {
    errorCode: number;
    timestamp: number;
}

interface Events {
    UserEvent: UserEvent;
    ServerEvent: ServerEvent;
}

function mapEvent<EventType extends keyof Events>(
    key: EventType,
    data: Events[EventType],
) {
    console.log(key, data);
}

const e1: UserEvent = { name: 'user1', timestamp: 0 };

mapEvent('UserEvent', e1);

const e2: ServerEvent = { errorCode: 404, timestamp: 1 };

mapEvent('ServerEvent', e2);

mapEvent('UserEvent', { name: 'user2', timestamp: 2 });
