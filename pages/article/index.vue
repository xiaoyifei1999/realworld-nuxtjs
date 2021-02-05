<template>
  <div class="article-page">

    <div class="banner">
      <div class="container">

        <h1>{{ article.title }}</h1>

        <ArticleMeta :article="article"></ArticleMeta>

      </div>
    </div>

    <div class="container page">

      <div class="row article-content">
        <div class="col-md-12"
             v-html="article.body">

        </div>
      </div>

      <hr />

      <div class="article-actions">
        <ArticleMeta :article="article"></ArticleMeta>
      </div>

      <div class="row">

        <div class="col-xs-12 col-md-8 offset-md-2">
          <Comment :article="article"></Comment>
        </div>

      </div>

    </div>

  </div>
</template>

<script>
import { getArticle } from '@/api/article'
import MarkdownIt from 'markdown-it'
import ArticleMeta from './components/article-meta'
import Comment from './components/comment'

export default {
  name: 'articleIndex',
  async asyncData ({ params }) {
    const { data } = await getArticle(params.slug)
    const md = new MarkdownIt()
    const { article } = data
    article.body = md.render(article.body)
    return {
      article
    }
  },
  components: {
    ArticleMeta,
    Comment,
  },
  head () {
    return {
      title: `${this.article.title} - RealWorld`,
      // hid meta标识编号
      meta: [
        {
          hid: 'description', name: 'description',
          content: `${this.article.description}`
        }
      ]
    }
  },
  watchQuery: ['slug'],
}
</script>

<style>
</style>