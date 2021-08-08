import { useRouter } from 'next/router'
import Link from 'next/link'
import React, { Children } from 'react'

const ActiveLink = ({ children, ...props }) => {
    const { asPath } = useRouter()
    const child = Children.only(children)

    const activeNav = "bg-gray-300 text-black px-3 py-2 rounded-md text-sm font-medium";
    const passiveNav = "text-gray-100 hover:bg-gray-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium";

    const className = asPath === props.href || asPath === props.as ? activeNav : passiveNav;

    return (
    <Link {...props}>
        {React.cloneElement(child, {
        className: className || null,
        })}
    </Link>
    )
}

export default ActiveLink