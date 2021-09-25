import { FunctionalComponent, h } from 'preact';
import bootstrap from "bootstrap/dist/css/bootstrap.css"
import style from "./style.css";

const Media : FunctionalComponent = () => {
    return (
        <main class={style.main}>
        <div class={bootstrap.container}>
            <div class={bootstrap.col4}>
                Media   
            </div>
            <div class={bootstrap.col4}>
                Media   
            </div>
            <div class={bootstrap.col4}>
                Media   
            </div>
        </div>
        </main>
    );
};

export default Media;