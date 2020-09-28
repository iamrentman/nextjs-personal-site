import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
// import remark from 'remark'
// import html from 'remark-html'
import emoji from 'remark-emoji';
import images from 'remark-images';

const contentDirectory = path.join(process.cwd(), 'content')

// Use MDX instead of remark.
// https://samrobbins.uk/blog/expanding-the-next.js-blog-example-to-use-mdx/
// Below to line 76 is from https://mdxjs.com/getting-started#do-it-yourself
const babel = require('@babel/core')
const React = require('react')
const {renderToStaticMarkup} = require('react-dom/server')
const mdx = require('@mdx-js/mdx')
const {MDXProvider, mdx: createElement} = require('@mdx-js/react')
const transform = code =>
  babel.transform(code, {
    plugins: [
      '@babel/plugin-transform-react-jsx',
      '@babel/plugin-proposal-object-rest-spread'
    ]
  }).code
const renderWithReact = async mdxCode => {
  const jsx = await mdx(mdxCode, { skipExport: true, remarkPlugins: [images, [emoji, { padSpaceAfter: true, emoticon: true }]] });
  const code = transform(jsx)
  const scope = {mdx: createElement}
  const fn = new Function(
    'React',
    ...Object.keys(scope),
    `${code}; return React.createElement(MDXContent)`
  )
  const element = fn(React, ...Object.values(scope))
  const components = {
    h1: ({children}) =>
      React.createElement('h1', {style: {color: 'tomato'}}, children)
  }
  const elementWithProvider = React.createElement(
    MDXProvider,
    {components},
    element
  )
  return renderToStaticMarkup(elementWithProvider)
}

export function getSortedContentData() {
  // Get file names under /content
  const fileNames = fs.readdirSync(contentDirectory)
  const allContentData = fileNames.map(fileName => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.mdx$/, '')

    // Read markdown file as string
    const fullPath = path.join(contentDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents)

    // Combine the data with the id
    return {
      id,
      ...matterResult.data
    }
  })
  // Sort content by date
  return allContentData.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
}

export function getAllContentIds() {
  const fileNames = fs.readdirSync(contentDirectory)

  // Returns an array that looks like this:
  // [
  //   {
  //     params: {
  //       id: 'ssg-ssr'
  //     }
  //   },
  //   {
  //     params: {
  //       id: 'pre-rendering'
  //     }
  //   }
  // ]
  return fileNames.map(fileName => {
    return {
      params: {
        id: fileName.replace(/\.mdx$/, '')
      }
    }
  })
}

export async function getContentData(id) {
  const fullPath = path.join(contentDirectory, `${id}.mdx`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  // Use gray-matter to parse the content metadata section
  const matterResult = matter(fileContents)

  // Use MDX to render HTML
  const contentHtml = await renderWithReact(matterResult.content);

  // Combine the data with the id and contentHtml
  return {
    id,
    contentHtml,
    ...matterResult.data
  }
}
