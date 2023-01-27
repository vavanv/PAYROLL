import { ERROR_TYPES } from '../../utils/api/constants';

export class TimeoutError extends Error {
  private status: number;

  public constructor(status: number, statusText?: string) {
    super(statusText || 'Timeout Error');
    this.status = status;
    this.name = ERROR_TYPES.TimeoutError;
  }
}
