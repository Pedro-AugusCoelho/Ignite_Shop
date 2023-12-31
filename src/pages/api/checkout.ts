// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { stripe } from '@/lib/stripe'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function checkout(req: NextApiRequest, res: NextApiResponse) {

  const { arrayShirts } = req.body

  if(req.method !== 'POST'){
    res.status(405).json({ error: 'method not allowed'})
  }

  if(!arrayShirts){
    res.status(400).json({ error: 'price not found'})
  }

  const successUrl = `${process.env.NEXT_URL}/success?session_id={CHECKOUT_SESSION_ID}`;
  const cancelUrl = `${process.env.NEXT_URL}/`;

  const checkoutSession =  await stripe.checkout.sessions.create({
    success_url: successUrl,
    cancel_url: cancelUrl,
    mode: "payment",
    line_items: arrayShirts
  })

  res.status(201).json({
    checkoutUrl: checkoutSession.url
  });
}
