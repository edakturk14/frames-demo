const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Custom Meta Tags Example</title>
        <!-- Standard Open Graph / Facebook meta tags -->
        <meta property="og:type" content="website">
        <meta property="og:url" content="https://yourwebsite.com/page">
        <meta property="og:title" content="Content Title">
        <meta property="og:description" content="Description Here">
        <meta property="og:image" content="https://yourwebsite.com/path/to/image.jpg">
        
        <!-- Twitter meta tags -->
        <meta property="twitter:card" content="summary_large_image">
        <meta property="twitter:url" content="https://yourwebsite.com/page">
        <meta property="twitter:title" content="Content Title">
        <meta property="twitter:description" content="Description Here">
        <meta property="twitter:image" content="https://yourwebsite.com/path/to/image.jpg">
        
        <!-- Custom meta tags -->
        <meta property="fc:frame" content="Your Frame Content Here">
        <meta property="fc:frame:image" content="https://yourwebsite.com/path/to/frame-image.jpg">
        
        <!-- Button 1 -->
        <meta property="fc:frame:button:1" content="Button 1 Text">
        <meta property="fc:frame:button:1:action" content="Action1">
        <meta property="fc:frame:button:1:target" content="Target1">
        
        <!-- Button 2 -->
        <meta property="fc:frame:button:2" content="Button 2 Text">
        <meta property="fc:frame:button:2:action" content="Action2">
        <meta property="fc:frame:button:2:target" content="Target2">
        
        <!-- Button 3 -->
        <meta property="fc:frame:button:3" content="Button 3 Text">
        <meta property="fc:frame:button:3:action" content="Action3">
        <meta property="fc:frame:button:3:target" content="Target3">
    </head>
    <body>
        <h1>Hello, this is a webpage with custom meta tags!</h1>
    </body>
    </html>
  `);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
