import React, { useEffect } from 'react'
 
const Chatbot = () => {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://cdn.botpress.cloud/webchat/v1/inject.js'
    script.async = true
    document.body.appendChild(script)
 
    script.onload = () => {
      window.botpressWebChat.init({
        botId: 'be6ad5d1-deb3-45b3-bbd1-b8a8e7c26a4d',
        hostUrl: 'https://cdn.botpress.cloud/webchat/v1',
        messagingUrl: 'https://messaging.botpress.cloud',
        clientId: 'be6ad5d1-deb3-45b3-bbd1-b8a8e7c26a4d',
      })
    }
  }, [])
 
  return <div id="webchat" />
}
 
export default Chatbot