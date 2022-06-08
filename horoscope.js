/* -- HELPER FUNCTION --
Returns a random string of a given array. */
function getRandString(array) {
    const randIndex = Math.floor(Math.random() * array.length);
    return array[randIndex];
}

// -- DATA SETS --

// Star signs
const starSign = ["Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces"];

const keyDate = ["3rd", "7th", "15th", "19th", "25th"];

// Horoscope predictions
const prediction = {
    thisMonth: ["look out for an opportunity for unexpected travel",
                "you may feel like it's impossible to satisfy your curiosity and whims",
                "will be a powerful time for manifestation work",
                "be mindful not to get lost in a pattern that can lead to burnout",
                "is a cosmically divine time to rearrange the furniture and work on home projects"],

    confusedWhy: ["technological snafus and people from your past have been weighing you down",
                "you feel like you're walking through quicksand",
                "you're choosing to make innovative decisions that shock others",
                "you're feeling energetically zapped",
                "it's been a bit of a sh*tshow recently"],

    clarityArrives: ["as Saturn goes retrograde in Aquarius in your eleventh house of friendship and community",
                    "as Venus, the planet of love, confronts restrictive Saturn",
                    "when a full moon in Sagittarius forms a confusing angle with Neptune",
                    "on the same day Jupiter, the planet of luck and abundance, enters Aries",
                    "when Saturn, the zaddy of the zodiac, goes retrograde and delivers a dose of karma"],

    regainPower: ["extra blessings will arrive when it comes to your residence and family",
                "Venus, planet of love, pleasure and beauty, sashays into Aquarius",
                "a Grand Earth Trine forms between the Moon in Virgo, Mercury in Taurus, and Pluto in Capricorn",
                "you may find yourself hashing out what you need to hash out",
                "you will feel motivated to cocoon and spend time working on yourself"],

    cantFool: ["Leo Minor", "Andromeda", "Cassiopeia", "Pegasus", "Orion"],

    homework: ["use your words",
                "live more poetically, not just productively",
                "prioritise your rest to feed your soul",
                "stay regulated, calm and curious - not furious",
                "learn the power of the pause"],
}

/* -- FINAL FUNCTION --
Generates a random horoscope from the data sets above and prints to the console in a specific format. */

function generateHoroscope() {

    // Current month
    const nameOfMonth = new Date().toLocaleString('default', {month: 'long'});

    // Star sign
    const randStarSign = getRandString(starSign);

    // Key date
    const randKeyDate = getRandString(keyDate);

    // Predictions
    const randThisMonth = getRandString(prediction.thisMonth);
    const randConfusedWhy = getRandString(prediction.confusedWhy);
    const randClarityArrives = getRandString(prediction.clarityArrives);
    const randRegainPower = getRandString(prediction.regainPower);
    const randCantFool = getRandString(prediction.cantFool);
    const randHomework = getRandString(prediction.homework);

    // Print horoscope
    console.log(
    `${randStarSign} Monthly Horoscope for ${nameOfMonth}
        
    ** Add this date to your cal: ${randKeyDate} ${nameOfMonth} **
    
    Say hello to ${nameOfMonth}, ${randStarSign}! This month, ${randThisMonth}.

    If you've been confused as to why ${randConfusedWhy}, clarity arrives ${randClarityArrives}.

    On ${randKeyDate} ${nameOfMonth}, ${randRegainPower}, helping you regain your power.

    Are you protecting your time and energy, ${randStarSign}? You can't fool ${randCantFool}! Your cosmic homework this month is to ${randHomework}.`
    )
}

// Function call

generateHoroscope();