html_template = """<!DOCTYPE html>
<html lang="pl">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>My Website</title>
  <link rel="stylesheet" href="./style.css" />
</head>
<body>
  <main class="main-container">
    <h1>Welcome to My Website</h1>
  </main>
  <script src="index.js"></script>
</body>
</html>"""

with open("index.html", "w", encoding="utf-8") as f:
  f.write(html_template)

css_template = """html {
  background-color: #DDBEAA;
  height: 100vh;
}
body {
  height: 100vh;
  margin: 0;
}
.main-container {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}"""

with open("style.css", "w", encoding="utf-8") as f:
  f.write(css_template)

js_template = """setTimeout(() => {
  console.log('Test JS')
}, 4000)"""

with open("index.js", "w", encoding="utf-8") as f:
  f.write(js_template)

print("Pliki index.html, style.css i index.js zostały utworzone!")