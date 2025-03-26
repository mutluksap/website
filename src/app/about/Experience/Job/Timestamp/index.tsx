import { format, parse } from 'date-fns'

type Props = {
  dateFinish: string | null
  dateStart: string
}

const Timestamp = (props: Props) => {
  const dateFormat = 'dd/MM/yyyy';

  const dateStart =
      props.dateStart
          ? format(parse(props.dateStart, dateFormat, new Date()), 'y')
          : 'Now';

  const dateFinish =
      props.dateFinish
          ? format(parse(props.dateFinish, dateFormat, new Date()), 'y')
          : 'Now';

  return <span>{dateStart} - {dateFinish}</span>;
};

export default Timestamp
