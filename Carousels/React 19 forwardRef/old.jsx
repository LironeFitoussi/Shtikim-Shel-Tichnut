const MyInput = React.forwardRef((props, ref) => {
    return <input {...props} ref={ref} />;
});
  
const ParentComp = () => {
    const inputRef = useRef(null);
    return <MyInput ref={inputRef} />;
}