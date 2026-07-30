const mongoose = require('mongoose')

if (process.argv.length < 3) {
  console.log('give password as argument')
  process.exit(1)
}

// console.log(process.argv)
const password = process.argv[2]
const namePhone = process.argv[3]
const numberPhone = process.argv[4]

const url = `mongodb+srv://manuaba:${password}@cluster0.njcos6e.mongodb.net/phoneBook?retryWrites=true&w=majority&appName=Cluster0`

mongoose.set('strictQuery',false)

mongoose.connect(url, { family: 4 })

const phonebookSchema = new mongoose.Schema({
  name: String,
  number: String,
})

const Phonebook = mongoose.model('Phonebook', phonebookSchema)

if (process.argv.length > 3) {

  const phonebook = new Phonebook({
    name: namePhone,
    number: numberPhone,
  })

  phonebook.save().then(result => {
    console.log(result)
    console.log(`added ${namePhone} number ${numberPhone} to phonebook`)
    mongoose.connection.close()
  })
} else {
  console.log('phonebook:')
  Phonebook.find({}).then(result => {
    result.forEach(phonebook => {
      console.log(phonebook['name'], phonebook['number'])
    })
    mongoose.connection.close()
  })
}
