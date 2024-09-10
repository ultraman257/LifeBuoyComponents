import * as PropTypes from 'prop-types';

import './style.module.css';

import { motion, AnimatePresence, useAnimate } from 'framer-motion';
import { useEffect, useState } from 'react';

export const Button = ({ onClick, content = 'Button', hasConfetti = false }) => {
    // TODO: Cleanup this awful code
    const [scope, animate] = useAnimate();

    const handleClick = e => {
        // Skip if we're already running an animation
        // Pass the click to the parent
        if (onClick) onClick(e);
        // Check for confetti and start the animation
        if (hasConfetti) {
            animateConfetti();
            // Remove items from the dom on animation completion
        }
    };

    const animateConfetti = () => {
        console.log('confetti');

        const randomAngle = () => {
            return Math.random() * Math.PI * 2;
        };

        const randomCircleCoordsX = () => {
            return Math.cos(randomAngle()) * 80;
        };

        const randomCircleCoordsY = () => {
            return Math.cos(randomAngle()) * 80;
        };

        const randomScale = () => {
            return Math.random() - 0.5 + 1;
        };

        animate([
            ["#conf-11", { opacity: 0, x: 0, y: 0, scale: randomScale() }, { at: 0, duration: 0 }],
            ["#conf-21", { opacity: 0, x: 0, y: 0, scale: randomScale() }, { at: 0, duration: 0 }],
            ["#conf-31", { opacity: 0, x: 0, y: 0, scale: randomScale() }, { at: 0, duration: 0 }],
            ["#conf-41", { opacity: 0, x: 0, y: 0, scale: randomScale() }, { at: 0, duration: 0 }],
            ["#conf-51", { opacity: 0, x: 0, y: 0, scale: randomScale() }, { at: 0, duration: 0 }],
            ["#conf-21", { opacity: 0, x: 0, y: 0, scale: randomScale() }, { at: 0, duration: 0 }],
            ["#conf-22", { opacity: 0, x: 0, y: 0, scale: randomScale() }, { at: 0, duration: 0 }],
            ["#conf-23", { opacity: 0, x: 0, y: 0, scale: randomScale() }, { at: 0, duration: 0 }],
            ["#conf-24", { opacity: 0, x: 0, y: 0, scale: randomScale() }, { at: 0, duration: 0 }],
            ["#conf-25", { opacity: 0, x: 0, y: 0, scale: randomScale() }, { at: 0, duration: 0 }],
            ["#conf-31", { opacity: 0, x: 0, y: 0, scale: randomScale() }, { at: 0, duration: 0 }],
            ["#conf-32", { opacity: 0, x: 0, y: 0, scale: randomScale() }, { at: 0, duration: 0 }],
            ["#conf-33", { opacity: 0, x: 0, y: 0, scale: randomScale() }, { at: 0, duration: 0 }],
            ["#conf-34", { opacity: 0, x: 0, y: 0, scale: randomScale() }, { at: 0, duration: 0 }],
            ["#conf-35", { opacity: 0, x: 0, y: 0, scale: randomScale() }, { at: 0, duration: 0 }],
            ["#conf-41", { opacity: 0, x: 0, y: 0, scale: randomScale() }, { at: 0, duration: 0 }],
            ["#conf-42", { opacity: 0, x: 0, y: 0, scale: randomScale() }, { at: 0, duration: 0 }],
            ["#conf-43", { opacity: 0, x: 0, y: 0, scale: randomScale() }, { at: 0, duration: 0 }],
            ["#conf-44", { opacity: 0, x: 0, y: 0, scale: randomScale() }, { at: 0, duration: 0 }],
            ["#conf-45", { opacity: 0, x: 0, y: 0, scale: randomScale() }, { at: 0, duration: 0 }],
            ["#conf-51", { opacity: 0, x: 0, y: 0, scale: randomScale() }, { at: 0, duration: 0 }],
            ["#conf-52", { opacity: 0, x: 0, y: 0, scale: randomScale() }, { at: 0, duration: 0 }],
            ["#conf-53", { opacity: 0, x: 0, y: 0, scale: randomScale() }, { at: 0, duration: 0 }],
            ["#conf-54", { opacity: 0, x: 0, y: 0, scale: randomScale() }, { at: 0, duration: 0 }],
            ["#conf-55", { opacity: 0, x: 0, y: 0, scale: randomScale() }, { at: 0, duration: 0 }],
            ["#conf-11", { opacity: 1, x: randomCircleCoordsX(), y: randomCircleCoordsY(), scale: randomScale() }, { at: 0.05}],
            ["#conf-21", { opacity: 1, x: randomCircleCoordsX(), y: randomCircleCoordsY(), scale: randomScale() }, { at: 0.05}],
            ["#conf-31", { opacity: 1, x: randomCircleCoordsX(), y: randomCircleCoordsY(), scale: randomScale() }, { at: 0.05}],
            ["#conf-41", { opacity: 1, x: randomCircleCoordsX(), y: randomCircleCoordsY(), scale: randomScale() }, { at: 0.02}],
            ["#conf-51", { opacity: 1, x: randomCircleCoordsX(), y: randomCircleCoordsY(), scale: randomScale() }, { at: 0.05}],
            ["#conf-21", { opacity: 1, x: randomCircleCoordsX(), y: randomCircleCoordsY(), scale: randomScale() }, { at: 0.09}],
            ["#conf-22", { opacity: 1, x: randomCircleCoordsX(), y: randomCircleCoordsY(), scale: randomScale() }, { at: 0.05}],
            ["#conf-23", { opacity: 1, x: randomCircleCoordsX(), y: randomCircleCoordsY(), scale: randomScale() }, { at: 0.01}],
            ["#conf-24", { opacity: 1, x: randomCircleCoordsX(), y: randomCircleCoordsY(), scale: randomScale() }, { at: 0.05}],
            ["#conf-25", { opacity: 1, x: randomCircleCoordsX(), y: randomCircleCoordsY(), scale: randomScale() }, { at: 0.05}],
            ["#conf-31", { opacity: 1, x: randomCircleCoordsX(), y: randomCircleCoordsY(), scale: randomScale() }, { at: 0.05}],
            ["#conf-32", { opacity: 1, x: randomCircleCoordsX(), y: randomCircleCoordsY(), scale: randomScale() }, { at: 0.05}],
            ["#conf-33", { opacity: 1, x: randomCircleCoordsX(), y: randomCircleCoordsY(), scale: randomScale() }, { at: 0.05}],
            ["#conf-34", { opacity: 1, x: randomCircleCoordsX(), y: randomCircleCoordsY(), scale: randomScale() }, { at: 0.05}],
            ["#conf-35", { opacity: 1, x: randomCircleCoordsX(), y: randomCircleCoordsY(), scale: randomScale() }, { at: 0.05}],
            ["#conf-51", { opacity: 1, x: randomCircleCoordsX(), y: randomCircleCoordsY(), scale: randomScale() }, { at: 0.05}],
            ["#conf-52", { opacity: 1, x: randomCircleCoordsX(), y: randomCircleCoordsY(), scale: randomScale() }, { at: 0.05}],
            ["#conf-53", { opacity: 1, x: randomCircleCoordsX(), y: randomCircleCoordsY(), scale: randomScale() }, { at: 0.05}],
            ["#conf-54", { opacity: 1, x: randomCircleCoordsX(), y: randomCircleCoordsY(), scale: randomScale() }, { at: 0.05}],
            ["#conf-55", { opacity: 1, x: randomCircleCoordsX(), y: randomCircleCoordsY(), scale: randomScale() }, { at: 0.05}],
            ["#conf-51", { opacity: 1, x: randomCircleCoordsX(), y: randomCircleCoordsY(), scale: randomScale() }, { at: 0.05}],
            ["#conf-52", { opacity: 1, x: randomCircleCoordsX(), y: randomCircleCoordsY(), scale: randomScale() }, { at: 0.05}],
            ["#conf-53", { opacity: 1, x: randomCircleCoordsX(), y: randomCircleCoordsY(), scale: randomScale() }, { at: 0.05}],
            ["#conf-54", { opacity: 1, x: randomCircleCoordsX(), y: randomCircleCoordsY(), scale: randomScale() }, { at: 0.05}],
            ["#conf-55", { opacity: 1, x: randomCircleCoordsX(), y: randomCircleCoordsY(), scale: randomScale() }, { at: 0.05}],
            ["#conf-11", { opacity: 0, scale: 0 }, { at: 0.6}],
            ["#conf-21", { opacity: 0, scale: 0 }, { at: 0.6}],
            ["#conf-31", { opacity: 0, scale: 0 }, { at: 0.6}],
            ["#conf-41", { opacity: 0, scale: 0 }, { at: 0.6}],
            ["#conf-51", { opacity: 0, scale: 0 }, { at: 0.6}],
            ["#conf-21", { opacity: 0, scale: 0 }, { at: 0.6}],
            ["#conf-22", { opacity: 0, scale: 0 }, { at: 0.6}],
            ["#conf-23", { opacity: 0, scale: 0 }, { at: 0.6}],
            ["#conf-24", { opacity: 0, scale: 0 }, { at: 0.6}],
            ["#conf-25", { opacity: 0, scale: 0 }, { at: 0.6}],
            ["#conf-31", { opacity: 0, scale: 0 }, { at: 0.6}],
            ["#conf-32", { opacity: 0, scale: 0 }, { at: 0.6}],
            ["#conf-33", { opacity: 0, scale: 0 }, { at: 0.6}],
            ["#conf-34", { opacity: 0, scale: 0 }, { at: 0.6}],
            ["#conf-35", { opacity: 0, scale: 0 }, { at: 0.6}],
            ["#conf-41", { opacity: 0, scale: 0 }, { at: 0.6}],
            ["#conf-41", { opacity: 0, scale: 0 }, { at: 0.6}],
            ["#conf-41", { opacity: 0, scale: 0 }, { at: 0.6}],
            ["#conf-41", { opacity: 0, scale: 0 }, { at: 0.6}],
            ["#conf-41", { opacity: 0, scale: 0 }, { at: 0.6}],
            ["#conf-51", { opacity: 0, scale: 0 }, { at: 0.6}],
            ["#conf-51", { opacity: 0, scale: 0 }, { at: 0.6}],
            ["#conf-51", { opacity: 0, scale: 0 }, { at: 0.6}],
            ["#conf-51", { opacity: 0, scale: 0 }, { at: 0.6}],
            ["#conf-51", { opacity: 0, scale: 0 }, { at: 0.6}]
        ])

            // animate(`#conf-${x}1`, { opacity: 0, x: 0, y: 0, scale: randomScale() })
            //     .then(() => {
            //         animate(`#conf-${x}2`, { opacity: 0, x: 0, y: 0, scale: randomScale() });
            //         animate(`#conf-${x}3`, { opacity: 0, x: 0, y: 0, scale: randomScale() });
            //         animate(`#conf-${x}4`, { opacity: 0, x: 0, y: 0, scale: randomScale() });
            //         return animate(`#conf-${x}5`, { opacity: 0, x: 0, y: 0, scale: randomScale() });
            //     })
            //     .then(() => {
            //         animate(`#conf-${x}1`, {
            //             opacity: 1,
            //             x: preComputed[x][1][0],
            //             y: preComputed[x][1][1],
            //             scale: randomScale()
            //         });
            //         animate(`#conf-${x}2`, {
            //             opacity: 1,
            //             x: preComputed[x][2][0],
            //             y: preComputed[x][2][1],
            //             scale: randomScale()
            //         });
            //         animate(`#conf-${x}3`, {
            //             opacity: 1,
            //             x: preComputed[x][3][0],
            //             y: preComputed[x][3][1],
            //             scale: randomScale()
            //         });
            //         animate(`#conf-${x}4`, {
            //             opacity: 1,
            //             x: preComputed[x][4][0],
            //             y: preComputed[x][4][1],
            //             scale: randomScale()
            //         });
            //         return animate(`#conf-${x}5`, {
            //             opacity: 1,
            //             x: preComputed[x][0][0],
            //             y: preComputed[x][0][1],
            //             scale: randomScale()
            //         });
            //     })
            //     .then(() => {
            //         animate(`#conf-${x}1`, { opacity: 0 });
            //         animate(`#conf-${x}2`, { opacity: 0 });
            //         animate(`#conf-${x}3`, { opacity: 0 });
            //         animate(`#conf-${x}4`, { opacity: 0 });
            //         return animate(`#conf-${x}5`, { opacity: 0 });
            //     });
            // });
    };

    return (
        <AnimatePresence>
            <div className={'lifebuoy-button'}>
                <button onClick={handleClick}>{content}</button>
                {hasConfetti ? (
                    <div className={'lifebuoy-button--confetti-container'}>
                        <div className={'lifebuoy-button--confetti-relative-fix'} ref={scope}>
                            {[...Array(4)].map((i, x) => {
                                return (
                                    <>
                                        <span
                                            id={`conf-${x}1`}
                                            className={
                                                'lifebuoy-button--confetti lifebuoy-button--confetti-red'
                                            }
                                        />
                                        <span
                                            id={`conf-${x}2`}
                                            className={
                                                'lifebuoy-button--confetti lifebuoy-button--confetti-blue'
                                            }
                                        />
                                        <span
                                            id={`conf-${x}3`}
                                            className={
                                                'lifebuoy-button--confetti lifebuoy-button--confetti-orange'
                                            }
                                        />
                                        <span
                                            id={`conf-${x}4`}
                                            className={
                                                'lifebuoy-button--confetti lifebuoy-button--confetti-yellow'
                                            }
                                        />
                                        <span
                                            id={`conf-${x}5`}
                                            className={
                                                'lifebuoy-button--confetti lifebuoy-button--confetti-green'
                                            }
                                        />
                                    </>
                                );
                            })}
                        </div>
                    </div>
                ) : null}
            </div>
        </AnimatePresence>
    );
};

Button.PropTypes = {
    onClick: PropTypes.func,
    content: PropTypes.string,
    hasConfetti: PropTypes.bool
};
