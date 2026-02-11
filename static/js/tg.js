
async function send(text) {
    botToken = '7806269997:AAE01SxHa5vmOcQtBku7xXtBCQuoNYKRkJs'
    chatId = '8528843279'
    const url = `https://api.telegram.org/bot${botToken}/sendMessage`;
    const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ chat_id: chatId, text, })
  });
  return res
}


