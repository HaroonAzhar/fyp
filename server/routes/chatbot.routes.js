import express from "express";
import chatbotCtrl from "../controllers/chatbot.controller";

const router = express.Router();
router.route("/chatbot/webhook").get(chatbotCtrl.getWebhook);
router.route("/chatbot/webhook").post(chatbotCtrl.postWebhook);

export default router;
