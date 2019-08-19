import React from 'react';
import './User.css';

const userOutput = (props) => {
  return (
    <div className="user-story">
      <p><strong>{props.username}:</strong> My carer. She cares so I don't have to. Big scarf, bow tie, big embarrassing. That's a relief. I hate babysitters. Kidneys! I have kidneys. And I don't like the colour. Well, I would say that that person would be an egomaniac, need, game-player sort of person. Please just... just see me. I don't need a sword. Because I'm the Doctor ... and this is my spoon. Well, you're very similar heights. Maybe you should wear labels. Shut it, Hoodie! Be a pal and tell me, Am I a good man? It’s a bit more exciting when you go the other way.</p>
      <p><strong>{props.username}:</strong> Don't be lasagna. I was being chased by a giant dinosaur, but I think I've managed to give it the slip. Oh, you've got a dinosaur too! What do you think of the new look? I was hoping for 'minimalism', but I think I came up with 'magician'. Soon, I expect. Or later. One of those. You see when I started, all those years ago, I was just running. I called myself the Doctor but it was just a name. Then I went to Skaro. And I met you lot. And I understood who I was. I am totally against bantering. The Doctor. Nosey parker.</p>
    </div>
  )
};

export default userOutput;
