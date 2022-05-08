import nodemailer from 'nodemailer';
import { MailAdapter, SendMailData } from "../mail-adapter";


const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "83893a5cd30451",
      pass: "94f909ef5a10dd"
    }
  });


export class NodemailerMailAdapter implements MailAdapter{
   async sendMail ({subject,body}: SendMailData){
    await transport.sendMail({
        from:'Equipe Feedget <oi@feedget.com>',
        to: 'Ana Harumi Okahara Merli <ana.harumi.1989@gmail.com>',
        subject,
        html: body,
    });
   }
}