const { Telegraf } = require('telegraf');
// const { message } = require('telegraf/filters');
const {axios} = require('axios')

let binarysearch= `
binarySearch(arr, x, low, high)
repeat till low = high
       mid = (low + high)/2
           if (x == arr[mid])
           return mid

           else if (x > arr[mid]) // x is on the right side
               low = mid + 1

           else                  // x is on the left side
               high = mid - 1

`;


const bot = new Telegraf("6240729337:AAFw-jCAOtBPefo-PSZ1hunmmsn3FuDlCiQ");
bot.start((ctx) => ctx.reply('Welcome to new coding bot from jash'));
bot.command('binarysearchjs',(ctx) => ctx.reply(binarysearch))
bot.help((ctx) => ctx.reply('Send me a sticker'));
// bot.on(message('sticker'), (ctx) => ctx.reply('👍'));
bot.on('sticker', (ctx) => ctx.reply('👍'));
bot.command('treejs', async function (ctx) {

 const response= await axios.get("https://raw.githubusercontent.com/jash459/DSA-BUSTED/main/Add%20Binary.cpp")
 console.log(response.data)
 return ctx.reply(response.data)
})
bot.hears('hi', (ctx) => ctx.reply('Hey there'));
bot.launch();