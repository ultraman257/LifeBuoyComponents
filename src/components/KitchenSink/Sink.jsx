import { Button } from '../Button/Button.jsx';

import './style.css';

export const Sink = () => {
    return (
        <div className={'lifebuoy-page'}>
            <header>
                <h1>LifeBuoy Components</h1>
            </header>

            <h3>Button</h3>
            <hr />
            <div className={'center-items'}>
                <Button hasConfetti={true} content={'Button'} />
            </div>
        </div>
    );
};
