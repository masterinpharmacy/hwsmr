# HWSMR — Deploy-gids

## 1. Lokaal testen
```
npm install
npm run dev
```
Open http://localhost:3000

## 2. GitHub
```
git init
git add .
git commit -m "Nieuwe HWSMR site"
git remote add origin <jouw-repo-url>
git push -u origin main
```

## 3. Vercel
1. Ga naar vercel.com → New Project → importeer de GitHub repo.
2. Zet environment variables (Settings → Environment Variables):
   - `RESEND_API_KEY` — je Resend API key
   - `CONTACT_TO_EMAIL` — het mailadres waar aanmeldingen binnenkomen
3. Deploy.

## 4. Resend
1. Voeg het domein `hwsmr.nl` toe in Resend → Domains.
2. Zet de gevraagde DNS-records (DKIM/SPF) bij je domeinregistrar.
3. Wacht op verificatie voordat je `from:` adres (`aanmelden@hwsmr.nl`) gebruikt — anders faalt het versturen.

## 5. Domein koppelen
Zet in je DNS (waar hwsmr.nl beheerd wordt) een CNAME/A-record naar Vercel,
volgens de instructies die Vercel toont bij Settings → Domains.

## Belangrijk — AVG
Dit formulier vraagt bewust geen BSN of medische gegevens. Die horen niet
via een open webformulier verzonden te worden. Als de apotheek later
zorggegevens vastlegt, gebeurt dat rechtstreeks in het beveiligde
apotheeksysteem (AIS), niet via deze website.
