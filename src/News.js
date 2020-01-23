import React from 'react'

/*
source: {id: "cnn", name: "CNN"}
author: "Eric Levenson and Lauren del Valle, CNN"
title: "Actress Annabella Sciorra is in court at Harvey Weinstein's trial for potential testimony - CNN"
description: "Actress Annabella Sciorra is in court for Harvey Weinstein's criminal trial, setting up what could be the first face-to-face testimony from one of the women who has accused him of sexual assault."
url: "https://www.cnn.com/2020/01/23/us/harvey-weinstein-annabella-sciorra/index.html"
urlToImage: "https://cdn.cnn.com/cnnnext/dam/assets/200123090608-annabella-sciorra-file-super-tease.jpg"
publishedAt: "2020-01-23T16:22:00Z"
content: "New York (CNN)Actress Annabella Sciorra is in court for 
*/

const News = props => {
  const { title, description, url } = props.news || {}

  return (
    <div>
      <span>Title:</span><span>{title}</span><br />

      <span>Description:</span>
      <div>{description}</div><br />

      <span>URL:</span><span>{url}</span>
      <br />
      <hr />
    </div>
  )
}

export default News