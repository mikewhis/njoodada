import { groq } from 'next-sanity'

export const programsQuery = groq`*[_type == "program"] | order(id.current asc) {
  _id,
  id,
  title,
  subtitle,
  description,
  features,
  "image": image.asset->url
}`

export const successStoriesQuery = groq`*[_type == "successStory"] {
  _id,
  name,
  quote,
  achievement,
  "image": image.asset->url
}`

export const impactStatsQuery = groq`*[_type == "impactStat"] | order(order asc) {
  _id,
  value,
  label
}`

export const partnersQuery = groq`*[_type == "partner"] {
  _id,
  name,
  "logo": logo.asset->url,
  website
}`

export const boardMembersQuery = groq`*[_type == "boardMember"] | order(order asc) {
  _id,
  name,
  role,
  bio,
  "image": image.asset->url
}`

export const contactInfoQuery = groq`*[_type == "contactInfo"][0] {
  phones,
  emails,
  address,
  socialMedia
}` 