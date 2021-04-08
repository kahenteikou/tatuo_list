import React from "react"
import { graphql,useStaticQuery  } from "gatsby"
import "./tatuo_list.css"
import Twitter_Here from "../components/twitter_here" 
import JSONSTR_br_Tag from "../components/jsonstr_brkun"
const TATUO_PAGE = () =>{
    const tatuo_words = useStaticQuery(graphql`
    query{
        allTatuoListJson {
            edges {
              node {
                content
                date
                orig_url
              }
            }
        }
      }
      
  `)
  const tatuo_pages = tatuo_words.allTatuoListJson.edges
  console.log(tatuo_pages)
  return (
    <div>
        <div className="banner">
            たつを語録集
        </div>
        <div>
            {tatuo_pages.map(e => (
                <section className="card">
                    <div className="card-content">
                        <h2 className="card_title">{e.node.date}</h2>
                        <p className="card_content"><JSONSTR_br_Tag>{e.node.content}</JSONSTR_br_Tag></p>
                    </div>
                    <div className="card_link">
                        <Twitter_Here href={e.node.orig_url} />
                        <div className="margine_kasegi"></div>
                    </div>
                </section>
            ))}
        </div>
    </div>
  )
}
export default TATUO_PAGE