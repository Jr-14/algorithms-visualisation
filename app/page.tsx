import Bar from './bar';
import "./index.css"

export default function Home() {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">Hello world</h1>
      <div className="flex flex-row items-end">
        <Bar height='20px'/>
        <Bar height='40px'/>
        <Bar height='60px'/>
      </div>
    </div>
  );
}
