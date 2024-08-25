const MyInput = ({ ref, ...props }) => {
    return <input {...props} ref={ref} />
}

const ParentComp = () => {
    const inputRef = useRef(null);
    return <MyInput ref={inputRef} />;
}