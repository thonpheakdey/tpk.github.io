import requests

# Replace with your actual bot token
bot_token = "5022182217:AAES4_bpZylodvvY-sOQYx_Qe7e1g6sl4eI"

# Delete the webhook
delete_webhook_url = f"https://api.telegram.org/bot{bot_token}/deleteWebhook"
response = requests.get(delete_webhook_url)
print(response.json())

# Get updates
get_updates_url = f"https://api.telegram.org/bot{bot_token}/getUpdates"
response = requests.get(get_updates_url)
print(response.json())
