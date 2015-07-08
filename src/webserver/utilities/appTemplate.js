export default function appTemplate(title, content, state) {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8" />
        <title>${title}</title>
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
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
