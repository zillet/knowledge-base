<template>
  <Home>
    {{ $page.article }}
  </Home>
</template>
<page-query>
query GettingStarted {
  article: allGettingStarted{
    edges{
      node{
        title
        category
				excerpt
        path
        timeToRead
        fileInfo{
          directory
        }
      }
    }
  }
}
</page-query>
