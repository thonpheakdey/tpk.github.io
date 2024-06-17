import telebot
BOT_TOKEN = '7474957697:AAGtc8MO3BAZZpv2Mc118CN-kECpU-Bh0Yc'
bot = telebot.TeleBot(BOT_TOKEN)

@bot.message_handler(commands=['start','hello'])
def send_welcome(message):
    bot.reply_to(message,"hoedy, how are you")

bot.infinity_polling()
