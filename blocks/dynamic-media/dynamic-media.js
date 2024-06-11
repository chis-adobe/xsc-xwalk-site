/**
 * @param {HTMLElement} $block
 */
export default function decorate(block) {
  console.log(block);

  let imageEl = document.createElement('img');
  block.appendChild(imageEl);
  //imageEl.setAttribute("src", );
}
