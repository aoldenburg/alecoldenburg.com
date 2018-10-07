export default function renderFullPage (html, preloadedState) {
  return `
  <!DOCTYPE html>
  <html>
    <head>
      <title>Alec Oldenburg's Personal Site</title>
    </head>
    <body>
      <div id="root">${html}</div>
      <script src="/bundle.js"></script>
    </body>
  </html>
  `
}
