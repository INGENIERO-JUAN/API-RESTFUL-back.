"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 3000;
app.get('/', (_req, res) => {
    res.send('¡Hola, Nicko!');
});
app.get('/hello', (req, res) => {
    console.log(req.query);
    if (req.query) {
        const name = req.query ? req.query.name : null;
        res.send(`¡Hola, ${name}!`);
        return;
    }
    res.send('¡Hola, Mundo!');
});
app.get('/goodbye', (req, res) => {
    console.log(req.query);
    if (req.query) {
        const name = req.query ? req.query.name : null;
        res.send(`¡Bye, ${name}!`);
        return;
    }
    res.send('¡Adios, Nicko!');
});
app.get('/age', (req, res) => {
    const age = req.query ? req.query.age : null;
    if (age) {
        res.send(`Tienes ${age} años.`);
        return;
    }
    res.send('No proporcionaste tu edad.');
});
app.get('/product-info', (req, res) => {
    const product = req.query ? req.query.product : null;
    if (product) {
        res.send(`El producto ${product} está en stock y tiene un 20% de descuento.`);
        return;
    }
    res.send('No especificaste un producto.');
});
app.get('/userinfo', (req, res) => {
    const nombre = req.query ? req.query.nombre : null;
    const apellido = req.query ? req.query.apellido : null;
    const edad = req.query ? req.query.edad : null;
    if (nombre && apellido && edad) {
        res.send(`Hola, ${nombre || '¿... Sin nombre?'} ${apellido || '¿... Sin apellido ?'}. Tienes ${edad || '¿ 0 ?'} años.`);
        return;
    }
    res.send('Por favor, proporciona tu nombre, apellido y edad.');
});
app.get('/json', (req, res) => {
    const mensaje = req.query.mensaje || '¡Este es un objeto JSON!';
    const autor = req.query.autor || 'Nicko';
    const estado = req.query.estado || 'Activo';
    res.json({
        mensaje,
        autor,
        fecha: new Date().toISOString(),
        estado,
    });
});
app.get('/html', (req, res) => {
    const titulo = req.query.titulo || '¡Hola desde Express!';
    const contenido = req.query.contenido || 'Este es un HTML de respuesta básico.';
    res.send(`
      <!DOCTYPE html>
      <html lang="es">
        <head>
          <meta charset="UTF-8">
          <title>${titulo}</title>
        </head>
        <body style="font-family: Arial; background-color: #f4f4f4; color: #333;">
          <h1 style="color: #4CAF50;">${titulo}</h1>
          <p>${contenido}</p>
        </body>
      </html>
    `);
});
app.get('/redirect', (_req, res) => {
    res.redirect('https://www.github/Nick0oo.com');
});
app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
//# sourceMappingURL=index.js.map