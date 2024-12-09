import {promises as fs} from "fs";
import {IMessage, IMessageWithDateTimeAndId} from "./types";
import crypto from "crypto";

const fileName = `./db.json`;
let data: IMessage [] = [];

const fileDb = {
    async init() {
        try {
            const messageContent = await fs.readFile(fileName);
            data = JSON.parse(messageContent.toString());
        } catch (e) {
            console.error(e);
        }
    },
    async getItems() {
        return data;
    },

    async addItem(item: IMessageWithDateTimeAndId) {
        const id = crypto.randomUUID();
        const date = new Date();
        const datetime = date.toISOString();
        const message = {datetime, id, ...item};
        data.push(message);
        await this.save();
        return message;
    },
    async save() {
        return fs.writeFile(fileName, JSON.stringify(data));
    }
};

export default fileDb;