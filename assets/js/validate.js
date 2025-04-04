export default function validate() {
    function handleContactForm(form_selector = '.form') {
        const forms = document.querySelectorAll(form_selector) || null;
        if (forms) {
            forms.forEach(form => {

                let formInstanceData = new FormData();
                const contact_name = form.querySelector('[name="name"]') || null;
                const contact_phone = form.querySelector('[name="phone"]') || null;
                const contact_msg = form.querySelector('[name="message"]') || null;
                const contact_email = form.querySelector('[name="email"]') || null;
                const page_referer = form.querySelector('[name="page_name"]') || null;
                const checkbox = form.querySelector('.custom-checkbox') || null;
                const checkboxLabel = form.querySelector('.checkbox_label-modal');
                const customSelected = document.querySelector('.custom-select__selected') || null;
                const radioBlock = document.querySelector('.radio-group') || null;
                let radioCheckbox;
                const buyContent = form.querySelector('.block_item') || null;
                let productItemStr = '';
                if (radioBlock) {
                    document.addEventListener("DOMContentLoaded", () => {
                        const radioGroup = document.querySelector(".radio-group");

                        radioGroup.addEventListener("change", (event) => {
                            if (event.target.type === "radio") {
                                radioCheckbox = event.target.value;
                            }
                        });
                    });
                }
                if (buyContent) {

                    productItemStr = `
Товар: ${buyContent.querySelector('.text-title')?.innerText || 'Не вказано'}
Ціна: ${buyContent.querySelector('.text-descr')?.innerText || 'Не вказано'}
`;
                }

                if (contact_name) {
                    contact_name.addEventListener('input', evt => {
                        resetField(contact_name);
                    });
                }

                if (contact_phone) {
                    contact_phone.addEventListener('input', evt => {
                        resetField(contact_phone);
                    });
                }
                if (contact_email) {
                    contact_email.addEventListener('input', evt => {
                        resetField(contact_email);
                    });
                }
                if (contact_msg) {
                    contact_msg.addEventListener('input', evt => {
                        resetField(contact_msg);
                    });
                }

                formInstanceData.append('action', 'contact_form');


                if (form) {
                    let selector = document.querySelectorAll('[name="phone"]');
                    selector.forEach((item) => {
                        let im = new Inputmask("+38 (099)9999999");
                        im.mask(item);
                    })

                }
                form.addEventListener('submit', (e) => {
                    e.preventDefault();
                    let errorsMarker = [];
                    let nameFieldVal, phoneFieldVal, msgFieldVal, emailFieldVal, refererFieldVal, radioFieldRadio, customFieldVal

                    if (customSelected) {
                        customFieldVal = customSelected.textContent;;
                    }
                    if (radioBlock) {
                        radioFieldRadio = radioCheckbox;
                    }
                    if (contact_name) {
                        nameFieldVal = contact_name.value;
                    }
                    if (contact_phone) {
                        phoneFieldVal = contact_phone.value;
                    }
                    if (contact_msg) {
                        msgFieldVal = contact_msg.value;
                    }
                    if (contact_email) {
                        emailFieldVal = contact_email.value;
                    }
                    if (page_referer) {
                        refererFieldVal = page_referer.value;
                    }
                    if (contact_email) {
                        resetField(contact_email);
                    }
                    if (contact_msg) {
                        resetField(contact_msg);
                    }
                    if (contact_name) {
                        resetField(contact_name);
                    }
                    if (contact_phone) {
                        resetField(contact_phone);
                    }
                    if (contact_name) {
                        if (checkEmptyField(contact_name) === false) {
                            errorsMarker.push('has_error');
                            markedErrorField(contact_name);
                        } else if (checkStringValidation(contact_name) === false) {
                            errorsMarker.push('has_error');
                            markedErrorField(contact_name);
                        } else {
                            resetField(contact_name);
                            formInstanceData.set('contact_name', nameFieldVal);
                        }
                    }
                    if (contact_phone) {
                        if (checkEmptyField(contact_phone) === false) {
                            errorsMarker.push('has_error');
                            markedErrorField(contact_phone);

                        } else if (validatePhoneNumber(contact_phone) === false) {
                            errorsMarker.push('has_error');
                            markedErrorField(contact_phone);
                        }
                        else {
                            resetField(contact_phone);
                            formInstanceData.set('contact_phone', phoneFieldVal);
                        }
                    }
                    if (contact_email) {
                        if (window.getComputedStyle(contact_email).display === 'none') {
                            resetField(contact_email);
                            formInstanceData.set('contact_email', emailFieldVal);
                        } else if (checkEmptyField(contact_email) === false) {
                            errorsMarker.push('has_error');
                            markedErrorField(contact_email);
                        } else if (checkEmailValidation(contact_email) === false) {
                            errorsMarker.push('has_error');
                            markedErrorField(contact_email);

                        } else {
                            resetField(contact_email);
                            formInstanceData.set('contact_email', emailFieldVal);
                        }
                    }
                    if (page_referer) {
                        formInstanceData.set('page_referer', refererFieldVal);
                    }
                    if (contact_msg) {
                        formInstanceData.set('contact_msg', msgFieldVal);
                    }
                    if (checkbox) {
                        if (!validateCheckbox(checkbox, checkboxLabel)) {
                            errorsMarker.push('has_error');
                        }
                    }
                    if (!errorsMarker.includes('has_error')) {
                        var data = {};
                        data['contact_phone'] = phoneFieldVal;
                        data['conatct_name'] = nameFieldVal;
                        data['contact_msg'] = msgFieldVal;
                        data['contact_email'] = emailFieldVal;
                        data['page_referer'] = refererFieldVal;
                        data['goods'] = productItemStr;
                        data['radio'] = radioFieldRadio;
                        data['selected'] = customFieldVal;


                        let message = `---------------------------\n\rЗаявка прийшла з: ${refererFieldVal ? refererFieldVal : 'Не вказано'} \n\rІм'я користувача: ${nameFieldVal ? nameFieldVal : 'Не вказано'}  \n\rТелефон користувача: ${phoneFieldVal ? phoneFieldVal : 'Не вказано'}  \n\rEmail: ${emailFieldVal ? emailFieldVal : 'Не вказано'}  \n\rПовідомлення користувача: ${msgFieldVal ? msgFieldVal : 'Не вказано'}`;
                        if (form.classList.contains('isRadioForm')) {
                            message += `\n\rТип горіху: ${radioFieldRadio ? radioFieldRadio : 'Не вказано'} \n\rПослуга: ${customFieldVal ? customFieldVal : 'Не вказано'}`;
                        } else if ((form.classList.contains('formBuy'))) {
                            message += productItemStr;
                        }
                        message += `\n\r---------------------------`;
                        sendMessageToTelegram(token, chatId, message);

                        sendForm(
                            formInstanceData,
                            '/wp-admin/admin-ajax.php'
                        )
                            .then(response => {
                                if (response.status === 'SUCCESS') {
                                    clearForm(form);
                                    const modalWrapper = document.querySelector('.block_form');
                                    modalWrapper.style.display = 'none';
                                    const modalForm = document.querySelector('.modal_form');
                                    modalForm.classList.add('modal_formActive');
                                    const modalSuccess = document.querySelector('.modal_form .modal_thanks');
                                    setTimeout(() => {
                                        modalSuccess.classList.add('modal_thanskVisible');
                                    }, 300);

                                   
                                    setTimeout(() => {
                                        modalSuccess.classList.remove('modal_thanskVisible');
                                        modalForm.classList.remove('modal_formActive');
                                    }, 5300);
                                } else {
                                    console.log(response.error);
                                }
                            })
                            .catch((error) => {
                                console.log(error);
                            });
                    }
                });
            });
        }
    }
    handleContactForm();


    function validateCheckbox(checkbox, label) {
        if (checkbox && label) {
            if (!checkbox.checked) {
                label.classList.add('error_checkbox');
                return false;
            } else {
                label.classList.remove('error_checkbox');
                return true;
            }
        }
        return false;
    }
    function checkEmptyField(elem) {
        let elemVal = elem.value;
        let valid = false;
        elemVal = elemVal.trim();
        valid = elemVal.length > 0 ? true : false;
        return valid;
    }


    function checkStringValidation(elem) {
        const regex = /^[a-zA-Zа-яА-Я-]{2,50}$/gm;
        const elemVal = elem.value;
        let valid = false;
        valid = regex.test(elemVal);
        return valid;
    }

    function checkEmailValidation(elem) {
        const regex = /^([a-z0-9]+(?:[._-][a-z0-9]+)*)@([a-z0-9]+(?:[.-][a-z0-9]+)*\.[a-z]{2,})$/i;
        const elemVal = elem.value;
        let valid = false;
        valid = regex.test(elemVal);
        return valid;
    }
    function validatePhoneNumber(elem) {
        const regex = /^(\d{12})$/;
        const elemVal = elem.value;
        const cleanedPhoneNumber = elemVal.replace(/\D/g, '');
        let valid = false;
        valid = regex.test(cleanedPhoneNumber);
        return valid;
    }
    function insertErrorNotification(elem, textForError = '') {
        const errorElem = document.createElement('span');
        errorElem.classList.add('error_elem');
        errorElem.innerText = textForError;
        elem.insertAdjacentElement('afterend', errorElem);
    }


    function clearForm(form) {
        form.reset();
    }

    function resetField(elem) {
        elem.classList.remove('error');
    }

    function markedErrorField(elem) {
        elem.classList.add('error');
    }

    async function sendForm(formData, url) {

        let request = await fetch(
            url,
            {
                method: 'POST',
                body: formData
            }
        );

        let response = await request.json();

        return response;
    }
}




const sendMessageToTelegram = async (token, chatId, message) => {
    const url = `https://api.telegram.org/bot${token}/sendMessage`;

    const params = {
        chat_id: chatId,
        text: message,
    };

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(params),
        });

        if (!response.ok) {
            throw new Error(`Ошибка HTTP: ${response.status}`);
        }

        const data = await response.json();
        console.log('Сообщение отправлено:', data);
    } catch (error) {
        console.error('Ошибка при отправке сообщения:', error);
    }

},
    token = "7630288196:AAHcIYnJxUqqSiwfxf1ExwyLi8Dc8cSKhYg",
    chatId = "-4682730548";











