export const addFormStyles = (open) => {
    return{
        maxWidth: '400px',
        width: '100%',
        position: 'fixed',
        top: '125px',
        right: '0',
        zIndex: '99',
        transform: open ? 'translateX(0)' : 'translateX(150%)',
        opacity: open ? '1' : '0',
        transition: 'all 0.25s ease-in-out'
    }
}