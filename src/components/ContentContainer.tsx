const ContentContainer = ({className = '', children}:any) => (
    <div className={`h-full w-8/12 ${className}`}>
        {children}
    </div>
)

export default ContentContainer;