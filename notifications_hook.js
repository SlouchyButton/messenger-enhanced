// Options for the observer (which mutations to observe)
const config = { attributes: false, characterData: true, childList: false, subtree: true }

let unreadMessages = {};

function checkMessages(notify) {
    document.querySelector('[role="navigation"]').querySelectorAll('[aria-label="Mark as read"]').forEach((el) => {
        // This magic might stop working, we will have to check later
        // Alternative way is iterating through <span> elements and finding two different values
        // and skipping first - first span's textContent would return everything (both user and message)
        // That would prolly be less likely to break, since facebook will probably still use <span> for text
        // and those random class selectors are way more likely to change (I expect #:rk: to stay same)
        let mainElement = el.parentElement.parentElement.parentElement.parentElement.parentElement
        let mainText = mainElement.querySelectorAll(".x1lliihq.x193iq5w.x6ikm8r.x10wlt62.xlyipyv.xuxw1ft")
        let imageSrc = mainElement.querySelector("img").src
        let user = mainText[0].textContent
        let message = mainText[1].textContent

        if (notify && (unreadMessages[user] == null || unreadMessages[user] != message)) {
            //notify here
            window.notifications.push(user, message, imageSrc)
            console.log("New message from ", user, " containing ", message, " user avatar ", imageSrc)
        }
        if (!notify) {
            console.log("Already recieved message from ", user, " containing ", message, " user avatar ", imageSrc)
        }
        unreadMessages[user] = message
    });
}

function pollContactsList() {
    if (document.querySelector('[role="navigation"]') != null) {
        // Start observing the target node for configured mutations
        observer.observe(document.querySelector('[role="navigation"]'), config)
        console.log("Notifications hooked")
        checkLoop()
        console.log("Notifications fallback loop started")
    } else {
        setTimeout(pollContactsList, 100)
    }
}

function checkLoop() {
    setTimeout(() => {
        checkMessages(true)
        checkLoop()
    }, 5000)
}

const callback = (mutationList, observer) => {
    console.log(mutationList)
    console.log('Possibly new message')
    checkMessages(true)
};

// Create an observer instance linked to the callback function
const observer = new MutationObserver(callback)
pollContactsList()