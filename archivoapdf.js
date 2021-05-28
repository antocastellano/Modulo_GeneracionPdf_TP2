import PDFDocument from 'pdfkit'
import fs from 'fs'

const doc = new PDFDocument;

class reserva {
    constructor(persona, dia, cancha, tiempo) {
        this.persona = persona;
        this.dia = dia;
        this.cancha = cancha;
        this.tiempo = tiempo;
    }
        generarPdf() {
    
            doc.pipe(fs.createWriteStream('./' + '/nuevoo.pdf'));

            doc.font('Times-Roman')
                .fontSize(18)

            doc.image('./Imagenes/Encabezado.png');

            doc.text('DATOS DE SU RESERVA', {
                align: 'center',
                lineGap: 50,
                underline: true,
            });

            doc.text("Nombre del cliente: " + this.persona, { align: 'left', lineGap: 30 })
            doc.text("Dia de reserva : " + this.dia, { align: 'left', lineGap: 30 })
            doc.text("Cancha reservada : " + this.cancha, { align: 'left', lineGap: 30 })
            doc.text("Cantidad de tiempo reservado : " + this.tiempo, { align: 'left', lineGap: 150 })

            doc.text('Gracias por elegirnos !', {
                align: 'center',
                lineGap: 50,
            });

            console.log('archivo generado');

            doc.end();
        }
    }


export default reserva

