import BlockButton from '../components/BlockButton'
import MarkButton from '../components/MarkButton'
import styles from '../styles/index.module.css'

const EditorTools =  () => {
    return (
        <div className={styles.tools_editor_container}>
            <BlockButton format={'h1'}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path fill="none" stroke="#000000"
                          d="m16 10l3-1v10M3 5v7m0 0v7m0-7h8m0-7v7m0 0v7"/>
                </svg>
            </BlockButton>
            <BlockButton format={'h2'}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path fill="none" stroke="#000000"
                          d="M15 12.5V12a3 3 0 0 1 3-3h.172a2.828 2.828 0 0 1 2 4.829L15 19h6M3 5v7m0 0v7m0-7h8m0-7v7m0 0v7"/>
                </svg>
            </BlockButton>
            <MarkButton format={'bold'}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 36 36">
                    <path fill="#000000"
                          d="M22.43 17.54a4.67 4.67 0 0 0 2.8-4.37v-.06a4.43 4.43 0 0 0-1.31-3.25a7.1 7.1 0 0 0-5.13-1.73h-7A1.71 1.71 0 0 0 10 9.86V26a1.72 1.72 0 0 0 1.74 1.74h7.33c4.37 0 7.25-1.88 7.25-5.38v-.06c0-2.66-1.59-3.98-3.89-4.76m-8.75-6.14h4.54c2 0 3.15.89 3.15 2.33v.06c0 1.68-1.36 2.49-3.38 2.49h-4.31ZM22.37 22c0 1.59-1.31 2.43-3.46 2.43h-5.23v-4.81h5c2.49 0 3.69.88 3.69 2.37Z"
                          className="clr-i-outline clr-i-outline-path-1"/>
                    <path fill="none" d="M0 0h36v36H0z"/>
                </svg>
            </MarkButton>
            <MarkButton format={'italic'}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 36 36">
                    <path fill="#000000"
                          d="M24.42 8H17.1a1.1 1.1 0 1 0 0 2.19h2.13l-6.12 15.36h-2.64a1.1 1.1 0 1 0 0 2.19h7.33a1.1 1.1 0 1 0 0-2.19h-2.29l6.13-15.36h2.78a1.1 1.1 0 1 0 0-2.19"
                          className="clr-i-outline clr-i-outline-path-1"/>
                    <path fill="none" d="M0 0h36v36H0z"/>
                </svg>
            </MarkButton>
            <MarkButton format={'underline'}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 16 16">
                    <path fill="#000000"
                          d="M5.5 2.5a.5.5 0 0 0-1 0v5a3.5 3.5 0 1 0 7 0v-5a.5.5 0 0 0-1 0v5a2.5 2.5 0 0 1-5 0zM4.5 13a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1z"/>
                </svg>
            </MarkButton>
            <BlockButton format={'ol'}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 16 16">
                    <g fill="#000000">
                        <path
                            d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5"/>
                        <path
                            d="M1.713 11.865v-.474H2c.217 0 .363-.137.363-.317c0-.185-.158-.31-.361-.31c-.223 0-.367.152-.373.31h-.59c.016-.467.373-.787.986-.787c.588-.002.954.291.957.703a.595.595 0 0 1-.492.594v.033a.615.615 0 0 1 .569.631c.003.533-.502.8-1.051.8c-.656 0-1-.37-1.008-.794h.582c.008.178.186.306.422.309c.254 0 .424-.145.422-.35c-.002-.195-.155-.348-.414-.348h-.3zm-.004-4.699h-.604v-.035c0-.408.295-.844.958-.844c.583 0 .96.326.96.756c0 .389-.257.617-.476.848l-.537.572v.03h1.054V9H1.143v-.395l.957-.99c.138-.142.293-.304.293-.508c0-.18-.147-.32-.342-.32a.33.33 0 0 0-.342.338zM2.564 5h-.635V2.924h-.031l-.598.42v-.567l.629-.443h.635z"/>
                    </g>
                </svg>
            </BlockButton>
            <BlockButton format={'ul'}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 56 56">
                    <path fill="#000000"
                          d="M7.34 16.762a2.936 2.936 0 0 0 2.953-2.93a2.94 2.94 0 0 0-2.953-2.953a2.956 2.956 0 0 0-2.953 2.953c0 1.617 1.336 2.93 2.953 2.93m10.36-1.055h32.015c1.078 0 1.898-.82 1.898-1.875c0-1.078-.82-1.898-1.898-1.898H17.699c-1.055 0-1.875.82-1.875 1.898a1.85 1.85 0 0 0 1.875 1.875M7.34 30.941a2.94 2.94 0 0 0 2.953-2.953a2.94 2.94 0 0 0-2.953-2.953a2.956 2.956 0 0 0-2.953 2.953a2.956 2.956 0 0 0 2.953 2.953m10.36-1.054h32.015a1.876 1.876 0 0 0 1.898-1.899c0-1.054-.82-1.875-1.898-1.875H17.699a1.85 1.85 0 0 0-1.875 1.875c0 1.055.82 1.899 1.875 1.899M7.34 45.12a2.956 2.956 0 0 0 2.953-2.953a2.94 2.94 0 0 0-2.953-2.953a2.956 2.956 0 0 0-2.953 2.953A2.97 2.97 0 0 0 7.34 45.12m10.36-1.078h32.015c1.078 0 1.898-.82 1.898-1.875c0-1.078-.82-1.898-1.898-1.898H17.699c-1.055 0-1.875.82-1.875 1.898a1.85 1.85 0 0 0 1.875 1.875"/>
                </svg>
            </BlockButton>
            <BlockButton format={'left'}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 56 56">
                    <path fill="#000000"
                          d="M6.168 11.36h43.64c1.008 0 1.805-.774 1.805-1.782c0-.984-.797-1.758-1.804-1.758H6.168c-1.008 0-1.781.774-1.781 1.758a1.75 1.75 0 0 0 1.78 1.781m17.297 12.28h26.344c1.008 0 1.804-.773 1.804-1.78c0-.985-.797-1.758-1.804-1.758H23.465a1.76 1.76 0 0 0-1.782 1.757c0 1.008.797 1.782 1.782 1.782M6.168 35.923h43.64a1.786 1.786 0 0 0 1.805-1.781c0-.985-.797-1.758-1.804-1.758H6.168c-1.008 0-1.781.773-1.781 1.758c0 .984.773 1.78 1.78 1.78M23.465 48.18h26.344c1.008 0 1.804-.774 1.804-1.758s-.797-1.781-1.804-1.781H23.465a1.78 1.78 0 0 0-1.782 1.78a1.76 1.76 0 0 0 1.782 1.759"/>
                </svg>
            </BlockButton>
            <BlockButton format={'center'}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 56 56">
                    <path fill="#000000"
                          d="M6.168 11.36h43.64c1.008 0 1.805-.774 1.805-1.782c0-.984-.797-1.758-1.804-1.758H6.168c-1.008 0-1.781.774-1.781 1.758a1.75 1.75 0 0 0 1.78 1.781m8.648 12.28H41.16c1.008 0 1.805-.773 1.805-1.78c0-.985-.797-1.758-1.805-1.758H14.816a1.76 1.76 0 0 0-1.78 1.757c0 1.008.796 1.782 1.78 1.782M6.168 35.923h43.64a1.786 1.786 0 0 0 1.805-1.781c0-.985-.797-1.758-1.804-1.758H6.168c-1.008 0-1.781.773-1.781 1.758c0 .984.773 1.78 1.78 1.78m8.648 12.258H41.16c1.008 0 1.805-.774 1.805-1.758s-.797-1.781-1.805-1.781H14.816a1.78 1.78 0 0 0-1.78 1.78a1.76 1.76 0 0 0 1.78 1.759"/>
                </svg>
            </BlockButton>
            <BlockButton format={'right'}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 56 56">
                    <path fill="#000000"
                          d="M6.168 11.36h43.64c1.008 0 1.805-.774 1.805-1.782c0-.984-.797-1.758-1.804-1.758H6.168c-1.008 0-1.781.774-1.781 1.758a1.75 1.75 0 0 0 1.78 1.781m0 12.28h26.344c.984 0 1.804-.773 1.804-1.78c0-.985-.82-1.758-1.804-1.758H6.168c-1.008 0-1.781.773-1.781 1.757c0 1.008.773 1.782 1.78 1.782m0 12.282h43.64a1.786 1.786 0 0 0 1.805-1.781c0-.985-.797-1.758-1.804-1.758H6.168c-1.008 0-1.781.773-1.781 1.758c0 .984.773 1.78 1.78 1.78m0 12.258h26.344c.984 0 1.804-.774 1.804-1.758s-.82-1.781-1.804-1.781H6.168a1.766 1.766 0 0 0-1.781 1.78c0 .985.773 1.759 1.78 1.759"/>
                </svg>
            </BlockButton>
        </div>
    )
};

export default EditorTools;
