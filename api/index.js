<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>API Docs</title>
  <style>
    body {
      background-color: #0d1117;
      color: #c9d1d9;
      font-family: Arial, sans-serif;
      margin: 0;
      padding: 20px;
    }
    h1 {
      color: #58a6ff;
      font-size: 24px;
      margin-bottom: 20px;
    }
    .endpoint {
      display: flex;
      align-items: center;
      background: #161b22;
      border: 1px solid #30363d;
      border-radius: 6px;
      padding: 12px;
      margin-bottom: 12px;
      transition: transform 0.2s ease, background 0.2s ease;
    }
    .endpoint:hover {
      transform: translateY(-2px);
      background: #1c2128;
    }
    .method {
      background: #238636;
      color: white;
      font-weight: bold;
      padding: 6px 12px;
      border-radius: 4px;
      margin-right: 12px;
      font-size: 14px;
    }
    .info {
      display: flex;
      flex-direction: column;
    }
    .info a {
      color: #58a6ff;
      font-size: 16px;
      text-decoration: none;
      margin-bottom: 4px;
    }
    .info a:hover {
      text-decoration: underline;
    }
    .desc {
      font-size: 13px;
      color: #8b949e;
    }
  </style>
</head>
<body>
  <h1>API Endpoints</h1>

  <div class="endpoint">
    <div class="method">GET</div>
    <div class="info">
      <a href="/api/ai/gpt3" target="_blank">/api/ai/gpt3</a>
      <span class="desc">gpt3</span>
    </div>
  </div>

  <div class="endpoint">
    <div class="method">GET</div>
    <div class="info">
      <a href="/api/ai/bard" target="_blank">/api/ai/bard</a>
      <span class="desc">bard</span>
    </div>
  </div>

  <div class="endpoint">
    <div class="method">GET</div>
    <div class="info">
      <a href="/api/ai/bibleai" target="_blank">/api/ai/bibleai</a>
      <span class="desc">Bible AI</span>
    </div>
  </div>

</body>
</html>
