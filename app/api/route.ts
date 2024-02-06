import nodemailer from 'nodemailer';
import { NextRequest } from 'next/server';
import { readFileSync } from 'fs';
import * as xlsx from 'xlsx';
import path from 'path';

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

export async function GET(req: NextRequest){

    const { searchParams } = new URL(req.url)
    const page = searchParams.get('query')

    try {
        const caminhoDaPlanilha = path.join(process.cwd(), 'public/dados/inflame.xlsx');
        const conteudoPlanilha = readFileSync(caminhoDaPlanilha);

        const workbook = xlsx.read(conteudoPlanilha, { type: 'buffer' });
        
        let aba;
        // Assumindo que há apenas uma folha na planilha
        if(page == 'membros'){

            aba = workbook.SheetNames[4];
        }
        else{
            aba = workbook.SheetNames[10];
        }

        const dados = xlsx.utils.sheet_to_json(workbook.Sheets[aba]);

        if(page == 'membros'){
            dados.splice(0, 2);
            dados.splice(19);
        }
        else{
            dados.splice(0, 3);
        }

        return Response.json({ dados });

    } catch (error) {
      console.error('Erro ao ler a planilha:', error);
      return Response.json({ erro: 'Erro interno do servidor' });
    }
}