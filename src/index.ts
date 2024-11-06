import express, { Request, Response } from 'express';

const app = express();      // Crea una instancia de la aplicación Express
const port = 3000;          // Define el puerto

// Define una ruta en la raíz ('/') que responde con 'Hola, Mundo'

app.get('/', (_req: Request, res: Response) => {
    
    res.send('¡Hola, Juan!');
  });

  app.get('/hello', (req: Request, res: Response) => {
    console.log(req.query);
    if (req.query) {
      const name = req.query ? req.query.name: null;
      res.send(`¡Hola, ${name}!`);
      return;
  
    }
    res.send('¡Hola, Mundo!');
  });

app.get('/goodbye', (req: Request, res: Response) => {
    console.log(req.query);
    if (req.query) {
      const name = req.query ? req.query.name: null;
      res.send(`¡Bye, ${name}!`);
      return;

    }
    res.send('¡Adios, Juan!');
});

app.get('/age', (req: Request, res: Response) => {
    const age = req.query ? req.query.age : null;
    if (age) {
      res.send(`Tienes ${age} años.`);
      return;
    }
    res.send('No proporcionaste tu edad.');
  });

 
  
  app.get('/json', (req: Request, res: Response) => {
    const mensaje = req.query.mensaje || '¡Este es un objeto JSON!';
    const autor = req.query.autor || 'Juan Santander';
    const estado = req.query.estado || 'Activo';
  
    res.json({
      mensaje,
      autor,
      fecha: new Date().toISOString(),
      estado,
    });
  });
  app.get('/html', (req: Request, res: Response) => {
    const titulo = req.query.titulo || '¡Hola mundo!';
    const contenido = req.query.contenido || 'RESPUESTA HTML.';
  
    res.send(`
      <!DOCTYPE html>
      <html lang="es">
        <head>
          <meta charset="UTF-8">
          <title>${titulo}</title>
        </head>
        <body style="font-family: Arial; background-color: #f9f9f9; color: #666;">
          <h1 style="color: #6CAF80;">${titulo}</h1>
          <p>${contenido}</p>
        </body>
      </html>
    `);
  });
  
  
// Inicia el servidor y escucha en el puerto especificado
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});