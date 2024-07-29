import React from 'react'
import ReactDOM from 'react-dom'

function Booklist() {
  return <section>
  <Book/> 
  </section>;
}
const Book = () => {
  return <article>
  <Image/>
  <Title/>
  <Author/>
  </article>
}
const Image = () => (<img src="https://www.amazon.com/I-Love-You-Moon-Back/dp/1589255518/ref=zg_m_bs_g_books_m_sccl_33/135-5124874-9988803?psc=1#" alt="I am an image" />
)
const Title = () => <h1>I Love You to the Moon and Back</h1>
const Author = () => <h4>Amelia Hepworth</h4>

ReactDOM.render(<Booklist/>, document.getElementById("root"));