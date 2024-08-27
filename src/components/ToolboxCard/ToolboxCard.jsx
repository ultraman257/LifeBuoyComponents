import * as PropTypes from 'prop-types';
import './style.css';
import { SlBulb } from 'react-icons/sl';

export const ToolboxCard = ({ itemName, itemDescription }) => {
    return (
        <div className={'toolbox-card'}>
            <div className={'toolbox-card--content'}>
                <SlBulb />
                <h3>{itemName}</h3>
                <p>{itemDescription}</p>
            </div>
        </div>
    );
};

ToolboxCard.propTypes = {
    itemName: PropTypes.string.isRequired,
    itemDescription: PropTypes.string
};
