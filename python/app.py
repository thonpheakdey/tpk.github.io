import requests

# Replace with your actual bot token
bot_token = "7474957697:AAGtc8MO3BAZZpv2Mc118CN-kECpU-Bh0Yc"

# Delete the webhook
delete_webhook_url = f"https://api.telegram.org/bot{bot_token}/deleteWebhook"
response = requests.get(delete_webhook_url)
print(response.json())

# Get updates
get_updates_url = f"https://api.telegram.org/bot{bot_token}/getUpdates"
response = requests.get(get_updates_url)
print(response.json())
