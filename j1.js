const { createServer } = require('node:http');
const hostname = '127.0.0.1';
const port = 3000;
const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Colorful Card</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f9;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
        }
        .card {
            background: linear-gradient(135deg, #f6d365 0%, #fda085 100%);
            width: 300px;
            padding: 20px;
            border-radius: 15px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
            color: white;
            text-align: center;
        }
        .card-title {
            font-size: 24px;
            margin-bottom: 10px;
        }
        .card-content {
            font-size: 16px;
            margin-bottom: 15px;
        }
        .card-button {
            background-color: white;
            color: #fda085;
            border: none;
            padding: 10px 20px;
            border-radius: 20px;
            cursor: pointer;
            font-size: 16px;
            transition: background-color 0.3s ease;
        }
        .card-button:hover {
            background-color: #f4f4f9;
        }
    </style>
</head>
<body>

    <div class="card">
        <div class="card-title">Welcome to Backend</div>
        <div class="card-content">Your server is running smoothly!</div>
        <button class="card-button">Explore More</button>
    </div>

</body>
</html>
`);
});
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});