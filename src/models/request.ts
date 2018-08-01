export interface AsyncRequest {
  pending: boolean
  success: boolean
  result?: any
  error?: Error
}
