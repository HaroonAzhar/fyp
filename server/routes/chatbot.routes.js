import express from "express";
import chatbotCtrl from "../controllers/chatbot.controller";

const router = express.Router();
router.route("chatbot/webhook").get(chatbotCtrl.getWebhooK);
router.route("chatbot/webhook").post(chatbotCtrl.postWebhooK);

export default router;
