export interface IMessage {
    message: string;
    author: string;
    id: string;
    datetime: string;
}

export type IMessageWithDateTimeAndId = Omit<IMessage, "datetime", "id">