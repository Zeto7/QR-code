import { Link } from "react-router-dom";
import s from'./Navigation.module.css';


export const Navigation = () => {
    return (
        <nav className={s.container}>
            <Link to="/generate">Сгенерировать QR</Link>
            <Link to="/scan">Отсканировать QR</Link>
            <Link to="/generateHistory">История генерирования QR</Link>
            <Link to="/scanHistory">История сканирования QR</Link>
        </nav>
    );
};