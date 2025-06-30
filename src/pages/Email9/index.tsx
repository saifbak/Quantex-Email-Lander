import { PlayCircle } from "lucide-react";
import React, { useRef, useState } from "react";
import ReactPlayer from "react-player";

const EmailTemplatePage5 = () => {
    const playerRef = useRef(null)
    const [videoStarted, setVideoStarted] = useState(false);
    const [videoEnded, setVideoEnded] = useState(false);

    const handlePlay = () => {
        setVideoStarted(true);
        setVideoEnded(false);
    };

    const handleReplay = () => {
        if (playerRef.current) {
            playerRef.current.seekTo(0);
        }
        setVideoEnded(false);
        setVideoStarted(true);
    };

    return (
        <div
            style={{
                minHeight: "100vh",
                width: "100vw",
                background: "#f7f7fb",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: 0,
                padding: 0,
            }}
        >
            <div style={{ position: "relative", display: "inline-block" }}>
                <img
                    src="/image/email9.jpg"
                    alt="Email Template"
                    style={{
                        maxWidth: "100vw",
                        maxHeight: "100vh",
                        height: "auto",
                        boxShadow: "0 8px 48px rgba(30,39,82,0.09)",
                        borderRadius: "12px",
                        background: "#fff",
                        display: "block",
                    }}
                />

                {/* Overlay the video player over the woman's square */}
                <div
                    style={{
                        position: "absolute",
                        left: "50%",
                        top: "41.5%", // Tweak these values as needed!
                        transform: "translate(-50%, 0)",
                        width: "75.5%",
                        height: "22.4%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        overflow: "hidden",
                        boxShadow: "0 4px 32px rgba(0,0,0,0.12)",
                    }}
                >
                    <ReactPlayer
                        ref={playerRef}
                        url="/videos/video9.mp4"
                        playing={videoStarted}
                        // controls={true}
                        width="100%"
                        height="100%"
                        style={{ background: "#000" }}
                        onEnded={() => setVideoEnded(true)}
                    />

                    {/* Play button overlay, only before play */}
                    {!videoStarted && (
                        <div style={{
                            position: "absolute",
                            inset: 0,
                            zIndex: 10,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            background: "rgba(0,0,0,0.4)",
                            cursor: "pointer",
                        }}>
                            <button
                                onClick={handlePlay}
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    border: "none",
                                    background: "none",
                                }}
                            >
                                <PlayCircle className="w-20 h-20 text-white drop-shadow-lg" />
                                <span style={{ marginTop: 8, color: "#fff", fontSize: "1.25rem", fontWeight: 500 }}>
                                    Play Video
                                </span>
                            </button>
                        </div>
                    )}

                    {/* Replay button overlay, after video ends */}
                    {videoEnded && videoStarted && (
                        <div style={{
                            position: "absolute",
                            inset: 0,
                            zIndex: 11,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            background: "rgba(0,0,0,0.4)",
                            cursor: "pointer",
                        }}>
                            <button
                                onClick={handleReplay}
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    border: "none",
                                    background: "none",
                                }}
                            >
                                <PlayCircle className="w-16 h-16 text-white drop-shadow-lg" />
                                <span style={{ marginTop: 8, color: "#fff", fontSize: "1rem", fontWeight: 500 }}>
                                    Replay
                                </span>
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default EmailTemplatePage5;
