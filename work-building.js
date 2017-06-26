var outerFrameDoc = document.querySelector('frame[src="/main_frame.php"]').contentWindow.document;
var innerFrameDoc = outerFrameDoc.querySelector('iframe[src="building/index.php"]').contentWindow.document;

var formElem = innerFrameDoc.querySelector('form[action="/building/index.php"]');
console.log('Elem: <form>');
var selectElement = formElem.querySelector('select[name="kind"]');
if (selectElement) {
    [].slice
      .call(selectElement.children)
      .reverse()
      .find(e => e.style.color === 'green')
      .setAttribute('selected', true)

    console.log('Elem: <select>');
}
var beginWorkBtn = formElem.querySelector('input[value="Начать работать"]');
beginWorkBtn && beginWorkBtn.click && beginWorkBtn.click() && console.log('Elem: <input>');
