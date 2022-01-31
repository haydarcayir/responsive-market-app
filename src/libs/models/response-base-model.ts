export type TResponseBaseModel<T> = {
  config: object
  data: T
  headers: object
  request: any
  status: number
  statusText: string
}
