import styles from './Player.module.css'

function Player({ video }) {
    return (
        <div className={styles.player}>
                        <p>{video.description}</p>
            <iframe
                width="1200"
                height="600"
                src={video.url}
                title={video.titulo}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
            ></iframe>
        </div>
    );
}

export default Player;