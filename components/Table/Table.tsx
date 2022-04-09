import Styles from './table.module.scss';

interface Stringifiable {
  toString(): string;
}

type TableProps<T> = {
  readonly data: readonly T[];
  readonly columns: ReadonlyArray<readonly [key: keyof T & string, label: string]>;
};

export const Table = <
  T extends { readonly id: string; readonly [key: string]: Stringifiable | undefined | null },
>({
  data,
  columns,
}: TableProps<T>) => (
  <div className={Styles.tableWrapper}>
    <table className={Styles.table}>
      <thead>
        <tr>
          {columns.map(([key, label]) => (
            <th key={key}>{label}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <tr key={row.id}>
            {columns.map(([key]) => (
              <td key={key}>{row[key]?.toString()}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);
