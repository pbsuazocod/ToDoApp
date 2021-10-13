{
    "name": "Living Room Cam",
    "manufacture": "WYZE",
    "model": "V2",
    "videoConfig": {
        "source": "-rtsp_transport tcp -i rtsp://Admin:Newfiebort@192.168.1.230/live",
        "stillImageSource": "-rtsp_transport tcp -i rtsp://Admin:Newfiebort@192.168.1.230/live -vframes 1 -r 1",
        "vcodec": "copy",
        "maxStreams": 2,
        "motion": true,
        "maxWidth": 1280,
        "maxHeight": 720,
        "maxFPS": 15,
        "audio": true,
        "additionalCommandline": "-x264-params intra-refresh=1:bframes=0"
    },
    "platform": "Dafang"
}