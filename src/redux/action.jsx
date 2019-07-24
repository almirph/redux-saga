export const actionTypes = {
  TICK: 'TICK',
  TICK_SUCCESS: 'TICK_SUCCESS',
  START: 'START',
  START_SUCCESS: 'START_SUCCESS',
  STOP: 'STOP',
  STOP_SUCCSSES: 'STOP_SUCCESS'
};

export const actionsTimer = {
  tick: counting => ({
    type: actionTypes.TICK,
    counting: counting
  }),
  start: () => ({
    type: actionTypes.START
  }),
  stop: () => ({
    type: actionTypes.STOP
  })
};
