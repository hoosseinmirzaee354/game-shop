import {Link} from "react-router-dom";

function Button({children, disabled = false, to, type = 'primary', onClick, customClasses = ''}) {
    const classBase =
        `bg-brand-4 inline-block text-stone-200 rounded-xl
         font-semibold tracking-wide uppercase hover:bg-brand-4
         transition-colors duration-300
         focus:outline-none focus:ring focus:ring-offset-2 focus:ring-brand-4 focus:bg-brand-4`

    const baseSecondaryStyle = `border-2 border-c-brand-4 inline-block color-brand-4
          font-semibold tracking-wide uppercase hover:bg-[var(--c-brand-4)] hover:text-[var(--c-brand-3)]
          transition-colors duration-300
          focus:outline-none focus:ring focus:ring-offset-2 focus:ring-[var(--c-brand-4)] focus:bg-[var(--c-brand-4)] focus:color-[var(--c-brand-4)]`

    const styles = {
        primary: classBase + ' px-4 py-3 md:py-4 md:px-6 text-sm',
        small: classBase + ' px-3 py-2 md:py-2.5 md:px-5 text-xs',
        round: classBase + ' w-8 h-8 text-center text-medium md:text-xl',
        smallSecondary: baseSecondaryStyle + ' px-3 py-2 md:py-2.5 md:px-5 text-xs rounded-lg',
        secondary: baseSecondaryStyle + ` px-4 py-2.5 md:py-3.5 md:px-6 text-sm rounded-xl`
    }

    if (to)
        return <Link to={to} className={`${styles[type]} ${customClasses}`}>{children}</Link>

    if (onClick) return (
        <button
            className={`${styles[type]} ${customClasses}`}
            disabled={disabled}
            onClick={onClick}>
            {children}
        </button>
    );

    return (
        <button
            className={`${styles[type]} ${customClasses}`}
            disabled={disabled}
        >
            {children}
        </button>
    );
}

export default Button;