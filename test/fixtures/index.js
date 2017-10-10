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
  }
}
