import type { PropsWithChildren } from 'react';

type ButtonLinkProps = {
    className?: string;
    href?: string;
} & PropsWithChildren;

function ButtonLink(props: ButtonLinkProps) {
    const {className, href, children} = props;
  return (
      <a href={href} className={`flex items-center justify-center uppercase font-urbanist text-xl shadow-button bold py-1 lg:py-2 px-10 rounded-[10px] bg-main-pink text-white lg:leading-none ${className}`}>
          {children}
      </a>
  )
}

export default ButtonLink
