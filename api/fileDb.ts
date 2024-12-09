import {promises as fs} from "fs";
import {IMessage, IMessageWithDateTime} from "./types";

const date = new Date();
const datetime = date.toISOString();
const fileName = `./${datetime}.txt`;
const path = "./MessagesFiles";
let data: IMessage [] = [];

const fileDb = {
    async init() {
        try {
            const messageContent = await fs.readFile(path + "/" + fileName);
            data = JSON.parse(messageContent.toString());
        } catch (e) {
            console.error(e);
        }
    },
    async getItems() {
        return data;
    },

    async addItem(item: IMessageWithDateTime) {
        const message = {datetime, ...item};
        data.push(message);
        await this.save();
        return message;
    },
    async save() {
        return fs.writeFile(path + "/" + fileName, JSON.stringify(data));
    }
};

export default fileDb;