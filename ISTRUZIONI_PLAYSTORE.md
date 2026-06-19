# Eliminacode Studio - pacchetto generico per Play Store

Questo pacchetto ha rimosso il nome reale del medico e usa un nome generico modificabile.

## File da modificare per cambiare nome

Apri `config.js` e cambia:

```js
APP_NAME: "Eliminacode Studio",
STUDIO_NAME: "Studio Medico",
WORKER_URL: "https://motore-coda.motore-coda-admin.workers.dev"
```

- `STUDIO_NAME` cambia il nome mostrato nelle pagine HTML.
- `APP_NAME` è il nome generale dell’app nelle pagine.
- `WORKER_URL` è il collegamento al server Cloudflare Worker.

## Importante per Play Store

Per cambiare il nome che compare nel Play Store e nel manifest della PWA, modifica anche `manifest.json`:

```json
"name": "Eliminacode Studio",
"short_name": "Fila"
```

Poi ricarica tutti i file su GitHub Pages prima di lanciare Bubblewrap.

## Comando Bubblewrap

Dopo aver aggiornato GitHub Pages:

```powershell
bubblewrap init --manifest https://marconeri70.github.io/eliminacode-app/manifest.json
```

