import { Link } from "react-router-dom";
import { getGameRoute, PAGES } from "..";

export default function P1() {
    return (
        <div>
            <h1>Rules</h1>
            <ul>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, hic dolorum ut pariatur repellat ullam? Et voluptatum perspiciatis aspernatur consequatur praesentium quia ea, nulla sunt nisi. Fugiat repudiandae nemo sunt.</li>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi expedita dolorem delectus nostrum doloribus officia nam nihil quia, hic fuga vitae atque inventore voluptas dolore aut fugit error asperiores doloremque!</li>
                <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum sed aliquid eius laborum distinctio quia architecto nam asperiores labore illo eveniet eaque praesentium adipisci accusamus enim nulla, quisquam atque velit!</li>  
                <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis quia, earum cupiditate, quaerat ipsam distinctio commodi ea nobis molestiae amet impedit explicabo obcaecati molestias hic cum? Accusamus ullam magnam fugit.</li>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti voluptatum perferendis laborum atque voluptas delectus cupiditate, consectetur, quaerat nostrum fuga eligendi accusamus assumenda reprehenderit, libero sequi culpa? Eos, ipsam cumque.</li>
            </ul>
            <Link to={getGameRoute(PAGES.pa2)}>next</Link>
        </div>
    );
}