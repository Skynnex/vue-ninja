import moment from 'moment';

export default function fromNow(dateTimeString: string): string {
  return moment(dateTimeString).fromNow();
}
