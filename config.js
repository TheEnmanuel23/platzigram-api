export default {
  db: {  
  	host: 'localhost',
  	port: 28015,
  	db: 'platzigram'
	},
  secret: process.env.PLATZIGRAM_SECRET || 'platzi' // no usar default solo es para facilitar las pruebas
}
