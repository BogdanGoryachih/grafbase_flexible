import { g, auth, config } from '@grafbase/sdk'

const User = g.model('User',{
  name: g.string().length({min: 3, max:20}),
  email: g.string().unique(),
  avatarUrl: g.url(),
  description: g.string().optional(),
  githubUrl: g.url().optional(),
  linkedUrl: g.url().optional(),
  prodjects: g.relation(()=>  Prodject).list().optional()
})
const Prodject = g.model('Prodject',{
  title:g.string().length({min:3 }),
  description: g.string(),
  image:g.url(),
  liveSiteUrl: g.url(),
  githubUrl: g.url(),
  category: g.string().search(),
  createBy: g.relation(()=> User)

})
export default config({
  schema: g

})
