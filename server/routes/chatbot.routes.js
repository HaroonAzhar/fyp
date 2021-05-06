import express from "express";
import chatbotCtrl from "../controllers/chatbot.controller";

const router = express.Router();

router.route("/chatbot/webhook").post(chatbotCtrl.postWebhooK);
router.route("/chatbot/webhook").get(chatbotCtrl.getWebhooK);

export default router;
