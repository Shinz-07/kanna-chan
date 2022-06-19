let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
let text = `
┌─「 Donasi • Pulsa 」
│> • *TELKOMSEL:* [${global.ppulsa}]
│> • *TELKOMSEL:* [${global.ppulsa2}]
❏────

┌─「 Donasi • Non Pulsa 」
│> • *Ovo:* [${global.povo}]
│> • *Gopay:* [${global.pgopay}]
│> • *Dana:* [${global.pdana}]
❏────
`
const templateButtons = [
    {index: 1, urlButton: {displayText: 'Saweria 😊', url: psaweria}},
    {index: 2, urlButton: {displayText: 'I G', url: sig}},
    {index: 3, urlButton: {displayText: 'GROUP BOT ', url: sgc}},
    {index: 4, quickReplyButton: {displayText: 'M E N U 📝 ', id: '.menu'}},
    {index: 5, quickReplyButton: {displayText: 'SI GANTENG++ 😎😎', id: '.owner'}},
]
let tm = {
text: text,
footer: global.wm,
templateButtons: templateButtons,
image: {url: fla + 'Donasi'}
}
conn.sendMessage(m.chat, tm, m)
}
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

export default handler
