/**
 * 本番（bansodo.jp）はデフォルトでロック。
 * 公開するときだけ Vercel に SITE_PUBLIC=true を設定する。
 *
 * プレビュー用 Basic 認証:
 * - SITE_ACCESS_USER（省略時: bansodo）
 * - SITE_ACCESS_PASSWORD
 */
export function isSiteLocked() {
  if (process.env.SITE_PUBLIC === "true") return false;
  if (process.env.SITE_LOCKED === "false") return false;
  if (process.env.VERCEL_ENV === "production") return true;
  return process.env.SITE_LOCKED === "true";
}

export function getSiteAccessCredentials() {
  return {
    user: process.env.SITE_ACCESS_USER ?? "bansodo",
    password: process.env.SITE_ACCESS_PASSWORD ?? "",
  };
}

export function maintenanceHtml() {
  return `<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="robots" content="noindex, nofollow">
  <title>準備中 | 伴走堂</title>
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      min-height: 100dvh;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 24px;
      font-family: "Hiragino Sans", "Noto Sans JP", sans-serif;
      background: #0F1E30;
      color: #fff;
    }
    main { max-width: 360px; text-align: center; }
    p.label { font-size: 12px; letter-spacing: 0.2em; color: #2ECC8A; }
    h1 { margin-top: 12px; font-size: 22px; font-weight: 700; line-height: 1.6; }
    p.note { margin-top: 16px; font-size: 14px; line-height: 1.8; color: rgba(255,255,255,0.65); }
  </style>
</head>
<body>
  <main>
    <p class="label">BANSODO</p>
    <h1>サイト準備中です</h1>
    <p class="note">現在、公開前の準備を進めています。<br>しばらくお待ちください。</p>
  </main>
</body>
</html>`;
}
