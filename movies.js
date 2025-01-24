
//theater
const cinema = {
    name: 'PVR Cinemas',
    location: 'Punjagutta',
    movies: [
        {
            title: 'Game changer',
            shows: ["10.00 AM", "2.00 PM", "5.00 PM"],
            seats: [60, 50, 40],
            price: {
                normal: 200,
                premium: 300
            },
            genre: "Action,political,Drama",
            image: 'https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/game-changer-et00311772-1731311322.jpg'

        },
        {
            title: 'SankrathikiVastunnam',
            shows: ["11.00 AM", "3.00 PM", "6.00 PM"],
            seats: [30, 20, 10],
            price: {
                normal: 250,
                premium: 350
            },
            genre: "Action,Comedy,Drama",
            image: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/sankranthiki-vasthunam-et00418119-1731656543.jpg"

        },
        {
            title: 'Daku maharaj',
            shows: ["12.00 PM", "4.00 PM", "7.00 PM"],
            seats: [15, 10, 5],
            price: {
                normal: 300,
                premium: 400
            },
            genre: "Action,thriller,Drama",
            image: 'https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/daaku-maharaaj-et00419964-1731669684.jpg'
        },
        {
            title: 'Sky force',
            shows: ["1.00 PM", "5.00 PM", "8.00 PM"],
            seats: [20, 20, 15],
            price: {
                normal: 150,
                premium: 250
            },
            genre: "Biography,Drama,Thriller",
            image: 'https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/sky-force-et00371539-1737535327.jpg'
        },
        {
            title: 'Pushpa 2',
            shows: ["2.00 PM", "6.00 PM", "9.00 PM"],
            seats: [35, 35, 30],
            price: {
                normal: 180,
                premium: 280
            },
            genre: "Action,Sci-Fi,Thriller",
            image: 'https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/pushpa-2-the-rule-et00356724-1737184762.jpg'
        },
        {
            title: 'Game changer',
            shows: ["10.00 AM", "2.00 PM", "5.00 PM"],
            seats: [60, 50, 40],
            price: {
                normal: 200,
                premium: 300
            },
            genre: "Action,political,Drama",
            image: 'https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/game-changer-et00311772-1731311322.jpg'

        },
        {
            title: 'SankrathikiVastunnam',
            shows: ["11.00 AM", "3.00 PM", "6.00 PM"],
            seats: [30, 20, 10],
            price: {
                normal: 250,
                premium: 350
            },
            genre: "Action,Comedy,Drama",
            image: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/sankranthiki-vasthunam-et00418119-1731656543.jpg"

        },
        {
            title: 'Daku maharaj',
            shows: ["12.00 PM", "4.00 PM", "7.00 PM"],
            seats: [15, 10, 5],
            price: {
                normal: 300,
                premium: 400
            },
            genre: "Action,thriller,Drama",
            image: 'https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/daaku-maharaaj-et00419964-1731669684.jpg'
        },
        {
            title: 'Sky force',
            shows: ["1.00 PM", "5.00 PM", "8.00 PM"],
            seats: [20, 20, 15],
            price: {
                normal: 150,
                premium: 250
            },
            genre: "Biography,Drama,Thriller",
            image: 'https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/sky-force-et00371539-1737535327.jpg'
        }

    ]
}

console.log("Theatre name ", cinema.name);
console.log("First movie name " + cinema.movies[0].title);

