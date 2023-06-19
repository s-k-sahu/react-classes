// export const Comp = ({children,name,age}) => {
export const Comp = (...props) => {
    // const prop = props.at(0)
    const {children,name,age} = props[0]
    // console.log(prop)
//   const { children, name, age } = p;
//   console.log(p);
  return (
    <div>
      {children} {name} {age}
      {/* {children}  */}
    </div>
  );
};
