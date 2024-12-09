export interface IMessage {
    message: string;
    datetime: string;
}

export type IMessageWithDateTime = Omit<IMessage, "datetime">