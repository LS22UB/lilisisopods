/* import { openThem } from "../contents";
 */
import { goTo } from "../utils/goto";
interface ScrollLinkProps {
    targetId: string;
    label?: string;
    children?: React.ReactNode;
    openThis?:  string;   /*(_event: MouseEvent<HTMLElement, MouseEvent>) => void; */
}
interface SupScrollLinkProps {
    label: string;
}

export const ScrollLink: React.FC<ScrollLinkProps> = ({ targetId, label }) => {
    const handleClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        event.preventDefault(); // Prevent default anchor behavior
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            const elementRect = targetElement.getBoundingClientRect();
            const elementTop = elementRect.top + window.scrollY;
            const viewportHeight = window.innerHeight;
            const scrollOffset = elementTop - (viewportHeight / 5 - targetElement.offsetHeight / 2);
            
            console.log(`Element Top: ${elementTop}`);
            console.log(`Viewport Height: ${viewportHeight}`);
            console.log(`Scroll Offset: ${scrollOffset}`);
            
            window.scrollTo({
                top: scrollOffset,
                behavior: "smooth"
            });
            console.log(`Scrolled to ${targetId}`)
        } else {
            console.error(`Element with ID ${targetId} not found.`);
        }
    };

    return (
        <a className="scrolllink" href={`#${targetId}`} onClick={handleClick}>
            <span>{label}</span>
        </a>
    );
};


export const SupScrollLink : React.FC<SupScrollLinkProps> = ({label }) => {
    let targetId = "desc-" + label
    const handleClick = () => {
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            goTo(targetElement);
        }
    };

    return (
       <sup><a onClick={handleClick}>
            {label}
        </a>
        </sup> 
    );
};
/* export const ScrollLink: React.FC<ScrollLinkProps> = ({ targetId, label }) => {
    const handleClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        event.preventDefault(); // Prevent default anchor behavior
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            goTo(targetElement);
        }
    };

    return (
        <a href={`#${targetId}`} onClick={handleClick}>
            {label}
        </a>
    );
}; */


/* export const ScrollLinkSidebar: React.FC<OpenScrollLinkWithChildProps> = ({ targetId, children, openThis}) => {
    const handleClick = () => {
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            goTo(targetElement);
        }
        openThem({it: openThis}); 
    };
    
    return (
        <a onClick={handleClick}>
            {children}
        </a>
    );
}; */

 export const ScrollLinkWithChild: React.FC<ScrollLinkProps> = ({ targetId, children }) => {
    const handleClick = () => {
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            goTo(targetElement);
        }
    };

    return (
        <a onClick={handleClick}>
            {children}
        </a>
    );
}; 