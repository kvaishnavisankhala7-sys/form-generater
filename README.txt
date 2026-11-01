# FormFlow AI starter project

## Files
- `index.html`: Form builder page
- `prompts.html`: separate searchable prompt library with 30 templates
- `style.css`: responsive teal/white design
- `script.js`: prompt library interactions and local preview/validation

## Run it
Open this folder in VS Code. Use Live Server to open `index.html`.

## Important AI note
The current starter creates a local preview using simple keyword matching; it is NOT genuine AI generation. It does not send prompts to Gemini. To enable real AI, add a Node.js/Express backend that calls Gemini using a server-side `.env` API key, then have the frontend send the prompt to your backend endpoint. Never put the API key in browser JavaScript.
