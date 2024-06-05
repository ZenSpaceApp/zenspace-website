import { NextApiRequest, NextApiResponse } from 'next';
import { send } from '@sendgrid/mail';
import * as sgMail from '@sendgrid/mail';
export async function POST(req: Request, res: Response) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY as string);

  const payload = await req.json();  
  const emailPayload = {
    "to": "info@zenspaceapp.com",
    "from" : "info@zenspaceapp.com",
    "templateId": process.env.SENDGRID_TEMPLATE_ID as string,
    "dynamicTemplateData" : {
      ...payload
    }
  };

  try {
    await sgMail.send(emailPayload);
    return Response.json({ success: true });
  } catch (error: any) {
    return new Response('Failed to send email', {
      status: 500,
      headers: {
        error: error.message
      },
    })
  }
}