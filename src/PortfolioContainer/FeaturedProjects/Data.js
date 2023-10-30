const homeObject1 = {
    id:"project1",
    lightBg: true,
    topLine: 'backend, frontend, ui/ux',
    headline:'NB app',
    githubLink:"https://github.com/kinya-lindah/k",
    imgStart: false,
    image: "LoginNB.jpeg",
    alt: "NB login page",
    description: "NB is a android and IOS app with CRUD fnctionality whose front end is made with Kivy and backend is managed in python and MySQL.",
    lightboxid :"lighBox1",
    picture2: "nb/homeNB.jpeg",
    alt2:"Home page- first page after logging in ",
    picture1: "nb/LoginNB.jpeg",
    alt1:"Login Page",
    picture3:"nb/PI1NB.jpeg",
    alt3:"Collect new patient information",
    picture4:"nb/MN1NB.jpeg",
    alt4 :"Collecting more data with checkboxes",
    picture5 :"nb/NB2Open.jpeg",
    alt5:"View saved information with option to edit", 


};

const homeObject2 = {
    id:"project2",
    lightBg: false,
    topLine: 'frontend, ui/ux',
    headline:'TicTacToe ',
    githubLink:"https://github.com/kinya-lindah/tictactoe_tkinter",
    imgStart: true,
    image: 'xo/emptyScreen.png',
    alt: "TicTacToe Game",
    description: "TicTacToe Game is made in python with the Tkinter GUI. It allows a player to play against the computer and offers three levels: easy, medium, and hard",
    lightboxid :"lighBox2",
    picture1:"xo/emptyScreen.png",
    picture2:"xo/ongoingGame.png",
    picture3:"xo/computerMessage.png",
    picture4:"xo/lindahMessage.png",
    picture5:"xo/scoresScreen.png",
    picture6:"xo/drawMessage.png",
    
    alt1:"Starting TicTacToe",
    alt2:"Computer and player playing",
    alt3:"Computer Won Message",
    alt4 :"Player Won Message",
    alt5:"Shows scores after one wins ", 
    alt6: "Draw Message ",
    
    
};


export const allProjectsData = [homeObject1, homeObject2]

