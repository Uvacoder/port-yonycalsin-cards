import React, { Component } from 'react'
import tania from '../../content/images/tania-avatar.jpg'
import patreon from '../../content/thumbnails/patreon.png'
import kofi from '../../content/thumbnails/kofi.png'

export default class UserInfo extends Component {
   render() {
      return (
         <aside className="note">
            <div className="container note-container">
               <div className="flex-author">
                  <div className="flex-avatar">
                     <img className="avatar" src={tania} alt="Yoni Calsin" />
                  </div>
                  <div>
                     <p>
                        Soy Yoni Calsin. Documento todo lo que aprendo y ayudo a miles de personas a comenzar a codificar carreras.{' '}
                        <strong>
                           Si disfrutas de mi contenido, considera apoyar lo que hago.
                </strong>
                     </p>

                     <div className="flex">
                        <a
                           href="https://ko-fi.com/yonicb"
                           className="donate-button"
                           target="_blank"
                           rel="noopener noreferrer"
                        >
                           <img src={kofi} className="coffee-icon" alt="Coffee icon" />
                           Cómprame un café
                </a>
                        <a
                           className="patreon-button"
                           href="https://www.patreon.com/yonicb"
                           target="_blank"
                           rel="noopener noreferrer"
                        >
                           <img src={patreon} height="50" width="50" alt="Patreon" /> Conviértase en mi patrocinador
                </a>
                     </div>
                  </div>
               </div>
            </div>
         </aside>
      )
   }
}