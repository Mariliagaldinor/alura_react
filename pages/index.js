import config from "../config.json";
import styled from "styled-components";
import { CSSReset } from "../src/components/CSSReset";
import Menu from "../src/components/Menu";
import { StyledTimeline } from "../src/components/Timeline";

function HomePage() {
    const estilosHomePage = {
    }
    //console.log(config.playlist)

    return (
        <>
            <CSSReset/>
            <div style={estilosHomePage}>
                <Menu />
                <Header />
                <Timeline playlist={config.playlist} />
            </div>
        </>        
    )
}
  export default HomePage

//style com style-components
const StyleHeader = styled.div`
    img {
        width:80px;
        height:80px;
        border-radius:50%;
    }
    .user-info {
        margin-top: 50px;
        display: flex;
        align-items: center;
        width: 100%;
        padding: 16px 32px;        
    }
`;
function Header() {
    return (
        <StyleHeader>
            <section className="user-info">
                <img src={`https://github.com/${config.github}.png`}/>
                {config.name}
                <br></br>
                {config.job}
            </section>
        </StyleHeader>
    )
}

function Timeline(propriedade) {
    console.log(propriedade.playlist);
    const playlistNames = Object.keys(propriedade.playlist);

    return (
        <StyledTimeline>
            {playlistNames.map((playlistName) => {
                const videos = propriedade.playlist[playlistName];
                console.log(playlistNames);
                console.log(videos);
                return (
                    <section>
                        <h2>{playlistName}</h2>
                        <div>
                            {videos.map((video)=> {
                                return(
                                    <a href={video.url}>
                                        <img src={video.thumb}/>
                                        <span>
                                            {video.title}
                                        </span>
                                    </a>
                                )
                            })};
                        </div>
                    </section>
                )
            })}
        </StyledTimeline>
    )
}