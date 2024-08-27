import * as PropTypes from "prop-types";

import './style.css';

import {motion, AnimatePresence, useAnimate} from "framer-motion";
import {useEffect, useState} from "react";

export const Button = ({ onClick, content = 'Button', hasConfetti = false }) => {

    // TODO: Cleanup this awful code
    const [scope, animate] = useAnimate()

    const handleClick = (e) => {
        // Skip if we're already running an animation
        // Pass the click to the parent
        if(onClick) onClick(e);
        // Check for confetti and start the animation
        if(hasConfetti) {

            animateConfetti();
            // Remove items from the dom on animation completion
        }


    }



    const animateConfetti = () => {

        console.log("confetti")

        const randomAngle = () => {
            return Math.random()*Math.PI*2;
        }

        const randomCircleCoordsX = () => {
            return Math.cos(randomAngle())*75;
        }

        const randomCircleCoordsY = () => {
            return Math.cos(randomAngle())*75;
        }

        const randomScale = () => {
            return (Math.random() - 0.5) + 1;
        }

        let preComputed = [
            [
                 [ -64.4100022849874, -69.89602291605287 ], [ 13.18073599427067, 74.28329563289188 ], [ -3.9639732330144275, 74.91184996279097 ], [ -74.52272440735837, 70.12643286242677 ], [ 66.9457458737, -74.99951052951722 ]
            ],
            [
                [ -9.52912464360802, -48.859800695698766 ], [ 74.9800613621542, -39.55122237388619 ], [ 63.82181974963763, -71.62819984129892 ], [ 69.90562298596686, 28.92736211363145 ], [ -55.50224923675785, -28.359269714021448 ]
            ],
            [
                [ -64.81244697877534, -48.91430176419997 ], [ 64.00079003205067, -6.733628827005125 ], [ 6.20462377018166, -29.455296296728797 ], [ 63.65512493860299, 74.09660470509067 ], [ -69.35603770871856, 64.86866195628349 ]
            ],
            [
                [ -74.8198019317224, 34.40754272258879 ], [ -51.459335746396704, -51.13957080277644 ], [ -29.24664532778292, 47.26983588308573 ], [ -19.171319080889255, 74.13754850319484 ], [ -37.8757688896789, -53.93123741851048 ]
            ],
            [
                [ -4.7224168000296975, 47.60600881559445 ], [ -55.3937990429614, -52.42389594953508 ], [ -41.775551662565086, 33.549481033807545 ], [ 22.94457691358632, -19.563291919737072 ], [ 37.48145733876837, 36.06231360083062 ]
            ]
        ];



        [...Array(4)].map(async (i, x) => {

            animate(`#conf-${x}1`, { opacity: 0, x: 0, y: 0, scale: randomScale() }).then(() => {

                animate(`#conf-${x}2`, { opacity: 0, x: 0, y: 0, scale: randomScale() })
                animate(`#conf-${x}3`, { opacity: 0, x: 0, y: 0, scale: randomScale() })
                animate(`#conf-${x}4`, { opacity: 0, x: 0, y: 0, scale: randomScale() })
                return animate(`#conf-${x}5`, { opacity: 0, x: 0, y: 0, scale: randomScale() })

            }).then(() => {
                animate(`#conf-${x}1`, { opacity: 1, x: preComputed[x][1][0], y: preComputed[x][1][1], scale: randomScale() })
                animate(`#conf-${x}2`, { opacity: 1, x: preComputed[x][2][0], y: preComputed[x][2][1], scale: randomScale() })
                animate(`#conf-${x}3`, { opacity: 1, x: preComputed[x][3][0], y: preComputed[x][3][1], scale: randomScale() })
                animate(`#conf-${x}4`, { opacity: 1, x: preComputed[x][4][0], y: preComputed[x][4][1], scale: randomScale() })
                return animate(`#conf-${x}5`, { opacity: 1, x: preComputed[x][0][0], y: preComputed[x][0][1], scale: randomScale() })

            }).then(() => {
                animate(`#conf-${x}1`, { opacity: 0 });
                animate(`#conf-${x}2`, { opacity: 0 });
                animate(`#conf-${x}3`, { opacity: 0 });
                animate(`#conf-${x}4`, { opacity: 0 });
                return animate(`#conf-${x}5`, { opacity: 0 })
            });

        });

    }

    return (
        <AnimatePresence>
            <div className={'lifebuoy-button'} >
                <button onClick={handleClick} >{ content }</button>
                    { hasConfetti ?
                        <div className={'lifebuoy-button--confetti-container'}>
                            <div className={'lifebuoy-button--confetti-relative-fix'} ref={scope}>
                            { [...Array(4)].map((i, x) => {
                                return <>
                                     <span id={`conf-${x}1`} className={'lifebuoy-button--confetti lifebuoy-button--confetti-red'} />
                                     <span id={`conf-${x}2`} className={'lifebuoy-button--confetti lifebuoy-button--confetti-blue'} />
                                     <span id={`conf-${x}3`} className={'lifebuoy-button--confetti lifebuoy-button--confetti-orange'} />
                                     <span id={`conf-${x}4`} className={'lifebuoy-button--confetti lifebuoy-button--confetti-yellow'} />
                                     <span id={`conf-${x}5`} className={'lifebuoy-button--confetti lifebuoy-button--confetti-green'} />
                                    </>
                            })}
                            </div>
                        </div> : null
                    }
            </div>
        </AnimatePresence>
    )

}

Button.PropTypes = {
    onClick: PropTypes.func,
    content: PropTypes.string,
    hasConfetti: PropTypes.bool
}