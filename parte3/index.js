function addFormOptions(){
    let formContent = document.querySelector(".form-conversion__body fieldset");
    let selectWrapper = document.createElement('div');
    let textAreaWrapper = document.createElement('div');

    selectWrapper.setAttribute("class", "form-group");
    selectWrapper.innerHTML = `
        <select 
            class="form-control" 
            name="vehicle-type" 
            required="" 
            type="select"
            data-bouncer-target="#invalid-vehicle-type" 
            data-should-validate="true"
        >
            <option value="SUV">SUV</option>
            <option value="Senda">Senda</option>
            <option value="Hatch">Hatch</option>
            <option value="Pickup">Pickup</option>
        </select>
        <div id="invalid-vehicle-type" class="invalid-feedback"></div>
    `;

    textAreaWrapper.setAttribute("class", "form-group");
    textAreaWrapper.innerHTML = `
        <textarea 
            class="form-control" 
            name="message" 
            required="" 
            type="textarea" 
            placeholder="Digite seu mensagem"
            data-bouncer-target="#invalid-message" data-should-validate="true" 
        ></textarea>
        <div id="invalid-message" class="invalid-feedback"></div>
    `;

    formContent.appendChild(selectWrapper);
    formContent.appendChild(textAreaWrapper);
}