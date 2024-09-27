import QrScanner from 'qr-scanner';
import { useEffect, useRef, useState } from 'react';

const Qrscanner = () => {   

    const [scanResult, setScanResult] = useState(null);
    const videoElem = useRef(null)

    let scanner
    
    useEffect(() => {

        scanner = new QrScanner(videoElem.current, result => setScanResult(result), {
                onDecodeError: onError,
                highlightScanRegion: true,
                highlightCodeOutline: true,
            }
        
        )

        function onError(error){
            console.log(error)
        }
    });


    return <>
        <button onClick={() => scanner.start()}>Scanear</button>
        <video ref= {videoElem}></video>

        {scanResult && <h1>{scanResult}</h1>}
    </>
}



export default Qrscanner;