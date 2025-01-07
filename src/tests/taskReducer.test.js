import taskReducer from '../reducers/taskReducer';

describe('Task Reducer', () => {
  it('should return the initial state', () => {
    expect(taskReducer(undefined, {})).toEqual({ tasks: [] });
  });

  it('should handle ADD_TASK', () => {
    const action = { type: 'ADD_TASK', payload: { id: 1, name: 'Task 1' } };
    expect(taskReducer(undefined, action)).toEqual({ tasks: [{ id: 1, name: 'Task 1' }] });
  });

  it('should handle DELETE_TASK', () => {
    const initialState = { tasks: [{ id: 1, name: 'Task 1' }] };
    const action = { type: 'DELETE_TASK', payload: 1 };
    expect(taskReducer(initialState, action)).toEqual({ tasks: [] });
  });
});
