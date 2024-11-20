import {QrCodeGenerator} from './Components/Generate/QrCodeGenerator'
import {QrCodeScanner} from './Components/Scan/QrCodeScanner'
import {Navigation} from './Components/Navigation/Navigation'
import {ScanHistory} from './Components/ScanHistory'
import {GenerateHistory} from './Components/GenerateHistory'
import { Routes, Route } from 'react-router-dom';

export const Layout = () => {
    return (
        <div>
            <Navigation />

            <Routes>
                <Route path="/generate" element={<QrCodeGenerator />} />
                <Route path="/scan" element={<QrCodeScanner />} />
                <Route path="/generateHistory" element={<GenerateHistory />} />
                <Route path="/scanHistory" element={<ScanHistory />} />
            </Routes>
        </div>
    );
};