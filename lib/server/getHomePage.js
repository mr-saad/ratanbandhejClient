import "server-only"
import sanity from "./sanity"

export default async function getHomePage() {
  try {
    const data = await sanity.fetch(`
      {
        "headerImage":*[_type=="headerImage"][0]{"image":image.asset->{url,"lqip":metadata.lqip}},
        "newArrivals":*[_type=="product"]|order(_createdAt desc)[0..4]{
          _id,title,description,"slug": slug.current,"image":images[0].asset->{url,"lqip":metadata.lqip}
        },
        "sections": [
           { "Saree":*[_type=="product" && type=="Saree"]|order(_createdAt desc)[0..4]{
              _id,title,description,"slug": slug.current,"image":images[0].asset->{url,"lqip":metadata.lqip}
            }},
            {"Dupatta":*[_type=="product" && type=="Dupatta"]|order(_createdAt desc)[0..4]{
              _id,title,description,"slug": slug.current,"image":images[0].asset->{url,"lqip":metadata.lqip}
            }},
            {"Dress":*[_type=="product" && type=="Dress"]|order(_createdAt desc)[0..4]{
              _id,title,description,"slug": slug.current,"image":images[0].asset->{url,"lqip":metadata.lqip}
            }},
            {"Top Material":*[_type=="product" && type=="Top Material"]|order(_createdAt desc)[0..4]{
              _id,title,description,"slug": slug.current,"image":images[0].asset->{url,"lqip":metadata.lqip}
            }},
        ]
      }
      `)
    return data
  } catch (error) {
    console.error(error)
    throw new Error(error)
  }
}
