export default function appTemplate(title, content, state) {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <title>${title}</title>
        <link rel="stylesheet" href="/frontend.css" />
      </head>
      <body>
        <div id="application">${content}</div>
        <script src="/frontend.js"></script>
        <script>
          document.addEventListener('DOMContentLoaded', function() {
            var state = ${JSON.stringify(state)}

            frontend.bootstrapApplication(
              document.getElementById('application'),
              state
            )
          })
        </script>
      </body>
    </html>
  `
}
