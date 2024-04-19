const btn = document.querySelector('.talk')
const content = document.querySelector('.content')

function speak(text) {
    const text_speak = new SpeechSynthesisUtterance(text)

    text_speak.rate = 1
    text_speak.volume = 1
    text_speak.pitch = 3

    window.speechSynthesis.speak(text_speak)
}

function wishMe() {
    var day = new Date()
    var hour = day.getHours()

    if (hour >= 0 && hour < 12) {
        speak("Good Morning Boss...")
    } else if (hour >= 12 && hour < 17) {
        speak("Good Afternoon Master...")
    } else {
        speak("Good Evening Sir...")
    }
}

window.addEventListener('load', () => {
    speak("Initializing Copernicus...")
    wishMe()
})

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
const recognition = new SpeechRecognition()

recognition.onresult = (event) => {
    const currentIndex = event.resultIndex
    const transcript = event.results[currentIndex][0].transcript
    content.textContent = transcript
    takeCommand(transcript.toLowerCase())
}
btn.addEventListener('click', () => {
    content.textContent = "Listening..."
    recognition.start()
})


function takeCommand(message) {

    if (message.includes('hey') || message.includes('hello')) {
        speak("Hello Sir, How May I Help You?")
    }else if (message.includes('tell me about yourself')) {
        speak("My name is Copernicus. I was made by Udaaiyan on April 19, 2024. I was created using HTML, CSS, and JavaScript. Still I'm in the manufacturing stage. I am here to assist you. ")
    }  else if (message.includes('who is your boss') || message.includes('what is your boss name') || message.includes('who made you')) {
        speak("My boss's name is Udaaiyan.")
    } else if (message.includes('who is the mentor of your boss')) {
        speak("His mentor name is Badhhri.")
    }else if (message.includes('open front end questions') || message.includes('open react questions')) {
        window.open("https://docs.google.com/document/d/10u5VN7CtEhWOpjbJf6EnEsuoPkBuOfhcmq2aM3a8n84/edit", "_blank");
        speak("Opening front-end questions document...");
    }else if (message.includes('I love you') || message.includes('love you')) {
        speak("Love you too")
    } else if (message.includes("open google")) {
        window.open("https://google.com", "_blank")
        speak("Opening Google...")
    } else if (message.includes("open vs code") || message.includes("open visual studio code")) {
        window.open("vscode://", "_blank")
        speak("Opening Visual Studio Code...")
    } else if (message.includes("open youtube")) {
        window.open("https://youtube.com", "_blank")
        speak("Opening Youtube...")
    } else if (message.includes("open camera")) {
        window.open("https://example.com/camera", "_blank")
        speak("Opening Camera...")
    }
    else if (message.includes("open facebook")) {
        window.open("https://facebook.com", "_blank")
        speak("Opening Facebook...")
    } else if (message.includes('what is') || message.includes('who is') || message.includes('what are')) {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank")
        const finalText = "This is what I found on the internet regarding " + message
        speak(finalText)
    } else if (message.includes('wikipedia')) {
        window.open(`https://en.wikipedia.org/wiki/${message.replace("wikipedia", "").trim()}`, "_blank")
        const finalText = "This is what I found on Wikipedia regarding " + message
        speak(finalText)
    } else if (message.includes('time')) {
        const time = new Date().toLocaleString(undefined, { hour: "numeric", minute: "numeric" })
        const finalText = "The current time is " + time
        speak(finalText)
    } else if (message.includes('date')) {
        const date = new Date().toLocaleString(undefined, { month: "short", day: "numeric" })
        const finalText = "Today's date is " + date
        speak(finalText)
    } else if (message.includes('calculator')) {
        window.open('Calculator:///')
        const finalText = "Opening Calculator"
        speak(finalText)
    } else {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank")
        const finalText = "I found some information for " + message + " on Google"
        speak(finalText)
    }
}
