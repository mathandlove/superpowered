# Allowing ChatGPT to Access This Site (Vercel)

If ChatGPT can’t load this site when you share a link, Vercel’s Firewall or Bot Protection is likely blocking it.

## Quick fix (Vercel Dashboard)

1. Open **[Vercel Dashboard](https://vercel.com)** → your **project** → **Settings** → **Firewall** (or **Security** → **Firewall**).
2. Check **Firewall / WAF**:
   - If you have an **“AI Bots”** or **“Block AI Bots”** ruleset or template, **disable it** or **remove** the rule so it doesn’t block ChatGPT.
   - If you have **custom rules** that block by User-Agent or “bot”, add a **Bypass** rule for ChatGPT (see below).
3. Check **Bot Protection**:
   - Vercel’s [Verified Bot Directory](https://vercel.com/changelog/vercel-botid-now-leverages-vercels-verified-bot-directory) includes **ChatGPT Agent** (`chatgpt-operator`), so verified bots are usually allowed.
   - If Bot Protection is set to “Challenge” or “Block” for all non-browser traffic, relax it so that **Verified Bots** are allowed (or turn off the strict rule for this project).

## Optional: Bypass rule for ChatGPT (Dashboard only)

To explicitly allow ChatGPT even when other AI-bot rules are on:

1. **Firewall** → **Configure** → **Add new rule**.
2. **If**: Request Header → `Signature-Agent` equals `"https://chatgpt.com"` (include the quotes in the value).
3. **Then**: **Bypass**.
4. Save and **Publish** / **Apply**.

ChatGPT Agent sends signed requests with `Signature-Agent: "https://chatgpt.com"`, so this rule lets those requests through.

## Reference

- [ChatGPT agent allowlisting (OpenAI)](https://help.openai.com/en/articles/11845367-chatgpt-agent-allowlisting)  
- [Vercel Bot Protection](https://vercel.com/docs/bot-protection)  
- Bypass rules **cannot** be defined in `vercel.json`; use the Dashboard (or API) only.
