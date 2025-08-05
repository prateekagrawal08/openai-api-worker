
# ☁️ Cloudflare Worker + OpenAI API Starter

A simple template to deploy a serverless OpenAI-powered API using [Cloudflare Workers](https://developers.cloudflare.com/workers/).

---

## 🚀 Getting Started

### 1. **Clone and Install**

```bash
git clone https://github.com/yourusername/openai-api-worker.git
cd openai-api-worker
npm install
```

---

### 2. **Add Your OpenAI API Key (Secret)**

Store your API key securely using Wrangler:

```bash
npx wrangler secret put OPENAI_API_KEY
```
> When prompted, paste your OpenAI API key (starts with `sk-...`).
> **Never commit your API key!**

---

### 3. **Run Locally for Development**

```bash
npx wrangler dev
```
- Open [http://localhost:8787/](http://localhost:8787/) to test your Worker endpoints.

---

### 4. **Deploy to Cloudflare**

```bash
npx wrangler deploy
```
- Your API will be live at the URL shown in the output.

---

## 🗂️ Project Structure

```
/
├── src/
│   └── worker.js        # Cloudflare Worker code (handles API endpoints)
├── package.json
├── wrangler.jsonrc      # Wrangler configuration
└── README.md
```

---

## 🌐 Example Endpoints

- **`/message`** — Returns “Hello, World!”
- **`/random`** — Returns a random UUID
- *(Add more, e.g., `/generate-report` to call OpenAI GPT)*

---

## ⚡ Useful Commands

| Action              | Command                    |
|---------------------|---------------------------|
| Install deps        | `npm install`             |
| Add OpenAI secret   | `npx wrangler secret put OPENAI_API_KEY` |
| Local dev           | `npx wrangler dev`        |
| Deploy              | `npx wrangler deploy`     |

---

## 🔐 Security Tips

- Never hardcode your OpenAI API key in code or config.
- Always use Wrangler secrets for sensitive values.
- Don’t commit secrets or config with credentials.

---

## 📚 Resources

- [Cloudflare Workers Docs](https://developers.cloudflare.com/workers/)
- [Wrangler CLI Docs](https://developers.cloudflare.com/workers/wrangler/)
- [OpenAI Node.js SDK](https://www.npmjs.com/package/openai)

---

> **Happy building!**
> For questions or contributions, open an issue or pull request.\
<img width="836" height="628" alt="Screenshot 2025-08-06 at 03 46 07" src="https://github.com/user-attachments/assets/1a1d782c-85b0-49ee-8f57-b1833786306f" />



