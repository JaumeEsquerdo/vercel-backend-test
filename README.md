# vercel-backend-test
Test de un backend con VERCEL


```js
{
    "version": 2,
    "builds": [
        {
            "src": "index.js",
            "use": "@vercel/node"
        },
        {
            "src": "public/**",
            "use": "@vercel/static"
        }
    ],
    "rewrites": [
        {
            // de lo que busque despues del /uploads/ el $1 lo lleva al /public/uploads
            "source": "/uploads/(.*)",
            "destination": "/public/uploads/$1"
        },
        {
            "source": "/web/(.*)",
            "destination": "/public/$1"
        },
        {
            "source": "/web",
            "destination": "/public/index.html"
        },
        {
            "source": "/(.*)",
            "destination": "/index.js"
        }
    ]
}
```