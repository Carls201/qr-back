import { app } from "./app.js";
import 'dotenv/config';
const port = process.env.PORT || 3000;
//wololo
//probando desde otro pc
app.listen(port,() => {
    console.log('escuchando en el puerto 3000');
});