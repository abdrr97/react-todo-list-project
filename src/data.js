export const DATE = {
  TODAY: 'TODAY',
  TOMORROW: 'TOMORROW',
}
export const PROGRESS = {
  TODO: 'TODO',
  DOING: 'DOING',
  DONE: 'DONE',
}
export const data = [
  {
    id: 1,
    title: 'wlak the dog',
    description: '',
    progress: PROGRESS.DOING,
    date: DATE.TODAY,
  },
  {
    id: 2,
    title: 'watch youtube',
    description: '',
    progress: PROGRESS.DOING,
    date: DATE.TODAY,
  },
  {
    id: 3,
    title: 'watch course react js',
    description: "watching john smilga's reactjs course ",
    progress: PROGRESS.TODO,
    date: DATE.TOMORROW,
  },
  {
    id: 4,
    title: 'TOMORROW',
    description: "watching john smilga's reactjs course ",
    progress: PROGRESS.DONE,
    date: DATE.TOMORROW,
  },
  {
    id: 5,
    title: 'Today Completed',
    description: "watching john smilga's reactjs course ",
    progress: PROGRESS.DONE,
    date: DATE.TODAY,
  },
]
