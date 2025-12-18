// Used to store multiple properties in one variable
// let userFirstName = 'David'
// let userLastName = 'Brag'
// let userDiscordID = 'DavidBrag0001'
// let userSubscriptionStatus = 'VIP'

let user= [{
    username: 'David',
    Email: 'david@frontendsimplified.com',
    subscriptionStatus: 'VIP',
    discordID: 'David Bragg0001',
    lessonsCompleted: [0, 1], 
    password: 'test123'
},
{
    username: 'Mitri',
    Email: 'mitri@frontendsimplified.com',
    subscriptionStatus: 'VIP',
    discordID: "Mitri",
    lessonsCompleted: [0, 1, 2, 3],
    password: 'test4560'
},
];

function login(email, password) {
    for (let i = 0; i < URLSearchParams.length; ++i) {
        if (users[i].email === email) {
        console.log(users[i]);
        if (users[i].password === password){
            console.log('log the user in - the details are correct')
        }
        else {
            console.log('password is inncorrect - try again')
            }
        }
    }
}

login('david@frontendsimplified.com', 'test123');
// }
// console.log(user.username[0]);
// console.log(user.subscriptionStatus)
// console.log(user.lessonsCompleted)
