curl --location --request POST \
'https://send.api.mailtrap.io/api/send' \
--header 'Authorization: Bearer <YOUR_API_TOKEN>' \
--header 'Content-Type: application/json' \
--data-raw '{"from":{"email":"hello@demomailtrap.co","name":"Mailtrap Test"},"to":[{"email":"webapp4@outlook.com"}],"subject":"You are awesome!","text":"Congrats for sending test email with Mailtrap!","category":"Integration Test"}'
