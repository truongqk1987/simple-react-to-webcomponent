import { BehaviorSubject } from "rxjs";

const subject = new BehaviorSubject(null);

export const sendData = (data) => subject.next(data);

export const subscribe = (listener) => subject.subscribe(listener);