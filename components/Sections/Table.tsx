import classNames from 'classnames';

export function Table(props) {
  return (
    <div className="w-full overflow-hidden md:px-2">
      <div
        className={classNames(
          'px-2  text-lg font-bold border-b-[1px] w-full mb-1',
          {
            'text-white': props.details.backgroundColor === true,
            'text-black': props.details.backgroundColor === false,
          }
        )}
      >
        {props.record?.title}
      </div>
      <table className="m-0 w-full">
        <thead className="hidden">
          <tr>
            {props.record?.table['columns'].map((columns, i) => {
              return (
                <th
                  key={i}
                  className={classNames('p-2 text-sm', {
                    'text-white': props.details.backgroundColor === true,
                  })}
                >
                  {columns}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {props.record?.table['data'].map((data, i) => {
            return (
              <tr
                key={i}
                className={classNames('p-2 text-sm', {
                  'text-white': props.details.backgroundColor === true,
                })}
              >
                {props.record?.table['columns'].map((dataColumns, i) => {
                  return (
                    <td
                      key={i}
                      className={classNames(
                        'px-2 text-sm odd:w-3/4 even:text-right',
                        {
                          'text-white': props.details.backgroundColor === true,
                        }
                      )}
                    >
                      {data[dataColumns]}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
