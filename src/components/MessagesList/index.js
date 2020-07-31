import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const MessageList = ({ list, user }) => {
  // Ici je prépare une variable qui contiendra une référence à la div qui liste les messages dans le dom.
  // Comme elle n'existe pas encore, je donne null comme valeur. Et dans le render, j'informe react que je souhaite
  // mettre la div qui liste les messages en référence dans cette variable
  const containerElement = useRef(null);
  
  // A chaque fois que la liste change, j'exécute cette fonction
  useEffect(() => {
    // Je récupère la hauteur de la div de messages (containerElement.current)
    const scrollY = containerElement.current.scrollHeight;
    // Je la scrolle verticalement
    containerElement.current.scrollTo(0, scrollY);
  }, [list]);
  
  // Je mets une ref sur la div qui liste des messages, pour pouvoir y accéder dans la variable
  // container element
  return (
    <div ref={containerElement} className="message-list">
      {list.map((messageObject) => <Message key={messageObject.id} {...messageObject} connectedUser={user} />)}
    </div>
  );
};
const Message = ({ author, content, connectedUser }) => (
  <div className={connectedUser === author ? 'message' : 'message right'}>
    <div className="message_author">{author}</div>
    <div className="message_content">{content}</div>
  </div>
);

MessageList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object).isRequired,
  user: PropTypes.string.isRequired,
};

Message.propTypes = {
  author: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default MessageList;
