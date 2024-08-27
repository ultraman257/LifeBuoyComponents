import * as PropTypes from 'prop-types';
import './style.css';

export const TaskList = ({ tasks, heading, updateTaskState }) => {
    return (
        <div className={'task-list'}>
            {heading ? <div className={'task-list--heading'}>{heading}</div> : null}
            {tasks && tasks.length > 0
                ? tasks.map(item => {
                      return (
                          <div key={item.id} className={'task-list--item'}>
                              <h4>
                                  {item.name} {item.moreInfo ? <span>{item.moreInfo}</span> : null}
                              </h4>
                              <button onClick={() => updateTaskState(item.id)}>Done</button>
                          </div>
                      );
                  })
                : null}
        </div>
    );
};

TaskList.propTypes = {
    createTask: PropTypes.func,
    updateTaskState: PropTypes.func,
    heading: PropTypes.string,
    tasks: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            moreInfo: PropTypes.string,
            isComplete: PropTypes.bool.isRequired
        })
    ).isRequired,
    canEdit: PropTypes.bool,
    canAdd: PropTypes.bool
};
