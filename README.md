# meeting-poc-un
The Laravel meeting proof of concept

A very basic app with 4 pages:

1. http://localhost/meetings - A list of all meetings
1. http://localhost/meetings/1 - Viewing a meeting, together with it's agenda and minute items
1. http://localhost/meetings/1/edit - Editing a meeting
1. http://localhost/meetings/create - Adding a meeting

## To install - assuming you already have sail setup
- Checkout Repo
- Setup .env file with pusher from example
- sail composer install
- sail artisan key:generate
- sail artisan optimize
- sail npm install
- sail npm run dev
- sail artisan route:clear
- sail artisan config:clear
- sail artisan cache:clear
- sail artisan migrate:fresh --seed


