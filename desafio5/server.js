const { createServer } = require('node:http');
const { URL } = require('node:url');

const hostname = '127.0.0.1';
const port = 3000;

const isPrime = (num) => {
    if (num <= 1) return false; 
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false; 
    }
    return true; 
};

const incrementBy = (valor) => {
    if (typeof valor !== 'number' || isNaN(valor) || valor <= 0) {
        return "invalid";
    }
    return valor;
};

const server = createServer((request, response) => {
    response.setHeader('Content-Type', 'application/json');

    try {
        const url = new URL(request.url, `http://${hostname}:${port}`);

        if (request.method === 'GET' && url.pathname === '/isPrime') {
            const queryParams = Object.fromEntries(url.searchParams.entries());
            const num = parseInt(queryParams.number);

            const result = isPrime(num);
            response.statusCode = 200;
            response.end(JSON.stringify({ isPrime: result }));

        } else if (request.method === 'GET' && url.pathname === '/health-check') {
            response.statusCode = 200;
            response.end(JSON.stringify({
                success: true,
                timestamp: new Date().toISOString()
            }));

        } else if (request.method === 'POST' && url.pathname === '/incrementBy') {
            let body = '';

            request.on('data', chunk => {
                body += chunk.toString();
            });

            request.on('end', () => {
                try {
                    const parsedBody = body.length > 0 ? JSON.parse(body) : {};

                    if (!parsedBody.hasOwnProperty('valor') || typeof parsedBody.valor !== 'number' || isNaN(parsedBody.valor) || parsedBody.valor <= 0) {
                        response.statusCode = 400;
                        response.end(JSON.stringify({ error: "Input Invalido" }));
                        return;
                    }

                    const incremento = incrementBy(parsedBody.valor);

                    response.statusCode = 200;
                    response.end(JSON.stringify({ message: `Counter: ${incremento}` }));

                } catch (error) {
                    console.error(error);
                    response.statusCode = 400;
                    response.end(JSON.stringify({ error: "Invalid JSON body" }));
                }
            });

        } else {
            response.statusCode = 404;
            response.end(JSON.stringify({ error: 'Route not found' }));
        }
    } catch (error) {
        console.error(error);
        response.statusCode = 500;
        response.end(JSON.stringify({ error: 'Internal Server Error' }));
    }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
