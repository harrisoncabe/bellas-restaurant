# Bella's Restaurant Website

Family-owned restaurant website serving Tarrytown, NY since 1979.

## Features
- Responsive design
- Online menu with shopping cart
- Image gallery
- Contact information
- Service descriptions

## Project Structure
```
bellas-restaurant/
├── index.html          # Main HTML file
├── css/
│   └── style.css       # All styles
├── js/
│   └── main.js         # All JavaScript
├── images/             # Image assets
└── README.md           # This file
```

## Local Development

1. Open the repo
   ```bash
   cd ~/Documents/bellas-restaurant
   ```

2. Open `index.html` in your browser:
   - **Option 1**: Double-click `index.html`
   - **Option 2**: Use a local server (recommended):
     ```bash
     # Python 3
     python3 -m http.server 8000
     
     # Python 2
     python3 -m SimpleHTTPServer 8000
     
     # Node.js (if you have http-server installed)
     npx http-server
     ```
   - Then visit `http://localhost:8000`

## Future Plans
To implement this project I would have this application call purchases to a transaction in a relational database that would be able to trigger the order call to the kitchen staff. Checkout method would have to be connected to a 3rd party for security guaruntee. Views must be made for staff oversight on current orders and common orders, and daily or weekly events showing a roundup. This system would improve insights on inventory need and streamline data collection for user profiles, order logs for accounting, and speed for customers by using Performance Tuning to allocate read/write needs.




