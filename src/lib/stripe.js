import 'server-only'

import Stripe from 'stripe'

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

export const price_id = {
  'basic':"price_1UBn7QPEPg6IxbRBAmKjiSyw",
  'pro':"price_1UCswHPEPg6IxbRBJAAmHMlG",
}