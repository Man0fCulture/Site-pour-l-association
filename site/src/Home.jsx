import React from 'react';

const presentation = [
  "Connection",
  "Agenda",
  "Membres",
  "Contacter"
]

function Home() {
    return (
      <div>
      <p>Enzo President</p>
        <video width="640" height="360" controls>
          <source src="src/Video/video_test.mp4" type="video/mp4" />
          Votre navigateur ne supporte pas la balise vidéo.
        </video>

        <ul>
          {presentation.map((presentation) => (
            <li key={presentation}>{presentation}</li>
          ))}
        </ul>
        </div>
    )
}

export default Home;