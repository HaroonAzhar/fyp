import express from "express";
import chatbotCtrl from "../controllers/chatbot.controller";

const router = express.Router();

router.route("/chatbot").post(chatbotCtrl.index);

export default router;
