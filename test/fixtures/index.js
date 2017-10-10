export default {
  getImage () {
    return {
      id: '02b353bf5358995bc7d193ed1ce9c2eaec2b694b21d2f96232c9d6a0832121d1',
      publicId: '2X9OfsAGDVMIIrLVgkqcuF',
      userId: 'platzigram',
      likes: 0,
      liked: false,
      src: 'http://platzigram/2X9OfsAGDVMIIrLVgkqcuF.jpg',
      description: '#awesome',
      tags: [ 'awesome' ],
      createAt: new Date().toString()
    }
  },
  getImages () {
    return [
      this.getImage(),
      this.getImage(),
      this.getImage()
    ]
  },
  getImagesByTag () {
    return [
      this.getImage(),
      this.getImage()
    ]
  },
  getUser () {
    return {
      id: 'ceb85d2543a89310a41669ef45b6b96fbd1a98cec2ba2b2f27d73f8ab2973331',
      name: 'Enmanuel Jarquin',
      username: 'theenmanuel23',
      password: 'platzi',
      createAt: new Date().toString()
    }
  }
}
