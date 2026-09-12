import type { ReactNode } from 'react'

/** One documentation section: an anchored heading plus prose. */
export function DocSectionBlock({
  id,
  title,
  children,
}: {
  id: string
  title: string
  children: ReactNode
}) {
  return (
    <section id={id} className="scroll-mt-24 border-b border-zinc-800 py-10 first:pt-2 last:border-b-0">
      <h2 className="text-2xl font-semibold tracking-tight text-zinc-100">{title}</h2>
      <div className="prose-doc mt-5">{children}</div>
    </section>
  )
}

/** A reference table. Rows are [term, description] pairs. */
export function RefTable({
  head,
  rows,
}: {
  head: [string, string]
  rows: [string, string][]
}) {
  return (
    <div className="table-wrap my-6">
      <table className="data-table">
        <thead>
          <tr>
            <th>{head[0]}</th>
            <th>{head[1]}</th>
          </tr>
        </thead>
        <tbody>
          {rows.map(([term, description]) => (
            <tr key={term}>
              <td>{term}</td>
              <td>{description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
