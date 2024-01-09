import nodemailer from 'nodemailer';
import { NextRequest } from 'next/server';

/**
 * Exemplo de requisição:
 * {
 *    "nome": "Nome",
 *    "telefone": "Telefone",
 *    "mensagem": "Mensagem do email"
 * }
 */

export async function POST(req: NextRequest) {

    try {
        
        const { nome, telefone, mensagem } = await req.json();
        const agora = new Date();
        const assunto = 'Mensagem: ' + agora.toLocaleString('pt-br');

        const body = `
          Nome: ${nome}
          Telefone: ${telefone}

          Mensagem: ${mensagem}
        `;

        // Configurar o transporte do Nodemailer
        const transporter = nodemailer.createTransport({
            // Configurações do seu provedor de e-mail (SMTP)
            // Exemplo para o serviço Gmail:
            service: 'Gmail',
            auth: {
                user: 'juliaeluanafreelas',
                pass: 'jylzrrtprgesnfii',
            },
        });

        // Configurar o e-mail a ser enviado
        const mailOptions = {
            from: 'juliaeluanafreelas@gmail.com',
            to: 'luhfraga123@gmail.com',
            subject: assunto,
            text: body,
        };

        // Enviar o e-mail
        await transporter.sendMail(mailOptions);

        return Response.json({ message: 'E-mail enviado com sucesso' });
    } catch (error) {
        console.error('Erro ao enviar e-mail:', error);
        return Response.json({ message: 'Erro ao enviar email' });
    }
};

export async function GET(){
    return Response.json({mensagem: 'Método não permitido'})
}