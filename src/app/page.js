import Image from 'next/image'
import TodoApp from '../components/TodoApp'

export default function Home() {
  return (
    <>
     <section className="flex justify-center h-screen">
<TodoApp />
  </section>
    </>
  );
}
