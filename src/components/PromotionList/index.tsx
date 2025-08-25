import React from 'react';

interface PromotionListProps {
    className?: string;
    text?: string[];
}

function PromotionList(props: PromotionListProps) {
    const {className, text} = props;
    return (
        <ul className={`leading-[1.4] ${className}`}>
            {text?.map((t) => (
                <li className="flex items-start mb-[10px] lg:mb-3 pl-8 relative before:content-[''] before:left-0 before:absolute before:top-1/2 before:-translate-y-1/2 before:block before:w-5 before:h-5 before:bg-star before:bg-contain before:bg-no-repeat">
                    <p className="text-white">{t}</p>
                </li>
            ))}
        </ul>
    )
}

export default PromotionList
