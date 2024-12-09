import express from "express";
import fileDb from "../fileDb";
import {IMessageWithDateTimeAndId} from "../types";
const messagesRouter = express.Router();

messagesRouter.get("/", async (req, res) => {
    const messages = await fileDb.getItems();
    console.log(messages);
    res.send(messages);
});

messagesRouter.post("/", async (req, res) => {
    const message: IMessageWithDateTimeAndId = {
        message: req.body.message,
        author: req.body.author
    }

    const saveMessage = await fileDb.addItem(message);
    res.send(saveMessage);
})

export default messagesRouter;