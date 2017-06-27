var outerFrameDoc = document.querySelector('frame[src="/main_frame.php"]').contentWindow.document;
var innerFrameDoc = outerFrameDoc.querySelector('iframe[src="building/index.php"]').contentWindow.document;

hideBuildingImg();
startWork();

function hideBuildingImg() {
    var imgElem = innerFrameDoc.querySelector('img[src*="/img/locations/nd/jpg/satellite_street/summer/stroyka"]');
    imgElem.hidden = true;
};

function startWork() {
    var formElem = innerFrameDoc.querySelector('form[action="/building/index.php"]');
    logger('Elem: <form>');
    var selectElement = formElem.querySelector('select[name="kind"]');
    if (selectElement) {
        [].slice
          .call(selectElement.children)
          .reverse()
          .find(e => e.style.color === 'darkgreen')
          .setAttribute('selected', true)

        logger('Elem: <select>');
    }
    var beginWorkBtn = formElem.querySelector('input[value="Начать работать"]');
    beginWorkBtn && beginWorkBtn.click && beginWorkBtn.click() && logger('Elem: <input>');
}

function refreshPage() {
    var refreshBtn = innerFrameDoc.querySelector('div[title="Обновить"]');
    refreshBtn && refreshBtn.click && refreshBtn.click();
}

function logger(data) {
    console.log(`${new Date().toLocaleString()} |`, data)
}
