import Main from './views/main.js'

export async function handler (/*req: object*/) {
  return {
    statusCode: 200,
    headers: {
      'content-type': 'text/html; charset=utf8',
      'cache-control': 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0'
    },
    body: Main({
      /**
       * Basic bio
       */
      fullname: 'Aiden Campbell', // ←  Start by adding your name!
      title: 'Aiden Campbell',
      occupation: 'Software Engineer',
      location: 'Krakow, Poland',
      bio: 'I am not that big of a fan of personal websites yet, maybe one day.',

      /**
       * Contact / social
       * - Comment out any item below to remove it from your page
       */
      email: '',
      twitter: '',
      linkedin: 'aidenec',
      instagram: '',
      facebook: '',

      /**
       * Layout
       */
      photographer: 'Jeremy Bishop',
      service: 'Unsplash',
      credit: 'https://unsplash.com/@jeremybishop',
      image: '_static/background.jpg'
    })
  }
}
