import _ from 'lodash'
import all from '../posts/*.md'


export const posts = _.chain(all)
  .map(transform)
  .orderBy('date', 'desc')
  .value()

export function findPost(permalink) {
  return _.find(posts, {permalink})
}

export function findAllTag() {
  let tagSet = new Set();
  posts.map((post) => {
    if (post.tags){
      let data = Object.values(post.tags).toLocaleString().split(",");
      // console.log('type of Data : ', typeof(data));
      data.forEach( (el)=> {
        return tagSet.add(el);
      });
    }
  });
  return Array.from(tagSet);
}

export function findByTag(tag) {
  return posts.filter(post => post.tags.includes(tag))
}

export function slugify(text) {
  return text
    .toString()                     // Cast to string
    .toLowerCase()                  // Convert the string to lowercase letters
    .normalize('NFD')       // The normalize() method returns the Unicode Normalization Form of a given string.
    .trim()                         // Remove whitespace from both sides of a string
    .replace(/\s+/g, '-')           // Replace spaces with -
    .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
    .replace(/\-\-+/g, '-');        // Replace multiple - with single -
}

function transform({filename, metadata, html}) {
  const permalink = slugify(metadata.title) || filename.replace(/.md$/, '')
  const date = new Date(metadata.date)
  let tags = []

  if (metadata.tags) {
    tags = metadata.tags.split(',').map(str => str.trim())
  }

  return {...metadata, filename, permalink, html, date, tags}
}
