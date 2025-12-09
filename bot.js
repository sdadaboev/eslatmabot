import telegram from 'node-telegram-bot-api';
import 'dotenv/config';

const token = process.env.token;

const bot = new telegram(token, { polling: true });

export default bot;