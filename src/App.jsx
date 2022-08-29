import { SiRstudio, SiJupyter, SiPhpmyadmin } from "react-icons/si";
import { IconContext } from "react-icons"

function App() {
  return (
    <div className="bg-slate-50">
      <div className="h-screen">
        <div className="max-w-4xl mx-auto p-12 sm:px-16 mb-6">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl tracking-tight text-center font-extrabold text-gray-900 mt-16">
            全新的 ASIS R Lab。
          </h1>
        </div>
        <div className="max-w-6xl mx-auto p-12 sm:px-16">
          <main className="flex flex-col gap-y-8 md:grid md:grid-cols-2 md:gap-8 ">
            <Block icon={<SiRstudio />} name="RStudio" href="/rstudio" />
            <Block icon={<SiRstudio />} name="R Shiny" href="/shiny" />
            <Block icon={<SiPhpmyadmin />} name="PhpMyAdmin" href="/phpmyadmin" />
            <Block icon={<SiJupyter />} name="JupyterHub" href="/jhub" />
          </main>
        </div>
      </div>
      <div className="max-w-5xl mx-auto">
        <section className="group p-6 bg-white shadow-md mb-12 ring-1 ring-slate-200">
          <h2 className="text-gray-600 text-3xl font-bold mb-4">常見問題</h2>
          <p className="ease-in-out duration-150 transition-all group-hover:text-gray-600 text-white">撰寫中</p>
        </section>
        <section className="p-6 bg-white shadow-md ring-1 ring-slate-200">
          <h2 className="text-gray-600 text-3xl font-bold mb-4">聯絡我們</h2>
          <p className="mb-4">如有在使用上碰到任何問題，歡迎來信！</p>
        <div className="border-t border-gray-200 my-4"></div>
          <ContactForm />
        </section>
      </div>
      <Footer />
    </div>
  );
}

const Block = (props) => {
  return (
    <a href={props.href} target="_self">
      <div className="transition-all ease-in-out delay-75 hover:-translate-y-1 hover:scale-110 group hover:bg-sky-500 flex flex-row gap-x-4 items-center max-w-lg  p-6 bg-white shadow-md rounded-xl ring-1 ring-slate-200 group-hover:ring-4 hover:ring-sky-400">
        <IconContext.Provider value={{ className: "group-hover:fill-white fill-sky-400 hover:fill-sky-700 w-16 h-16 shrink-0" }}>
          {props.icon}
        </IconContext.Provider>
        <p className="font-mono text-lg w-full text-sky-900 group-hover:text-white">{props.name}</p>
        <p className="hidden text-sm text-sky-100 group-hover:block font-ligh">{props.href}</p>
      </div>
    </a>
  )
};

const ContactForm = () => {
  const handleSubmitForm = async e => {
    e.preventDefault();
    const { name, email, message } = e.target.elements;
    let mail = {
      to: email.value,
      subject: "聯絡我們通知信",
      text: `您好，我們已經收到您的訊息，以下為您填寫的資料，我們將會有專員儘速和您聯絡！\n
      姓名: ${name.value}!\n
      Email: ${email.value}\n
      訊息內容: ${message.value}`,
      html: `您好，我們已經收到您的訊息，以下為您填寫的資料，我們將會有專員儘速和您聯絡！<br>
      姓名: ${name.value}!<br>
      Email: ${email.value}<br>
      訊息內容: ${message.value}`
    }
    let response = await fetch("./contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8"
      },
      body: JSON.stringify(mail)
    })
    alert(response.json());
  }
  return (
    <>
      <form className="w-full max-w-lg mb-8" onSubmit={handleSubmitForm}>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="name">
              姓名
            </label>
            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="name" type="text" />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
              電子信箱
            </label>
            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="email" type="email" />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
              訊息
            </label>
            <textarea className=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none" id="message"></textarea>
          </div>
        </div>
        <div className="md:flex md:items-center">
          <div className="md:w-1/3">
            <button className="shadow bg-teal-400 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit">
              送出
            </button>
          </div>
          <div className="md:w-2/3"></div>
        </div>
      </form>
    </>
  )
}

const Footer = () => {
  return (
    <footer className="py-4 shadow-md border-t border-slate-200 items-center justify-center flex">
      <p className="text-base text-gray-500 font-sans">Made with ♥️ by <a href="https://www.github.com/exkuretrol" className="font-bold underline decoration-2 decoration-indigo-500/50 underline-offset-4" target="_blank">Kuaz</a></p>
    </footer>
  )
}

export default App;
