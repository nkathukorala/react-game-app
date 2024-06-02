interface Props{
    children:string;
    maxChars?:number;
}

const ExplandableText = ({children,maxChars=100}:Props) => {
  return (
   
    <div>{children.length > maxChars ?children.substring(0,maxChars):children}</div>
  )
}

export default ExplandableText