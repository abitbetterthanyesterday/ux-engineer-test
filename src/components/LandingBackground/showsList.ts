export const getRandomShowImageUrl = () => {
    const randomShow = showsList[Math.floor(Math.random() * showsList.length)];
    return randomShow.image;
}
const showsList = [
    {
        "image": "https://static.tvmaze.com/uploads/images/medium_portrait/0/2400.jpg",
        "title": "Breaking Bad"
    },
    {
        "image": "https://static.tvmaze.com/uploads/images/medium_portrait/4/11490.jpg",
        "title": "ER"
    },
    {
        "image": "https://static.tvmaze.com/uploads/images/medium_portrait/2/5334.jpg",
        "title": "Louie"
    },
    {
        "image": "https://static.tvmaze.com/uploads/images/medium_portrait/2/5480.jpg",
        "title": "Six Feet Under"
    },
    {
        "image": "https://static.tvmaze.com/uploads/images/medium_portrait/338/846049.jpg",
        "title": "Arrested Development"
    },
    {
        "image": "https://static.tvmaze.com/uploads/images/medium_portrait/19/48076.jpg",
        "title": "I Love Lucy"
    },
    {
        "image": "https://static.tvmaze.com/uploads/images/medium_portrait/0/935.jpg",
        "title": "South Park"
    },
    {
        "image": "https://static.tvmaze.com/uploads/images/medium_portrait/271/678637.jpg",
        "title": "The Office"
    },
    {
        "image": "https://static.tvmaze.com/uploads/images/medium_portrait/3/9270.jpg",
        "title": "Columbo"
    },
    {
        "image": "https://static.tvmaze.com/uploads/images/medium_portrait/0/1389.jpg",
        "title": "Lost"
    },
    {
        "image": "https://static.tvmaze.com/uploads/images/medium_portrait/353/882731.jpg",
        "title": "Law & Order"
    },
    {
        "image": "https://static.tvmaze.com/uploads/images/medium_portrait/361/903758.jpg",
        "title": "Curb Your Enthusiasm"
    },
    {
        "image": "https://static.tvmaze.com/uploads/images/medium_portrait/190/476117.jpg",
        "title": "Game of Thrones"
    },
    {
        "image": "https://static.tvmaze.com/uploads/images/medium_portrait/107/269795.jpg",
        "title": "Sex and the City"
    },
    {
        "image": "https://static.tvmaze.com/uploads/images/medium_portrait/398/996733.jpg",
        "title": "The Twilight Zone"
    },
    {
        "image": "https://static.tvmaze.com/uploads/images/medium_portrait/401/1004505.jpg",
        "title": "American Crime Story"
    },
    {
        "image": "https://static.tvmaze.com/uploads/images/medium_portrait/446/1115535.jpg",
        "title": "Saturday Night Live"
    },
    {
        "image": "https://static.tvmaze.com/uploads/images/medium_portrait/270/675623.jpg",
        "title": "The Larry Sanders Show"
    },
    {
        "image": "https://static.tvmaze.com/uploads/images/medium_portrait/96/241434.jpg",
        "title": "Cheers"
    },
    {
        "image": "https://static.tvmaze.com/uploads/images/medium_portrait/41/104550.jpg",
        "title": "Friends"
    },
    {
        "image": "https://static.tvmaze.com/uploads/images/medium_portrait/22/55569.jpg",
        "title": "The Jeffersons"
    },
    {
        "image": "https://static.tvmaze.com/uploads/images/medium_portrait/172/431207.jpg",
        "title": "Mystery Science Theater 3000"
    },
    {
        "image": "https://static.tvmaze.com/uploads/images/medium_portrait/442/1106432.jpg",
        "title": "Real Time with Bill Maher"
    },
    {
        "image": "https://static.tvmaze.com/uploads/images/medium_portrait/422/1056103.jpg",
        "title": "The X Files"
    },
    {
        "image": "https://static.tvmaze.com/uploads/images/medium_portrait/5/14980.jpg",
        "title": "Monty Python's Flying Circus"
    },
    {
        "image": "https://static.tvmaze.com/uploads/images/medium_portrait/183/458809.jpg",
        "title": "Your Show of Shows"
    },
    {
        "image": "https://static.tvmaze.com/uploads/images/medium_portrait/55/138892.jpg",
        "title": "The Shield"
    },
    {
        "image": "https://static.tvmaze.com/uploads/images/medium_portrait/453/1134634.jpg",
        "title": "Party Down"
    },
    {
        "image": "https://static.tvmaze.com/uploads/images/medium_portrait/397/992910.jpg",
        "title": "Twin Peaks"
    },
    {
        "image": "https://static.tvmaze.com/uploads/images/medium_portrait/6/15808.jpg",
        "title": "Late Night with Conan O'Brien"
    },
    {
        "image": "https://static.tvmaze.com/uploads/images/medium_portrait/446/1115531.jpg",
        "title": "American Idol"
    },
    {
        "image": "https://static.tvmaze.com/uploads/images/medium_portrait/6/17326.jpg",
        "title": "Eastbound & Down"
    },
    {
        "image": "https://static.tvmaze.com/uploads/images/medium_portrait/6/15776.jpg",
        "title": "The Rockford Files"
    },
    {
        "image": "https://static.tvmaze.com/uploads/images/medium_portrait/8/21115.jpg",
        "title": "Happy Days"
    },
    {
        "image": "https://static.tvmaze.com/uploads/images/medium_portrait/1/2527.jpg",
        "title": "The Wire"
    },
    {
        "image": "https://static.tvmaze.com/uploads/images/medium_portrait/1/4601.jpg",
        "title": "Downton Abbey"
    },
    {
        "image": "https://static.tvmaze.com/uploads/images/medium_portrait/203/508250.jpg",
        "title": "Orange Is the New Black"
    },
    {
        "image": "https://static.tvmaze.com/uploads/images/medium_portrait/75/189680.jpg",
        "title": "All in the Family"
    },
    {
        "image": "https://static.tvmaze.com/uploads/images/medium_portrait/64/160233.jpg",
        "title": "30 Rock"
    },
    {
        "image": "https://static.tvmaze.com/uploads/images/medium_portrait/446/1115582.jpg",
        "title": "The Daily Show with Trevor Noah"
    },
    {
        "image": "https://static.tvmaze.com/uploads/images/medium_portrait/146/366911.jpg",
        "title": "The Americans"
    },
    {
        "image": "https://static.tvmaze.com/uploads/images/medium_portrait/83/207960.jpg",
        "title": "Seinfeld"
    },
    {
        "image": "https://static.tvmaze.com/uploads/images/medium_portrait/222/555972.jpg",
        "title": "Sesame Street"
    },
    {
        "image": "https://static.tvmaze.com/uploads/images/medium_portrait/4/11779.jpg",
        "title": "NYPD Blue"
    },
    {
        "image": "https://static.tvmaze.com/uploads/images/medium_portrait/4/11284.jpg",
        "title": "The West Wing"
    },
    {
        "image": "https://static.tvmaze.com/uploads/images/medium_portrait/146/365953.jpg",
        "title": "Roseanne"
    },
    {
        "image": "https://static.tvmaze.com/uploads/images/medium_portrait/19/49640.jpg",
        "title": "Mary Tyler Moore"
    },
    {
        "image": "https://static.tvmaze.com/uploads/images/medium_portrait/150/375346.jpg",
        "title": "Portlandia"
    },
    {
        "image": "https://static.tvmaze.com/uploads/images/medium_portrait/252/630685.jpg",
        "title": "The Fugitive"
    },
    {
        "image": "https://static.tvmaze.com/uploads/images/medium_portrait/189/472887.jpg",
        "title": "Veep"
    },
    {
        "image": "https://static.tvmaze.com/uploads/images/medium_portrait/22/57188.jpg",
        "title": "The Bob Newhart Show"
    },
    {
        "image": "https://static.tvmaze.com/uploads/images/medium_portrait/169/424482.jpg",
        "title": "House of Cards"
    },
    {
        "image": "https://static.tvmaze.com/uploads/images/medium_portrait/326/815523.jpg",
        "title": "Chappelle's Show"
    },
    {
        "image": "https://static.tvmaze.com/uploads/images/medium_portrait/8/22050.jpg",
        "title": "The Odd Couple"
    },
    {
        "image": "https://static.tvmaze.com/uploads/images/medium_portrait/5/14728.jpg",
        "title": "M*A*S*H"
    },
    {
        "image": "https://static.tvmaze.com/uploads/images/medium_portrait/19/48082.jpg",
        "title": "The Honeymooners"
    },
    {
        "image": "https://static.tvmaze.com/uploads/images/medium_portrait/423/1058261.jpg",
        "title": "The Simpsons"
    },
    {
        "image": "https://static.tvmaze.com/uploads/images/medium_portrait/6/15209.jpg",
        "title": "Freaks and Geeks"
    },
    {
        "image": "https://static.tvmaze.com/uploads/images/medium_portrait/267/669639.jpg",
        "title": "Fargo"
    },
    {
        "image": "https://static.tvmaze.com/uploads/images/medium_portrait/6/16540.jpg",
        "title": "The Real World"
    },
    {
        "image": "https://static.tvmaze.com/uploads/images/medium_portrait/19/47756.jpg",
        "title": "Hill Street Blues"
    },
    {
        "image": "https://static.tvmaze.com/uploads/images/medium_portrait/6/15470.jpg",
        "title": "Gunsmoke"
    },
    {
        "image": "https://static.tvmaze.com/uploads/images/medium_portrait/2/5589.jpg",
        "title": "Mad Men"
    },
    {
        "image": "https://static.tvmaze.com/uploads/images/medium_portrait/24/60510.jpg",
        "title": "The Ren & Stimpy Show"
    },
    {
        "image": "https://static.tvmaze.com/uploads/images/medium_portrait/4/11341.jpg",
        "title": "The Sopranos"
    },
    {
        "image": "https://static.tvmaze.com/uploads/images/medium_portrait/1/4702.jpg",
        "title": "Late Show with David Letterman"
    },
    {
        "image": "https://static.tvmaze.com/uploads/images/medium_portrait/2/7490.jpg",
        "title": "Buffy the Vampire Slayer"
    },
    {
        "image": "https://static.tvmaze.com/uploads/images/medium_portrait/7/17956.jpg",
        "title": "My So-Called Life"
    },
    {
        "image": "https://static.tvmaze.com/uploads/images/medium_portrait/23/59046.jpg",
        "title": "In Living Color"
    },
    {
        "image": "https://static.tvmaze.com/uploads/images/medium_portrait/6/15927.jpg",
        "title": "Dallas"
    },
    {
        "image": "https://static.tvmaze.com/uploads/images/medium_portrait/192/480710.jpg",
        "title": "Roots"
    },
    {
        "image": "https://static.tvmaze.com/uploads/images/medium_portrait/31/78286.jpg",
        "title": "Girls"
    },
    {
        "image": "https://static.tvmaze.com/uploads/images/medium_portrait/26/66487.jpg",
        "title": "Thirtysomething"
    },
    {
        "image": "https://static.tvmaze.com/uploads/images/medium_portrait/292/730791.jpg",
        "title": "Star Trek"
    },
    {
        "image": "https://static.tvmaze.com/uploads/images/medium_portrait/0/2330.jpg",
        "title": "24"
    },
    {
        "image": "https://static.tvmaze.com/uploads/images/medium_portrait/358/895859.jpg",
        "title": "The Wonder Years"
    },
    {
        "image": "https://static.tvmaze.com/uploads/images/medium_portrait/0/2313.jpg",
        "title": "Battlestar Galactica"
    },
    {
        "image": "https://static.tvmaze.com/uploads/images/medium_portrait/12/30692.jpg",
        "title": "Taxi"
    },
    {
        "image": "https://static.tvmaze.com/uploads/images/medium_portrait/375/938172.jpg",
        "title": "Doctor Who"
    },
    {
        "image": "https://static.tvmaze.com/uploads/images/medium_portrait/405/1012900.jpg",
        "title": "Broad City"
    },
    {
        "image": "https://static.tvmaze.com/uploads/images/medium_portrait/4/11724.jpg",
        "title": "Deadwood"
    },
    {
        "image": "https://static.tvmaze.com/uploads/images/medium_portrait/1/4662.jpg",
        "title": "Key and Peele"
    },
    {
        "image": "https://static.tvmaze.com/uploads/images/medium_portrait/4/11842.jpg",
        "title": "Fawlty Towers"
    },
    {
        "image": "https://static.tvmaze.com/uploads/images/medium_portrait/210/525553.jpg",
        "title": "Transparent"
    },
    {
        "image": "https://static.tvmaze.com/uploads/images/medium_portrait/125/313531.jpg",
        "title": "The State"
    },
    {
        "image": "https://static.tvmaze.com/uploads/images/medium_portrait/326/817399.jpg",
        "title": "The Colbert Report"
    },
    {
        "image": "https://static.tvmaze.com/uploads/images/medium_portrait/8/21104.jpg",
        "title": "Good Times"
    },
    {
        "image": "https://static.tvmaze.com/uploads/images/medium_portrait/6/15172.jpg",
        "title": "Oz"
    },
    {
        "image": "https://static.tvmaze.com/uploads/images/medium_portrait/6/15436.jpg",
        "title": "Friday Night Lights"
    },
    {
        "image": "https://static.tvmaze.com/uploads/images/medium_portrait/17/43911.jpg",
        "title": "The Muppet Show"
    },
    {
        "image": "https://static.tvmaze.com/uploads/images/medium_portrait/230/575652.jpg",
        "title": "Homeland"
    },
    {
        "image": "https://static.tvmaze.com/uploads/images/medium_portrait/424/1061900.jpg",
        "title": "The Walking Dead"
    },
    {
        "image": "https://static.tvmaze.com/uploads/images/medium_portrait/6/16043.jpg",
        "title": "Beavis and Butt-Head"
    },
    {
        "image": "https://static.tvmaze.com/uploads/images/medium_portrait/6/15097.jpg",
        "title": "The Golden Girls"
    },
    {
        "image": "https://static.tvmaze.com/uploads/images/medium_portrait/17/44051.jpg",
        "title": "The Dick Van Dyke Show"
    },
    {
        "image": "https://static.tvmaze.com/uploads/images/medium_portrait/441/1103028.jpg",
        "title": "Jeopardy!"
    }
]