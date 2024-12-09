import express from "express";
import fileDb from "../fileDb";
import {IMessageWithDateTimeAndId} from "../types";
const messagesRouter = express.Router();

messagesRouter.get("/", async (req, res) => {
    const messages = await fileDb.getItems();
    const dateQuery = req.query.datetime as string;
    if(dateQuery) {
        res.send({messages});
        console.log(dateQuery);
    } else {
        res.send(messages)
    }
});

messagesRouter.post("/", async (req, res) => {
    const message: IMessageWithDateTimeAndId = {
        message: req.body.message,
        author: req.body.author
    }

    if (message.message.trim().length === 0 || message.author.trim().length === 0) {
        res.status(400).send({error: "Author and message must be present in the request."});
    } else {
        const saveMessage: IMessageWithDateTimeAndId = await fileDb.addItem(message);
        res.status(200).send(saveMessage);
    }
})

export default messagesRouter;