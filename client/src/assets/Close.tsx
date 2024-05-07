const Close = (props: any) => (
  <svg
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={1.5}
    className="icon icon-tabler icon-tabler-x"
    viewBox="0 0 24 24"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M18 6 6 18M6 6l12 12" />
  </svg>
)
export default Close
