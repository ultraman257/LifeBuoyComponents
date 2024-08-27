import { useRef, useState } from 'react';
import * as PropTypes from 'prop-types';
import { AnimatePresence, motion } from 'framer-motion';

import './style.css';

export const Header = ({ user, isLoggedIn, superMenuOverride }) => {
    const menuRef = useRef(null);

    const [superMenu, setSuperMenu] = useState(false);

    const closeMenu = ev => {
        if (menuRef.current && !menuRef.current.contains(ev.target)) {
            setSuperMenu(false);
        }

        // document.removeEventListener("mousedown", closeMenu)
    };

    const toggleSuperMenu = () => {
        if (!isLoggedIn && !superMenuOverride) return;

        setSuperMenu(!superMenu);

        if (superMenu) document.addEventListener('mousedown', closeMenu);
    };

    return (
        <div className={'page-header'}>
            <div className={'header-content'}>
                {isLoggedIn ? (
                    <ul>
                        <li>Home</li>
                        <li>Lists</li>
                    </ul>
                ) : null}
            </div>

            <div className={'logo-area'}>
                <h3 onClick={toggleSuperMenu}>LifeBuoy</h3>
                <AnimatePresence>
                    {superMenu ? (
                        <motion.div
                            key={'superMenu'}
                            className={'superMenu'}
                            ref={menuRef}
                            initial={{ opacity: 0, scale: 0.2, translateX: '-50%' }}
                            exit={{ opacity: 0, scale: 0.2, translateX: '-50%' }}
                            whileInView={{ opacity: 1, scale: 1, translateX: '-50%' }}
                        >
                            {superMenuOverride ? (
                                superMenuOverride
                            ) : (
                                <>
                                    <a href={'#'} className={'superMenu-item'}>
                                        <h4>Minimum Mode</h4>
                                        <p>
                                            Too much going on? Reduce everything down to the
                                            essentials.
                                        </p>
                                    </a>
                                    <a href={'#'} className={'superMenu-item'}>
                                        <h4>Toolbox</h4>
                                        <p>
                                            Useful tools to keep you productive, busy or
                                            entertained.
                                        </p>
                                    </a>
                                </>
                            )}
                        </motion.div>
                    ) : null}
                </AnimatePresence>
            </div>

            <div className={'user'}>
                {isLoggedIn ? (
                    <div className={'avatar'}>
                        <span>Hey, {user.name}</span>
                    </div>
                ) : null}
            </div>
        </div>
    );
};

Header.propTypes = {
    user: PropTypes.shape({
        name: PropTypes.string.isRequired
    }),
    isLoggedIn: PropTypes.bool.isRequired
};

Header.defaultProps = {
    user: null
};
