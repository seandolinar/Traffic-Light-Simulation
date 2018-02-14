  // adapted from https://developer.mozilla.org/en-US/docs/Web/API/AnalyserNode
  


//   setTimeout(() => {
//      }, 5000)

class ActuateClap  {

    constructor() {
        this.audioCtx = new (window.AudioContext || window.webkitAudioContext)(); // define audio context
        this.on = true
        this.actuate = () => {}
    }
    
    start () {
        navigator.getUserMedia = (navigator.getUserMedia ||
            navigator.webkitGetUserMedia ||
            navigator.mozGetUserMedia ||
            navigator.msGetUserMedia);

        let analyser = this.audioCtx.createAnalyser();
        analyser.fftSize = 2048;
        const bufferLength = analyser.frequencyBinCount;
        let dataArray = new Uint8Array(bufferLength);

        navigator.getUserMedia (
        {
        audio: true
        },
        (stream) => {
            let source = this.audioCtx.createMediaStreamSource(stream);
            source.connect(analyser);
        }, 
        function() {}
        )


        const audio = () => {

        this.on && requestAnimationFrame(audio)

        analyser.getByteTimeDomainData(dataArray);
        const clap = dataArray.reduce((p,c) => {
            return Math.max(p,c)
        }) 
        clap > 250 && this.actuate()
        }
        audio()
    }

    stop () {
        this.on = false
        this.audioCtx.close()
        cancelAnimationFrame(audio)
    }

    setActuate (val) {
        this.actuate = val
    }

  
}

export default ActuateClap
