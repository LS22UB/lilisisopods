export const goTo = (el: HTMLElement): void => {
    const elementRect = el.getBoundingClientRect();
    const elementTop = elementRect.top + window.pageYOffset; // Absolute position from the top of the document
    const viewportHeight = window.innerHeight;

    // Calculate the scroll position so the top of the element is centered in the viewport
    const middlePosition = elementTop - (viewportHeight / 5 - el.offsetHeight / 2);

    window.scrollTo({
        top: middlePosition,
        behavior: 'smooth'
    });
};


/* 
export const goToTextsAndOpenCollapsible = ({collapseId, path}: {collapseId: string, path: string}) => {
    const navigate = useNavigate();
    navigate(`${path}${collapseId}`);
};
export const goToPagesAndOpenTab = (tabId: string, path: string) => {
    const navigate = useNavigate();
    navigate(`${path}${tabId}`);
}; */