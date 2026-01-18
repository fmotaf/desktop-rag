import './style.css'

function returnPage(){
  const app = document.querySelector<HTMLDivElement>('#app');
  const p = document.createElement('p');


  p.textContent = "aaaaaaaasdasdasa";

  app?.append(p);

  return app;
}


export default returnPage();

// document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
//   <div>
//     <p> Hello World! </p>
//   </div>
// `
