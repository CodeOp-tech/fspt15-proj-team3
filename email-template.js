const HTML_TEMPLATE = (text) => {
    return `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <title>NodeMailer Email Template</title>
          <style>
            .container {
              width: 100%;
              height: 100%;
              padding: 20px;
              background-color: #fdc758;
            }
            .email {
              width: 80%;
              margin: 0 auto;
              font-family: 'Helvetica LT Std';
              background-color: #fff;
              padding: 20px;
            }
            .email-header {
              background-color: #FE6665;
              color: #F9F9F9;
              font-family: 'Helvetica LT Std';
              padding: 15px;
              text-align: center;
            }
            .email-body {
              padding: 20px;
              font-family: "Abril Fatface", cursive;
              font-size: 40px;
              text-align: center;
            }
            .email-footer {
              background-color: #FE6665;
              font-family: 'Helvetica LT Std';
              color: #F9F9F9;
              padding: 10px;
              text-align: center;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="email">
              <div class="email-header">
                <h1>BREAKTIME</h1>
              </div>
              <div class="email-body">
                <p>${text}</p>
              </div>
              <div class="email-footer">
                <p> CodeOp Project </p>
              </div>
            </div>
          </div>
        </body>
      </html>
    `;
  }
  
module.exports = HTML_TEMPLATE;