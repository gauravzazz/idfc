import type { SVGProps } from 'react';

export function CardIconSvg(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 20 14" xmlns="http://www.w3.org/2000/svg" width="30" height="30" aria-hidden="true" role="img" {...props}>
      <g fill="none" fillRule="evenodd">
        <path d="M-2-5h24v24H-2z" />
        <path d="M17 0a3 3 0 013 3v8a3 3 0 01-3 3H3a3 3 0 01-3-3V3a3 3 0 013-3h14zm1.5 5.75h-17V11A1.5 1.5 0 003 12.5h14a1.5 1.5 0 001.5-1.5V5.75zm-12 3.5a.75.75 0 010 1.5H4a.75.75 0 010-1.5h2.5zm5 0a.75.75 0 010 1.5H9a.75.75 0 010-1.5h2.5zM17 1.5H3A1.5 1.5 0 001.5 3v1.25h17V3A1.5 1.5 0 0017 1.5z" fill="currentColor" fillRule="nonzero" />
      </g>
    </svg>
  );
}
