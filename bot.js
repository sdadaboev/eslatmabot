import TelegramBot from 'node-telegram-bot-api';
import express from 'express';
import 'dotenv/config';

const token = process.env.token;
if (!token) {
  throw new Error('Missing Telegram bot token (env token)');
}

// Render provides PORT + RENDER_EXTERNAL_URL. When those exist we run in webhook mode.
const webhookUrl =
  process.env.WEBHOOK_URL || process.env.RENDER_EXTERNAL_URL || null;
const useWebhook = Boolean(process.env.PORT && webhookUrl);

// In webhook mode polling must be disabled to avoid 409 conflicts.
const bot = new TelegramBot(token, { polling: !useWebhook });

/**
 * Attach webhook endpoint to the provided express app when running on Render.
 * In local dev (no PORT/WEBHOOK_URL) this is a no-op and polling stays enabled.
 */
export function attachWebhook(app) {
  if (!useWebhook) return;

  const route = `/bot${token}`;
  // Ensure body is parsed as JSON for Telegram updates
  app.use(express.json());

  bot.setWebHook(`${webhookUrl}${route}`);
  app.post(route, (req, res) => {
    bot.processUpdate(req.body);
    res.sendStatus(200);
  });
}

export default bot;