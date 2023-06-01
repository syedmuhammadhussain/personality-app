const QuestionList = [
    {
        id: 0,
        question: 'You’re really busy at work and a colleague is telling you their life story and personal woes. You:',
        options: [
            {
                id: 0,
                text: 'Don’t dare to interrupt them',
                answer: [1, 2],
                checked: false
            },
            {
                id: 1,
                text: 'Think it’s more important to give them some of your time; work can wait',
                answer: [1],
                checked: false
            },
            {
                id: 2,
                text: 'Listen, but with only with half an ear',
                answer: [2],
                checked: false
            },
            {
                id: 3,
                text: 'Interrupt and explain that you are really busy at the moment',
                answer: [2],
                checked: false
            }
        ]
    },
    {
        id: 1,
        question: 'You’ve been sitting in the doctor’s waiting room for more than 25 minutes. You:',
        options: [
            {
                id: 0,
                text: 'Look at your watch every two minutes',
                answer: [1, 2],
                checked: false
            },
            {
                id: 1,
                text: 'Bubble with inner anger, but keep quiet',
                answer: [1],
                checked: false
            },
            {
                id: 2,
                text: 'Explain to other equally impatient people in the room that the doctor is always running late',
                answer: [2],
                checked: false
            },
            {
                id: 3,
                text: 'Complain in a loud voice, while tapping your foot impatiently',
                answer: [2],
                checked: false
            }
        ]
    },
    {
        id: 2,
        question: 'You’re having an animated discussion with a colleague regarding a project that you’re in charge of. You:',
        options: [
            {
                id: 0,
                text: 'Don’t dare contradict them',
                answer: [1, 2], // 1 is for introvert, 2 is for extrovert,
                checked: false
            },
            {
                id: 1,
                text: 'Think that they are obviously right',
                answer: [1],
                checked: false
            },
            {
                id: 2,
                text: 'Defend your own point of view, tooth and nail',
                answer: [2],
                checked: false
            },
            {
                id: 3,
                text: 'Continuously interrupt your colleague',
                answer: [2],
                checked: false
            }
        ]
    },
    {
        id: 3,
        question: 'You are taking part in a guided tour of a museum. You:',
        options: [
            {
                id: 0,
                text: 'Are a bit too far towards the back so don’t really hear what the guide is saying',
                answer: [1, 2], // 1 is for introvert, 2 is for extrovert,
                checked: false
            },
            {
                id: 1,
                text: 'Follow the group without question',
                answer: [1],
                checked: false
            },
            {
                id: 2,
                text: 'Make sure that everyone is able to hear properly',
                answer: [2],
                checked: false
            },
            {
                id: 3,
                text: 'Are right up the front, adding your own comments in a loud voice',
                answer: [2],
                checked: false
            }
        ]
    },
    {
        id: 4,
        question: 'During dinner parties at your home, you have a hard time with people who:',
        options: [
            {
                id: 0,
                text: 'Ask you to tell a story in front of everyone else',
                answer: [1, 2], // 1 is for introvert, 2 is for extrovert,
                checked: false
            },
            {
                id: 1,
                text: 'Talk privately between themselves',
                answer: [1],
                checked: false
            },
            {
                id: 2,
                text: 'Hang around you all evening',
                answer: [2],
                checked: false
            },
            {
                id: 3,
                text: 'Always drag the conversation back to themselves',
                answer: [2],
                checked: false
            }
        ]
    }
]

export default QuestionList;