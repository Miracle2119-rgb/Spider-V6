//Bot by 𝕶𝖎𝖓𝖌 𝕾𝖆𝖒//


require("./all/module")
global.owner = "2347049602299" 
global.namaCreator = "𝐃𝐄𝐌𝐎𝐍 𝐌-𝐂𝐑𝐎𝐒𝐒" 
global.autoJoin = false 
global.antilink = false 
global.versisc = '6.0' 
global.codeInvite = "https://Wa.me/2347049602299?text=Boss%20ＫＩＮＧ🍀Ｍ-ＣＲＯＳＳ%20my%20name%20is___%20and%20I've%20saved%20your%20contact%20you%20should%20please%20save%20mine%20too%20%20✅"
global.isLink = 'https://Wa.me/2347049602299?text=Boss%20ＫＩＮＧ🍀Ｍ-ＣＲＯＳＳ%20my%20name%20is___%20and%20I,ve%20saved%20your%20contact%20you%20should%20please%20save%20mi'
global.sessionName = 'session'
global.thumb = fs.readFileSync("./thumb.png") 
global.audionya = fs.readFileSync("./all/sound.mp3") 
global.packname = "𝐃𝐄𝐌𝐎𝐍 𝐌-𝐂𝐑𝐎𝐒𝐒" 
global.author = "𝐃𝐄𝐌𝐎𝐍-𝛁6" 
global.jumlah = "5" 
global.namabot = "𝐃𝐄𝐌𝐎𝐍-𝛁6" 
global.domain = 'https://mcrossbot.me.id' // your domian
global.apikey = 'ptla_VRxkhvalZQ3EhHyAax9QYxgT5cbsx2MrO69gBpVZmmd' // Isi Apikey Plta Lu
global.capikey = 'ptlc_sQ3d4GxCiztyV5DbhUJSWtvnSCyKzeMXoWIr2lVyqal' // Isi Apikey Pltc Lu
global.eggsnya = '15' // id eggs yang dipakai
global.location = '1' // id location
global.apilinode = ''
global.apitokendo = ''
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
